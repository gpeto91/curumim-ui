import React, { HTMLAttributes, useRef, useState } from 'react';
import { keyframes } from '@stitches/core';
import { FiLoader, FiImage } from 'react-icons/fi';
import useIntersection from '../../hooks/useIntersection';
import { css } from '../../theme';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const ImageContainer = css({
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '& figure': {
    width: '100%',
    height: '100%',
    margin: 0
  },

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '& figcaption': {
    color: '$gray',
    fontSize: '$small'
  },

  '& svg': {
    stroke: '$gray',
    width: 30,
    height: 30
  }
});

const LoaderIcon = css({
  animation: `${spin} 1s infinite linear`,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 20,
  height: 20
});

interface IImageProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  width: number | string;
  height: number | string;
  caption?: string;
  alt?: string;
}

const AppImage: React.FC<IImageProps> = ({ src, caption, width, height, alt = '', ...props }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersection(containerRef);

  return (
    <div ref={containerRef} style={{ width, height }} className={ImageContainer()}>
      {isLoading && <FiLoader className={LoaderIcon()} />}

      {isVisible && !hasError && (
        <figure>
          <img
            {...props}
            src={src}
            alt={alt}
            onLoad={() => setLoading(false)}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
          />

          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )}

      {!isLoading && hasError && <FiImage />}
    </div>
  );
};

AppImage.displayName = 'Image';

export { AppImage as Image };
