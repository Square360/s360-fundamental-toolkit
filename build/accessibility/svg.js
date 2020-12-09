"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const svgRoleImg = () => {
    const SVGS = document.querySelectorAll('svg');
    SVGS.forEach((svg) => {
        svg.setAttribute('role', 'img');
    });
};
exports.default = svgRoleImg;
