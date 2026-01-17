'use client';

import type { ReactNode } from 'react';

import * as FileInputPrimitive from '@/components/file-input';

export interface FileInputProps {
  id: string;
  className?: string;
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
  hideLabel?: boolean;
  label?: string;
  cta?: string;
  hint?: string;
  message?: string;
  uploadingLabel?: string;
  successLabel?: string;
  errorLabel?: string;
  uploadIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  removeIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

function formatBytes(bytes: number) {
  if (bytes === 0) return '0 B';
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)} ${sizes[i]}`;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --file-input-fill: var(--form-fill);
 *   --file-input-fill-hover: var(--form-fill-hover);
 *   --file-input-fill-disabled: var(--form-fill);
 *   --file-input-fill-dragging: var(--success-background);
 *   --file-input-fill-progress: var(--brand);
 *   --file-input-fill-icon: var(--form-fill-icon);
 *   --file-input-text-primary: var(--form-text-primary);
 *   --file-input-text-secondary: var(--form-text-secondary);
 *   --file-input-text-error: var(--error);
 *   --file-input-font-message: var(--font-body);
 *   --file-input-font-header: var(--font-body);
 * }
 * ```
 */
export function FileInput({
  id,
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
  hideLabel = true,
  label = 'File upload',
  cta = 'Upload file',
  hint = 'or drag and drop files here',
  message,
  uploadingLabel = 'Uploading',
  successLabel = 'Upload complete',
  errorLabel = 'Error',
  uploadIcon,
  removeIcon,
}: FileInputProps) {
  return (
    <FileInputPrimitive.Root
      accept={accept}
      className={className}
      disabled={disabled}
      id={id}
      invalid={invalid}
      maxFiles={maxFiles}
      maxSize={maxSize}
      multiple={multiple}
      name={name}
      onFileAccept={onFileAccept}
      onFileReject={onFileReject}
      onFileValidate={onFileValidate}
      onUploadError={onUploadError}
      onUploadFile={onUploadFile}
      onUploadSuccess={onUploadSuccess}
    >
      <FileInputPrimitive.Label className={hideLabel ? 'sr-only' : 'mb-2'}>
        {label}
      </FileInputPrimitive.Label>
      <FileInputPrimitive.Dropzone>
        <FileInputPrimitive.Trigger>
          <FileInputPrimitive.UploadIcon asChild={uploadIcon?.asChild}>
            {uploadIcon?.children}
          </FileInputPrimitive.UploadIcon>
          {cta}
        </FileInputPrimitive.Trigger>
        <FileInputPrimitive.DropzoneError />
        <FileInputPrimitive.DropzoneHint>{hint}</FileInputPrimitive.DropzoneHint>
      </FileInputPrimitive.Dropzone>
      {message != null && <FileInputPrimitive.Message>{message}</FileInputPrimitive.Message>}
      <FileInputPrimitive.List>
        {({ files }) =>
          Array.from(files.entries()).map(([file]) => (
            <FileInputPrimitive.Item
              file={file}
              key={`${file.name}-${file.size}-${file.lastModified}`}
            >
              {({ fileState: { file: fileItem, status, error } }) => (
                <>
                  <FileInputPrimitive.Metadata>
                    <FileInputPrimitive.Details>
                      <FileInputPrimitive.Header>
                        <FileInputPrimitive.Icon />
                        <FileInputPrimitive.Name>{fileItem.name}</FileInputPrimitive.Name>
                      </FileInputPrimitive.Header>
                      <FileInputPrimitive.Status />
                      {status === 'idle' && (
                        <FileInputPrimitive.Status>
                          {formatBytes(fileItem.size)}
                        </FileInputPrimitive.Status>
                      )}
                      {status === 'uploading' && (
                        <FileInputPrimitive.Status>{uploadingLabel}</FileInputPrimitive.Status>
                      )}
                      {status === 'success' && (
                        <FileInputPrimitive.Status>{successLabel}</FileInputPrimitive.Status>
                      )}
                      {status === 'error' && (
                        <FileInputPrimitive.Error>{error ?? errorLabel}</FileInputPrimitive.Error>
                      )}
                    </FileInputPrimitive.Details>
                  </FileInputPrimitive.Metadata>
                  <FileInputPrimitive.Remove>
                    <FileInputPrimitive.RemoveIcon asChild={removeIcon?.asChild}>
                      {removeIcon?.children}
                    </FileInputPrimitive.RemoveIcon>
                  </FileInputPrimitive.Remove>
                  {status === 'uploading' && <FileInputPrimitive.Progress />}
                </>
              )}
            </FileInputPrimitive.Item>
          ))
        }
      </FileInputPrimitive.List>
    </FileInputPrimitive.Root>
  );
}
