'use client';
import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Local Components

const RiveComponent = ({ src, style, animateInView, containerClassName }) => {
  const { rive, RiveComponent: RiveComponentInstance } = useRive({
    src,
    autoplay: animateInView ? false : true
  });

  React.useEffect(() => {
    if (rive && animateInView && containerClassName) {
      const killAnimation = animateTheRiveWhenOnView(rive, containerClassName);
      return killAnimation;
    }
  }, [rive, animateInView, containerClassName]);

  return <RiveComponentInstance style={{ ...style }} />;
};

export default RiveComponent;

//? Prepared for animated rive while in view
const animateTheRiveWhenOnView = (rive, containerClassName) => {
  if (!window) return null;
  gsap.registerPlugin(ScrollTrigger);

  const animation = gsap.to(`.${containerClassName}`, {
    // ? only animate the rive component when in view, it help reduce the memory usage to prevent Ouch Snap
    scrollTrigger: {
      trigger: `.${containerClassName}`,
      start: 'top bottom',
      onEnter: () => {
        rive && rive?.play();
      },
      onLeave: () => {
        rive && rive?.pause();
      },
      onEnterBack: () => {
        rive && rive?.play();
      },
      onLeaveBack: () => {
        rive && rive?.pause();
      }
    }
  });

  return () => {
    animation?.kill();
    animation?.scrollTrigger?.kill();
  };
};
