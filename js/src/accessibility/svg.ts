export function svgRoleImg() {
  const SVGS = document.querySelectorAll('svg');

  SVGS.forEach((svg) => {
    svg.setAttribute('role', 'img');
  });
}
