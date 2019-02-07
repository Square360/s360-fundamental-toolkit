import { ARIA_STATES } from './aria-states.js';

/**
 * Checks to see if the value is valid for the ARIA state.
 * 
 * @param {string} state - The name of the ARIA state.
 * @param {*} [value = undefined] - The value for the ARIA state.
 */
export function validateAriaStateValue(state, value = undefined) {
  if (ARIA_STATES[state]) {
    if (ARIA_STATES[state].value.indexOf(value) !== -1) {
      return true;
    }
    else {
      console.error(`'${value}' is not valid for aria-${state}.`);

      return false;
    }
  }
  else {
    console.error(`'${state}' is not a valid ARIA state.`);
    
    return false;
  }
}