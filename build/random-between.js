"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBetween = void 0;
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomBetween = randomBetween;
