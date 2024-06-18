const convertStringToSlug = (text) => {
  if (!text) return '';

  return text
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -;
};

// it use es5 export to be able to use in gatsby-node
module.exports = { convertStringToSlug };
