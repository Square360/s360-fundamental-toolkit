import { validateAriaState, validateAriaStateValue } from "./validation.js";

export function getAriaState(node, attr) {
  return node.getAttribute(`aria-${ attr }`);
}

export function setAriaState(node, state, value) {
  if (validateAriaStateValue(state, value)) {
    node.setAttribute(`aria-${ state }`, value);
  }
}

export function removeAriaState(node, state) {
  if (validateAriaState(state)) {
    node.removeAttribute(`aria-${state}`);
  }
}