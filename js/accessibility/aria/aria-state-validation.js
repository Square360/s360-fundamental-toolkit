import { STATES } from './state-definitions.js';

function _validateAriaState(state) {
	if (!STATES[state]) {
		console.error(`'${ state }' is not a valid ARIA state.`);
		
		return false;
	}
	else {
		return true;
	}
}

export function validateAriaStateValue(state, value) {	
	if (_validateAriaState(state)) {
		const STATE_VALUE = STATES[state].value;

		if (STATE_VALUE.indexOf(value) === -1) {
			console.error(`'${ value }' is not valid for aria-${ state }.`);

			return false;
		}
		else {
			return true;
		}
	}
	else {
		return false;
	}
}