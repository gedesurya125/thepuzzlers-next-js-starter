export const convertApiHtmlText = (htmlText = '') => {
  // replace the </p><p> tag with <br/>

  const replacedPasByPTagWithNewLine = htmlText?.replace(
    /\<\/p\>\n\<p\>/g,
    '<br/><br/>'
  );
  const replacedPasByPTag = replacedPasByPTagWithNewLine?.replace(
    /\<\/p\>\<p\>/g,
    '<br/><br/>'
  );

  // remove the p tag
  const removedFrontPTag = replacedPasByPTag?.replace(/\<p\>/g, '');
  const removedBackPTag = removedFrontPTag?.replace(/\<\/p\>/g, '');

  const replaceNewLine = removedBackPTag?.replace(/\n/g, '<br/>');

  // // change strong tag to be span tag
  // const switchedStartStrongTag = removedBackPTag.replace(
  //   /\<strong\>/g,
  //   '<span>'
  // );
  // const switchedEndStrongTag = switchedStartStrongTag.replace(
  //   /\<\/strong\>/g,
  //   '</span>'
  // );

  // const switchStartITag = switchedEndStrongTag.replace(/\<i\>/g, '<span>');
  // const switchEndITag = switchStartITag.replace(/\<\/i\>/g, '</span>');

  return replaceNewLine;
};
