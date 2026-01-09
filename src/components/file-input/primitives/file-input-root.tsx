'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import type { ChangeEvent, ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';

import { cn } from '@/lib';

export interface FileState {
  file: File;
  progress: number;
  status: 'idle' | 'uploading' | 'success' | 'error';
  error?: string;
}

interface FileInputState {
  files: Map<File, FileState>;
}

type FileInputAction =
  | { type: 'ADD_FILES'; files: File[] }
  | { type: 'SET_PROGRESS'; file: File; progress: number }
  | { type: 'SET_SUCCESS'; file: File }
  | { type: 'SET_ERROR'; file: File; error: string }
  | { type: 'REMOVE_FILE'; file: File }
  | { type: 'CLEAR' };

const initialState: FileInputState = {
  files: new Map(),
};

function fileInputReducer(state: FileInputState, action: FileInputAction): FileInputState {
  switch (action.type) {
    case 'ADD_FILES': {
      const newFiles = new Map(state.files);

      action.files.forEach((file) => {
        if (!newFiles.has(file)) {
          newFiles.set(file, {
            file,
            progress: 0,
            status: 'idle',
          });
        }
      });

      return { ...state, files: newFiles };
    }

    case 'SET_PROGRESS': {
      const updatedFiles = new Map(state.files);
      const fileState = updatedFiles.get(action.file);

      if (fileState) {
        updatedFiles.set(action.file, {
          ...fileState,
          progress: action.progress,
          status: 'uploading',
        });
      }

      return { ...state, files: updatedFiles };
    }

    case 'SET_SUCCESS': {
      const successFiles = new Map(state.files);
      const fileState = successFiles.get(action.file);

      if (fileState) {
        successFiles.set(action.file, {
          ...fileState,
          status: 'success',
          progress: 100,
        });
      }

      return { ...state, files: successFiles };
    }

    case 'SET_ERROR': {
      const errorFiles = new Map(state.files);
      const fileState = errorFiles.get(action.file);

      if (fileState) {
        errorFiles.set(action.file, {
          ...fileState,
          status: 'error',
          error: action.error,
        });
      }

      return { ...state, files: errorFiles };
    }

    case 'REMOVE_FILE': {
      const removeFiles = new Map(state.files);

      removeFiles.delete(action.file);

      return { ...state, files: removeFiles };
    }

    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
}

interface FileInputContextValue {
  files: Map<File, FileState>;
  id: string;
  inputId: string;
  inputRef: RefObject<HTMLInputElement | null>;
  disabled?: boolean;
  invalid?: boolean;
  validationError?: string;
  addFiles: (files: File[]) => void;
  removeFile: (file: File) => void;
  openFilePicker: () => void;
}

const FileInputContext = createContext<FileInputContextValue | null>(null);

export function useFileInput() {
  const context = useContext(FileInputContext);

  if (!context) {
    throw new Error('useFileInput must be used within a FileInputRoot');
  }

  return context;
}

export interface FileInputRootProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'id' | 'onError'> {
  id: string;
  children: ReactNode;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  maxFiles?: number;
  maxSize?: number;
  onFileValidate?: (file: File) => string | null | undefined;
  onFileAccept?: (file: File) => void;
  onFileReject?: (file: File, reason: string) => void;
  onUploadFile?: (file: File, reportProgress: (progress: number) => void) => Promise<unknown>;
  onUploadSuccess?: (file: File, result: unknown) => void;
  onUploadError?: (file: File, error: Error) => void;
}

export function FileInputRoot({
  id,
  children,
  className,
  accept,
  multiple,
  disabled,
  invalid,
  name,
  maxFiles,
  maxSize,
  onFileValidate,
  onFileAccept,
  onFileReject,
  onUploadFile,
  onUploadSuccess,
  onUploadError,
  ...props
}: FileInputRootProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = `${id}-input`;

  const [state, dispatch] = useReducer(fileInputReducer, initialState);
  const [validationError, setValidationError] = useState<string | undefined>(undefined);

  const setProgress = useCallback((file: File, progress: number) => {
    dispatch({ type: 'SET_PROGRESS', file, progress });
  }, []);

  const setSuccess = useCallback((file: File) => {
    dispatch({ type: 'SET_SUCCESS', file });
  }, []);

  const setError = useCallback((file: File, error: string) => {
    dispatch({ type: 'SET_ERROR', file, error });
  }, []);

  const addFilesToState = useCallback((files: File[]) => {
    dispatch({ type: 'ADD_FILES', files });
  }, []);

  const removeFile = useCallback((file: File) => {
    const input = inputRef.current;

    if (input?.files) {
      const dataTransfer = new DataTransfer();
      const currentFiles = Array.from(input.files);

      currentFiles.filter((f) => f !== file).forEach((f) => dataTransfer.items.add(f));

      input.files = dataTransfer.files;
    }

    dispatch({ type: 'REMOVE_FILE', file });
  }, []);

  const openFilePicker = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const processFiles = useCallback(
    (newFiles: File[]) => {
      const filesToUpload: File[] = [];
      const acceptedFiles: File[] = [];

      newFiles.forEach((file) => {
        let rejected = false;
        let rejectionReason = '';

        if (onFileValidate) {
          const validationMessage = onFileValidate(file);

          if (validationMessage != null) {
            rejectionReason = validationMessage;
            rejected = true;
          }
        }

        if (!rejected && accept != null) {
          const acceptTypes = accept.split(',').map((t) => t.trim().toLowerCase());
          const fileType = file.type.toLowerCase();
          const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;

          const isAccepted = acceptTypes.some(
            (type) =>
              type === fileType ||
              type === fileExtension ||
              (type.endsWith('/*') && fileType.startsWith(type.slice(0, -1))),
          );

          if (!isAccepted) {
            rejectionReason = 'File type not accepted';
            rejected = true;
          }
        }

        if (!rejected && maxSize != null && file.size > maxSize) {
          rejectionReason = 'File size exceeds limit';
          rejected = true;
        }

        if (rejected) {
          setValidationError(rejectionReason);
          onFileReject?.(file, rejectionReason);
        } else {
          setValidationError(undefined);
          onFileAccept?.(file);
          filesToUpload.push(file);
          acceptedFiles.push(file);
        }
      });

      const input = inputRef.current;

      if (input) {
        const dataTransfer = new DataTransfer();
        const existingFiles = Array.from(state.files.keys());
        const allFiles = [...existingFiles, ...acceptedFiles];
        const limitedFiles = maxFiles != null ? allFiles.slice(0, maxFiles) : allFiles;

        limitedFiles.forEach((file) => dataTransfer.items.add(file));
        input.files = dataTransfer.files;

        addFilesToState(limitedFiles);
      }

      if (filesToUpload.length > 0) {
        if (onUploadFile) {
          filesToUpload.forEach((file) => {
            setProgress(file, 0);

            const reportProgress = (progress: number) => {
              setProgress(file, progress);
            };

            void Promise.resolve(onUploadFile(file, reportProgress))
              .then((result) => {
                setSuccess(file);
                onUploadSuccess?.(file, result);
              })
              .catch((error: unknown) => {
                const err = error instanceof Error ? error : new Error('Upload failed');

                setError(file, err.message);
                onUploadError?.(file, err);
              });
          });
        } else {
          filesToUpload.forEach((file) => {
            setSuccess(file);
          });
        }
      }
    },
    [
      accept,
      maxFiles,
      maxSize,
      state.files,
      onFileValidate,
      onFileAccept,
      onFileReject,
      onUploadFile,
      onUploadSuccess,
      onUploadError,
      addFilesToState,
      setProgress,
      setSuccess,
      setError,
    ],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newFiles = Array.from(event.target.files ?? []);

      processFiles(newFiles);
    },
    [processFiles],
  );

  const contextValue = useMemo<FileInputContextValue>(
    () => ({
      files: state.files,
      id,
      inputId,
      inputRef,
      disabled,
      invalid,
      validationError,
      addFiles: processFiles,
      removeFile,
      openFilePicker,
    }),
    [
      state.files,
      id,
      inputId,
      disabled,
      invalid,
      validationError,
      processFiles,
      removeFile,
      openFilePicker,
    ],
  );

  return (
    <FileInputContext.Provider value={contextValue}>
      <div
        aria-disabled={disabled === true ? true : undefined}
        aria-invalid={invalid === true || validationError != null ? true : undefined}
        className={cn('group/file-input @container', className)}
        data-slot="file-input-root"
        {...props}
      >
        <input
          accept={accept}
          className="sr-only"
          disabled={disabled}
          id={inputId}
          multiple={multiple}
          name={name}
          onChange={handleChange}
          ref={inputRef}
          tabIndex={-1}
          type="file"
        />
        {children}
      </div>
    </FileInputContext.Provider>
  );
}
