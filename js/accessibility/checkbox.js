$('body').on('keypress', 'label', function(e) {
	
			if ((e.keyCode ? e.keyCode : e.which) == 13) {
				const INPUT_NAME = $(this).attr('for'); 
				$(`#${ INPUT_NAME }`).trigger('click');
			}
		});

		$('body').on('keypress', 'input:checkbox', function(e) {
      if ((e.keyCode ? e.keyCode : e.which) == 13) {
        $(this).trigger('click');
      }
    });


//	var focusableQuery = 
	'input:not([tabindex^="-"]), select:not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), object:not([tabindex^="-"]), [href]:not([tabindex^="-"]), [tabindex]:not([tabindex^="-"]):not(.tabtrap)';
