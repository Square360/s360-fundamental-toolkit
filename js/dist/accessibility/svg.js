"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function svgRoleImg() {
    const SVGS = document.querySelectorAll('svg');
    SVGS.forEach((svg) => {
        svg.setAttribute('role', 'img');
    });
}
exports.svgRoleImg = svgRoleImg;
