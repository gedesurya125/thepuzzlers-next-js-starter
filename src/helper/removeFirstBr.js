export const removeFistBr = (htmlString) =>
  htmlString.replace(/^(\<br\/\>)/, '');
