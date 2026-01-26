import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  placeholder?: string;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholder 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = `bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 ${className}`;
        fallback.style.width = typeof width === 'number' ? `${width}px` : width || '100%';
        fallback.style.height = typeof height === 'number' ? `${height}px` : height || '200px';
        fallback.innerHTML = `
          <div class="text-center">
            <div class="text-4xl mb-2">${placeholder || '🖼️'}</div>
            <div class="text-sm">${alt}</div>
          </div>
        `;
        target.parentNode?.insertBefore(fallback, target);
      }}
    />
  );
};

export default Image;
