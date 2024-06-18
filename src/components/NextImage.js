'use client';
/** @jsxImportSource theme-ui */

import React from 'react';
import Image from 'next/image';

export const NextImage = ({ sx, src, alt, imgStyle, ...props }) => {
  return (
    <Image
      style={{
        objectFit: 'contain',
        ...imgStyle
      }}
      // fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      src={src}
      alt={alt ? alt : ''}
      sx={{
        ...sx
      }}
      {...props}
    />
  );
};
