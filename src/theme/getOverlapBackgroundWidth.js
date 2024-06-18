import { fullWidthMinusMargins } from '@thepuzzlers/pieces/dist/thepuzzlers-pieces.cjs.prod';

export const gapWidthInRem = [2.8, 6.3, 9.7, 8];

export const getOverlapBackgroundWidth = (value, index) => {
  const overlapValue = value === 'max' ? gapWidthInRem[index] : value;
  return `calc(100% + -2 * ${overlapValue} / ${gapWidthInRem[index]} * ${fullWidthMinusMargins[index]})`;
};

export const getOverlapBackgroundWidths = (overlaps) => {
  const isArrayParam = Array.isArray(overlaps);

  if (isArrayParam)
    return overlaps.map((value, index) =>
      getOverlapBackgroundWidth(value, index)
    );

  return getOverlapBackgroundWidth(overlaps, 0);
};
