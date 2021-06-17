"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = void 0;
function kebabCase(string) {
    // Get all lowercase letters that are near to uppercase ones
    string = string.replace(/([a-z])([A-Z])/g, '$1-$2');
    // Get all spaces and special characters.
    string = string.replace(/([\s]+)|([^A-Za-z0-9]+)/g, '-');
    // Convert everything to lowercase.
    string = string.toLowerCase();
    return string;
}
exports.kebabCase = kebabCase;
