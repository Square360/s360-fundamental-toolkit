import { validateAriaStateValue } from './validate-state-value.js';

export function getAriaState(node, attr) {
	return node.getAttribute('aria-' + attr);
}

export function setAriaState(node, state, value) {
	if (validateAriaStateValue(state, value)) {
		node.setAttribute('aria-' + state, value);
	}
}

export function removeAriaState(node, state) {
	if (validateAriaStateValue(state, undefined)) {
		node.removeAttribute('aria-' + state);
	}
}