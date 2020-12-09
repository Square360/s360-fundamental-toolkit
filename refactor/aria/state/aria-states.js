export const ARIA_STATES = {
  /**
   * Indicates whether an element, and its subtree, are currently being updated.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-busy
   */
  'busy': {
    'value': [
      true,
      false
    ]
  },

  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and 
   * other widgets.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-checked
   */
  'checked': {
    'value': [
      true,
      false,
      'mixed',
      undefined
    ]
  },

  /**
   * Indicates that the element is perceivable but disabled, so it is not 
   * editable or otherwise operable.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-disabled
   */
  'disabled': {
    'value': [
      true,
      false
    ]
  },

  /**
   * Indicates whether the element, or another grouping element it controls, 
   * is currently expanded or collapsed.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-expanded
   */
  'expanded': {
    'value': [
      true,
      false,
      undefined
    ]
  },

  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-grabbed
   */
  'grabbed': {
    'value': [
      true,
      false,
      undefined
    ]
  },

  /**
   * Indicates that the element and all of its descendants are not visible or 
   * perceivable to any user as implemented by the author.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-hidden
   */
  'hidden': {
    'value': [
      true,
      false
    ]
  },

  /**
   * Indicates the entered value does not conform to the format expected by 
   * the application.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-invalid
   */
  'invalid': {
    'value': [
      true,
      false,
      'grammar',
      'spelling'
    ]
  },

  /**
   * Indicates the current "pressed" state of toggle buttons.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-pressed
   */
  'pressed': {
    'value': [
      true,
      false,
      'mixed',
      undefined
    ]
  },

  /**
   * Indicates the current "selected" state of various widgets.
   *
   * @see https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-selected
   */
  'selected': {
    'value': [
      true,
      false,
      undefined
    ]
  }
}