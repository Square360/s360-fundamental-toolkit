interface String {
  toTitleCase(): string;
}

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
