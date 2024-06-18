// Define the maximum lines of text a paragraph of headline should hold.
// This helper will automatically add ellippsis dots when the maximum number of lines is reached
export const lineClamp = (lineNumber) => ({
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: lineNumber,
  lineClamp: lineNumber,
  WebkitBoxOrient: 'vertical'
  // '-webkit-box-orient': 'vertical',
});
