export function accordion() {
  $('[data-accordion]').each(function(key, accordion) {
    const $ACCORDION = $(accordion);
    const $EXPAND_ALL_BUTTON = $('<button class="accordion-expand" aria-expanded="false">Expand all</button>');

    const $SECTIONS = $ACCORDION.find('[aria-expanded]');
    const SECTION_COUNT = $SECTIONS.length;

    const $TOGGLE_BUTTONS = $ACCORDION.find('button[data-accordion-button="toggle"]');
    const $CLOSE_BUTTONS = $ACCORDION.find('button[data-accordion-button="close"]');

    const $ACCORDION_BUTTONS = $.merge($TOGGLE_BUTTONS, $CLOSE_BUTTONS);

    let expandedSections = 0;

    // Attach the expand all button to the accordion.
    $ACCORDION.before($EXPAND_ALL_BUTTON);

    $ACCORDION_BUTTONS.each(function() {
      $(this).on('click', function(event, overrideExpandState) {
        const $SECTION = $(this).parents('[aria-expanded]');
        const $HIDDEN_CONTENT = $SECTION.find('[aria-hidden]');

        let sectionExpanded = ($SECTION.attr('aria-expanded') == 'true') ? false : true;

        if (overrideExpandState && overrideExpandState == 'true') {
          sectionExpanded = true;
        }
        else if (overrideExpandState && overrideExpandState == 'false') {
          sectionExpanded = false;
        }

        if (sectionExpanded) {
          if ($SECTION.attr('aria-expanded') == 'false') {
            expandedSections++;
          }

          $SECTION.attr('aria-expanded', 'true');

          $HIDDEN_CONTENT.each(function() {
            $(this).attr('aria-hidden', 'false');
          });
        }
        else {
          if ($SECTION.attr('aria-expanded') == 'true') {
            expandedSections--;
          }

          $SECTION.attr('aria-expanded', 'false');

          $HIDDEN_CONTENT.each(function() {
            $(this).attr('aria-hidden', 'true');
          });
        }

        updateExpandAllButton();
      })
    });

    $EXPAND_ALL_BUTTON.on('click', function() {
      const NEW_EXPANDED_STATE = ($EXPAND_ALL_BUTTON.attr('aria-expanded') == 'false') ? 'true' : 'false';

      $TOGGLE_BUTTONS.each(function() {
        $(this).trigger('click', NEW_EXPANDED_STATE);
      });
    });

    /**
     * Update the expand all button based on how many sections are expanded.
     */
    function updateExpandAllButton() {
      if (expandedSections === SECTION_COUNT) {
        $EXPAND_ALL_BUTTON
          .attr('aria-expanded', 'true')
          .html('Close all');
      }
      else {
        $EXPAND_ALL_BUTTON
          .attr('aria-expanded', 'false')
          .html('Expand all');
      }
    }
  });
}
