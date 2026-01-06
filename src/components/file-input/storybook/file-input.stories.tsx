import type { Meta, StoryObj } from '@storybook/react-vite';
import { UploadIcon, XIcon } from 'lucide-react';
import type { ComponentType } from 'react';

import * as FileInputPrimitive from '@/components/file-input';
import { FileInput, type FileInputProps } from '@/components/file-input/file-input';
import { Label } from '@/components/label';

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

The FileInput component supports extensive theming through CSS variables:

\`\`\`css
:root {
  /* Dropzone */
  --file-input-dropzone-border: var(--contrast-200);
  --file-input-dropzone-background: var(--background);
  --file-input-dropzone-border-hover: var(--foreground);
  --file-input-dropzone-background-hover: var(--contrast-100);
  --file-input-dropzone-border-disabled: color-mix(in oklab, var(--contrast-200) 70%, transparent);
  --file-input-dropzone-background-disabled: var(--background);
  --file-input-dropzone-border-error: var(--error);
  --file-input-dropzone-border-dragging: var(--foreground);
  --file-input-dropzone-background-dragging: color-mix(in oklab, var(--success), white 75%);
  --file-input-dropzone-message-font-family: var(--font-family-body);
  --file-input-dropzone-message: var(--contrast-500);
  --file-input-dropzone-message-disabled: color-mix(in oklab, var(--contrast-500) 70%, transparent);
  --file-input-dropzone-message-error: var(--error);

  /* Trigger */
  --file-input-trigger-icon: var(--foreground);
  --file-input-focus: var(--primary);

  /* Message */
  --file-input-message-font-family: var(--font-family-body);
  --file-input-message: var(--contrast-500);

  /* File Item */
  --file-input-item-border: var(--contrast-200);
  --file-input-item-border-error: var(--error);
  --file-input-item-name-font-family: var(--font-family-body);
  --file-input-item-name: var(--foreground);
  --file-input-item-status: var(--contrast-500);
  --file-input-item-status-error: var(--error);
  --file-input-item-delete-hover: var(--contrast-100);
  --file-input-item-delete-icon: var(--foreground);
  --file-input-item-progress: var(--primary);

  /* File Icon */
  --file-input-icon: var(--contrast-400);
}
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
    uploadingLabel: {
      control: 'text',
      description: 'Label shown while uploading',
    },
    successLabel: {
      control: 'text',
      description: 'Label shown on successful upload',
    },
    errorLabel: {
      control: 'text',
      description: 'Label shown on upload error',
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

export const Default: Story = {
  args: {
    id: 'file-input-default',
    label: 'Upload files',
    cta: 'Upload file',
    hint: 'or drag and drop files here',
    multiple: true,
  },
};

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
  parameters: {
    docs: {
      description: {
        story:
          'When `onUploadFile` is provided, files are automatically uploaded after selection. Progress is tracked and displayed in real-time.',
      },
    },
  },
};

export const SingleFile: Story = {
  args: {
    id: 'file-input-single',
    label: 'Profile picture',
    cta: 'Choose image',
    hint: 'or drag and drop here',
    accept: 'image/*',
    multiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Set `multiple={false}` to allow only a single file selection.',
      },
    },
  },
};

export const WithAcceptedTypes: Story = {
  args: {
    id: 'file-input-accepted',
    label: 'Upload PDF documents',
    cta: 'Select PDF',
    hint: 'Only PDF files are accepted',
    accept: '.pdf,application/pdf',
    multiple: true,
    message: 'Accepted formats: PDF',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `accept` prop to restrict file types. Unsupported files will be rejected.',
      },
    },
  },
};

export const WithMaxSize: Story = {
  args: {
    id: 'file-input-maxsize',
    label: 'Upload images',
    cta: 'Select images',
    hint: 'Maximum 2MB per file',
    accept: 'image/*',
    multiple: true,
    maxSize: 2 * 1024 * 1024, // 2MB
    message: 'Images must be smaller than 2MB.',
    onFileReject: (file, reason) => {
      console.log(`File rejected: ${file.name} - ${reason}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `maxSize` prop limits individual file sizes. Files exceeding the limit will trigger the `onFileReject` callback.',
      },
    },
  },
};

export const WithMaxFiles: Story = {
  args: {
    id: 'file-input-maxfiles',
    label: 'Upload photos',
    cta: 'Select photos',
    hint: 'Maximum 3 photos allowed',
    accept: 'image/*',
    multiple: true,
    maxFiles: 3,
    message: 'You can upload up to 3 photos.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `maxFiles` to limit the number of files that can be added.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'file-input-disabled',
    label: 'Upload files',
    cta: 'Upload file',
    hint: 'or drag and drop files here',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    id: 'file-input-invalid',
    label: 'Upload files',
    cta: 'Upload file',
    hint: 'or drag and drop files here',
    invalid: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `invalid` prop applies error styling to the dropzone. Validation errors from file rejection are automatically displayed in place of the hint.',
      },
    },
  },
};

export const HiddenLabel: Story = {
  args: {
    id: 'file-input-hidden-label',
    label: 'Upload files',
    hideLabel: true,
    cta: 'Upload file',
    hint: 'or drag and drop files here',
  },
  parameters: {
    docs: {
      description: {
        story: 'Set `hideLabel={true}` to visually hide the label while keeping it accessible.',
      },
    },
  },
};

export const CustomLabels: Story = {
  args: {
    id: 'file-input-custom-labels',
    label: 'Attachments',
    cta: 'Browse files',
    hint: 'Drop files here to attach',
    uploadingLabel: 'Sending...',
    successLabel: 'Sent!',
    errorLabel: 'Failed to send',
    multiple: true,
    onUploadFile: simulateUpload,
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize the status labels shown during and after upload.',
      },
    },
  },
};

export const ComposableAnatomy: Story = {
  render: () => (
    <FileInputPrimitive.Root id="composable-file-input" multiple onUploadFile={simulateUpload}>
      <Label className="mb-2" htmlFor="composable-file-input-input">
        Upload files
      </Label>
      <FileInputPrimitive.Dropzone>
        <FileInputPrimitive.Trigger>
          <UploadIcon className="size-5" />
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
                    <XIcon className="size-5" />
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
  parameters: {
    docs: {
      description: {
        story: `
The FileInput component is built from composable primitives. You can use these primitives to build custom file upload experiences.

### Available Primitives

- \`Root\` - Container that manages file state and context
- \`Dropzone\` - Interactive drop area with drag-and-drop support
- \`Trigger\` - Button to open the file picker
- \`DropzoneError\` - Validation error message (auto-displays when files are rejected)
- \`DropzoneHint\` - Helper text within the dropzone (hidden when error is shown)
- \`Message\` - Helper text below the dropzone
- \`List\` - Container for file items with render prop
- \`Item\` - Individual file item with render prop for state
- \`Metadata\` - Container for file metadata
- \`Details\` - Container for file details
- \`Header\` - Container for icon and name
- \`Icon\` - File type icon (auto-detected)
- \`Name\` - File name
- \`Status\` - Status text
- \`Error\` - Error message
- \`Remove\` - Remove button
- \`Progress\` - Upload progress bar
        `,
      },
    },
  },
};
