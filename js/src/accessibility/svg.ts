export function svgRoleImg() {
  let svgs = document.querySelectorAll('svg');

  svgs.forEach((svg) => {
    svg.setAttribute('role', 'img');
  });
}
