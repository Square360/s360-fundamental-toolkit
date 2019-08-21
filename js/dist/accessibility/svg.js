"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function svgRoleImg() {
    let svgs = document.querySelectorAll('svg');
    svgs.forEach((svg) => {
        svg.setAttribute('role', 'img');
    });
}
exports.svgRoleImg = svgRoleImg;
