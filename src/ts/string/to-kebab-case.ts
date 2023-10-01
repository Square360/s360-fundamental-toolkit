interface String {
  toKebabCase(): string;
}

/**
 * Converts any string into kebab-case.
 *
 * @example "This is a string!"
 *  returns "this-is-a-string".
 */
String.prototype.toKebabCase = function() {
  return this
    // Get all lowercase letters that are near to uppercase ones.
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    // Get all spaces and special characters.
    .replace(/([\s]+)|([^A-Za-z0-9]+)/g, '-')
    // Convert everything to lowercase.
    .toLowerCase();
}
