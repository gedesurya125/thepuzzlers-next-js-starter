import React from 'react';
import Image from 'next/image';

// External Components
import { Image as ThemeImage } from 'theme/components';
import { AspectRatioBox } from './AspectRatioBox';

//? Note: in next js we always have to define the image height and width, if we use Next Image, so the best option is using aspect ratio component
export const AspectRatioImageContainer = ({
  src,
  alt,
  aspectRatios,
  className,
  designatedRef,
  sx,
  imgProps,
  imgStyle,
  children,
  isNotNextImage,
  ...props
}) => {
  return (
    <AspectRatioBox
      ref={designatedRef}
      className={`image-container ${className}`}
      aspectRatio={aspectRatios}
      sx={{
        position: 'relative',
        // padding is refer to parrent element so it will not work if this element has width is set, it will still refer the the width of paret element
        // https://css-tricks.com/oh-hey-padding-percentage-is-based-on-the-parent-elements-width/
        // pt: getPaddingPercentageForAspectRatio(aspectRatios),
        width: !sx?.width && !sx?.height ? '100%' : null,
        '& img': {
          borderRadius: 'image'
        },
        ...sx
      }}
      {...props}>
      {isNotNextImage ? (
        <ThemeImage
          src={src}
          alt={alt ? alt : ''}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            ...imgStyle
          }}
          {...imgProps}
        />
      ) : (
        <Image
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            ...imgStyle
          }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={src}
          alt={alt ? alt : ''}
          {...imgProps}
        />
      )}
      {/* Children meant to be use for adding any absolute style decoration */}
      {children}
    </AspectRatioBox>
  );
};
