'use client';
import React, { Suspense } from 'react';
import { AspectRatioBox } from './AspectRatioBox';
import { Box } from '@thepuzzlers/pieces';
import dynamic from 'next/dynamic';

const RiveComponent = dynamic(() => import('components/RiveComponent'));

export const AspectRatioRiveContainer = ({
  src,
  className = '',
  aspectRatio,
  sx,
  children,
  animateInView,
  riveBoxSx,
  ...props
}) => {
  if (!src) return null;
  return (
    //? additional box is need for absolutely position rive element as a decoration, because the riveComponent should respect the the aspectRatio box which should be positioned as relative
    <Box
      sx={sx}
      className={`__rive-decoration-container ${className}`}
      {...props}>
      <AspectRatioBox
        className="__rive-box"
        sx={{
          width: '100%',
          ...riveBoxSx
        }}
        aspectRatio={aspectRatio}>
        {/* //? only suspense the rive element, not container element which has the height and width, to prevent layout shift,and make implementing the animation easier */}
        <Suspense>
          <RiveComponent
            src={src}
            animateInView={animateInView}
            containerClassName={className}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0
            }}
          />
        </Suspense>
        {children}
      </AspectRatioBox>
    </Box>
  );
};
