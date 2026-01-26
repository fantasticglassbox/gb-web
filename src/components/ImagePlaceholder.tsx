import React from 'react';

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = 400,
  height = 300,
  alt,
  className = '',
  children,
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 ${className}`}
      style={{ width, height }}
    >
      {children || (
        <div className="text-center">
          <div className="text-4xl mb-2">🖼️</div>
          <div className="text-sm">{alt}</div>
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;
