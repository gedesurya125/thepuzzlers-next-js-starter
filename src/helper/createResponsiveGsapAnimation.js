import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const emptyFunction = () => {};

export const createResponsiveGsapAnimation = (
  animations = [emptyFunction, emptyFunction, emptyFunction, emptyFunction]
) => {
  if (!window) return null;

  // ? We need to register gsap plugin, otherwise it's not usable
  gsap.registerPlugin(ScrollTrigger);

  if (!window || !ScrollTrigger) return null;

  return ScrollTrigger?.matchMedia({
    '(min-width: 1400px)': animations[3],
    '(min-width: 1000px) and (max-width: 1399px)': animations[2],
    '(min-width: 750px) and (max-width: 999px)': animations[1],
    '(max-width: 749px)': animations[0]
  });
};
