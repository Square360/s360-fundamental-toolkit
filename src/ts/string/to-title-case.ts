interface String {
  toTitleCase(): string;
}

/**
 * Converts any string into Title Case.
 *
 * @example "this is a string"
 *  returns "This Is A String".
 */
String.prototype.toTitleCase = function() {
  return this
    // Convert everything to lowercase.
    .toLowerCase()
    // Split the string into an array.
    .split(' ')
    // Map over each part of the array anc set the first letter to uppercase.
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    // Put the arry back together into a string.
    .join(' ');
}
