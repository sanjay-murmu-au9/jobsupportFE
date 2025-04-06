import React, { useCallback } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';

interface FileUploadProps {
  onFileAccepted: (file: File) => void;
  onFileRejected?: (fileRejection: FileRejection) => void;
  accept?: Record<string, string[]>;
  maxSize?: number;
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileAccepted,
  onFileRejected,
  accept,
  maxSize = 5 * 1024 * 1024, // 5MB
  label,
  error,
  helperText,
  className,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (acceptedFiles.length > 0) {
        onFileAccepted(acceptedFiles[0]);
      }
      if (fileRejections.length > 0 && onFileRejected) {
        onFileRejected(fileRejections[0]);
      }
    },
    [onFileAccepted, onFileRejected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    multiple: false,
  });

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div
        {...getRootProps()}
        className={twMerge(
          'flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md',
          isDragActive && 'border-blue-500 bg-blue-50',
          error && 'border-red-300',
          className
        )}
      >
        <div className="space-y-1 text-center">
          <input {...getInputProps()} />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <span>Upload a file</span>
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">
            {accept
              ? Object.values(accept)
                  .flat()
                  .map((ext) => ext.toUpperCase())
                  .join(', ')
              : 'Any file type'}
            {maxSize && ` up to ${maxSize / (1024 * 1024)}MB`}
          </p>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default FileUpload; 