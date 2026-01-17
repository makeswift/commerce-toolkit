import type { Meta, StoryObj } from '@storybook/react-vite';
import { Upload, X } from 'lucide-react';
import type { ComponentType } from 'react';

import * as FileInputPrimitive from '@/components/file-input';
import { FileInput, type FileInputProps } from '@/components/file-input/file-input';

function formatBytes(bytes: number) {
  if (bytes === 0) return '0 B';
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)} ${sizes[i]}`;
}

function simulateUpload(file: File, reportProgress: (progress: number) => void): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        clearInterval(interval);
        reportProgress(100);

        if (file.name.includes('error')) {
          reject(new Error('Upload failed'));
        } else {
          resolve({ url: `https://example.com/uploads/${file.name}` });
        }
      } else {
        reportProgress(Math.min(progress, 99));
      }
    }, 200);
  });
}

const meta: Meta<typeof FileInput> = {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A file upload component with drag-and-drop support, progress tracking, and file validation.

## CSS Variables

\`\`\`css
:root {
  --file-input-fill: var(--form-fill);
  --file-input-fill-hover: var(--form-fill-hover);
  --file-input-fill-disabled: var(--form-fill);
  --file-input-fill-dragging: var(--success-background);
  --file-input-fill-progress: var(--brand);
  --file-input-fill-icon: var(--form-fill-icon);
  --file-input-text-primary: var(--form-text-primary);
  --file-input-text-secondary: var(--form-text-secondary);
  --file-input-text-error: var(--error);
  --file-input-font-message: var(--font-body);
  --file-input-font-header: var(--font-body);
}
\`\`\`

## Usage

### High-Level Component

The \`FileInput\` component provides a complete file upload experience:

\`\`\`tsx
import { FileInput } from '@/components/file-input';

<FileInput
  id="file-upload"
  label="Upload files"
  cta="Select files"
  hint="or drag and drop files here"
  multiple
  accept="image/*"
  maxSize={5 * 1024 * 1024} // 5MB
  maxFiles={10}
  onUploadFile={async (file, reportProgress) => {
    // Upload logic with progress tracking
    const result = await uploadToServer(file, reportProgress);
    return result;
  }}
/>
\`\`\`

### Key Props

- \`accept\` - Restrict file types (e.g., \`"image/*"\`, \`".pdf,.docx"\`)
- \`multiple\` - Allow multiple file selection
- \`maxSize\` - Maximum file size in bytes
- \`maxFiles\` - Maximum number of files allowed
- \`onUploadFile\` - Async upload handler with progress callback
- \`onFileReject\` - Called when a file fails validation

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as FileInput from '@/components/file-input';

<FileInput.Root id="custom-upload" multiple onUploadFile={handleUpload}>
  <FileInput.Label>Upload files</FileInput.Label>
  <FileInput.Dropzone>
    <FileInput.Trigger>
      <FileInput.UploadIcon />
      Select files
    </FileInput.Trigger>
    <FileInput.DropzoneError />
    <FileInput.DropzoneHint>or drag and drop here</FileInput.DropzoneHint>
  </FileInput.Dropzone>
  <FileInput.Message>Accepted formats: images, PDFs</FileInput.Message>
  <FileInput.List>
    {({ files }) =>
      Array.from(files.entries()).map(([file]) => (
        <FileInput.Item file={file} key={file.name}>
          {({ fileState }) => (
            <>
              <FileInput.Metadata>
                <FileInput.Details>
                  <FileInput.Header>
                    <FileInput.Icon />
                    <FileInput.Name>{fileState.file.name}</FileInput.Name>
                  </FileInput.Header>
                  <FileInput.Status>...</FileInput.Status>
                </FileInput.Details>
              </FileInput.Metadata>
              <FileInput.Remove>
                <FileInput.RemoveIcon />
              </FileInput.Remove>
              {fileState.status === 'uploading' && <FileInput.Progress />}
            </>
          )}
        </FileInput.Item>
      ))
    }
  </FileInput.List>
</FileInput.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the file input',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., "image/*", ".pdf,.docx")',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the file input is disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the file input is in an invalid state',
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files allowed',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    label: {
      control: 'text',
      description: 'Label text for the file input',
    },
    hideLabel: {
      control: 'boolean',
      description: 'Visually hide the label (still accessible)',
    },
    cta: {
      control: 'text',
      description: 'Call-to-action text on the trigger button',
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the trigger',
    },
    message: {
      control: 'text',
      description: 'Helper message displayed below the dropzone',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="w-[400px] max-w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<FileInputProps>;

// Default file input
export const Default: Story = {
  args: {
    id: 'file-input-default',
    label: 'Upload files',
    cta: 'Upload file',
    hint: 'or drag and drop files here',
    multiple: true,
  },
};

// With upload handler (shows progress)
export const WithUploadHandler: Story = {
  args: {
    id: 'file-input-upload',
    label: 'Upload documents',
    cta: 'Select files',
    hint: 'or drag and drop files here',
    message: 'Files will be uploaded automatically after selection.',
    multiple: true,
    onUploadFile: simulateUpload,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    id: 'file-input-disabled',
    label: 'Upload files',
    cta: 'Upload file',
    hint: 'or drag and drop files here',
    disabled: true,
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <FileInputPrimitive.Root id="composable-file-input" multiple onUploadFile={simulateUpload}>
      <FileInputPrimitive.Label>Upload files</FileInputPrimitive.Label>
      <FileInputPrimitive.Dropzone>
        <FileInputPrimitive.Trigger>
          <Upload size={20} />
          Select files
        </FileInputPrimitive.Trigger>
        <FileInputPrimitive.DropzoneError />
        <FileInputPrimitive.DropzoneHint>
          or drag and drop files here
        </FileInputPrimitive.DropzoneHint>
      </FileInputPrimitive.Dropzone>
      <FileInputPrimitive.Message>
        Supported formats: images, PDFs, documents
      </FileInputPrimitive.Message>
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
                      {status === 'idle' && (
                        <FileInputPrimitive.Status>
                          {formatBytes(fileItem.size)}
                        </FileInputPrimitive.Status>
                      )}
                      {status === 'uploading' && (
                        <FileInputPrimitive.Status>Uploading...</FileInputPrimitive.Status>
                      )}
                      {status === 'success' && (
                        <FileInputPrimitive.Status>Complete</FileInputPrimitive.Status>
                      )}
                      {status === 'error' && (
                        <FileInputPrimitive.Error>
                          {error ?? 'Upload failed'}
                        </FileInputPrimitive.Error>
                      )}
                    </FileInputPrimitive.Details>
                  </FileInputPrimitive.Metadata>
                  <FileInputPrimitive.Remove>
                    <X size={20} />
                  </FileInputPrimitive.Remove>
                  {status === 'uploading' && <FileInputPrimitive.Progress />}
                </>
              )}
            </FileInputPrimitive.Item>
          ))
        }
      </FileInputPrimitive.List>
    </FileInputPrimitive.Root>
  ),
};
