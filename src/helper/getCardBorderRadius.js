export const getCardBorderRadius = (hasTop, hasBottom) => {
  if (hasTop && hasBottom) return [null, 'card', 'card', 'card'];
  if (hasTop) return [null, 'cardTopOnly', 'cardTopOnly', 'cardTopOnly'];
  if (hasBottom)
    return [null, 'cardBottomOnly', 'cardBottomOnly', 'cardBottomOnly'];
  return null;
};
