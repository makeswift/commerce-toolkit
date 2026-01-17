'use client';

import { Slot } from '@radix-ui/react-slot';
import {
  FileArchive,
  FileAudio,
  FileCode,
  FileCog,
  FileIcon as FileIconDefault,
  FileImage,
  FileText,
  FileVideo,
} from 'lucide-react';
import type { ElementType, ReactNode } from 'react';

import { useFileInputItem } from '@/components/file-input';
import { cn } from '@/lib';

export interface FileInputIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function FileInputIcon({ asChild = false, className, children }: FileInputIconProps) {
  const { fileState } = useFileInputItem();

  const DefaultIcon = getIconForFile(fileState.file);

  const iconStyles = cn('size-4 text-[--file-input-fill-icon,var(--form-fill-icon)]', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="file-input-icon">
        {children}
      </Slot>
    );
  }

  return <DefaultIcon className={iconStyles} data-slot="file-input-icon" />;
}

function getIconForFile(file: File): ElementType {
  const type = file.type;
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';

  if (type.startsWith('image/')) {
    return FileImage;
  }

  if (type.startsWith('video/')) {
    return FileVideo;
  }

  if (type.startsWith('audio/')) {
    return FileAudio;
  }

  if (type.startsWith('text/') || ['txt', 'md', 'rtf', 'pdf'].includes(extension)) {
    return FileText;
  }

  if (
    [
      'html',
      'css',
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'xml',
      'php',
      'py',
      'rb',
      'java',
      'c',
      'cpp',
      'cs',
    ].includes(extension)
  ) {
    return FileCode;
  }

  if (['zip', 'rar', '7z', 'tar', 'gz', 'bz2'].includes(extension)) {
    return FileArchive;
  }

  if (
    ['exe', 'msi', 'app', 'apk', 'deb', 'rpm'].includes(extension) ||
    type.startsWith('application/')
  ) {
    return FileCog;
  }

  return FileIconDefault;
}
