/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

  });

  $("form").submit(function(e){
    e.preventDefault();
    var $form = $("form");
    var name = $form.find("input[name='name']").val();
    var email = $form.find("input[name='email']").val();
    var content = $form.find("textarea[name='message']").val();
    if( name && email && content ){
      var settings = {
        type: 'POST',
        data: {
          name,
          email,
          content
        }
      };
      $.ajax("email.php", settings).then(_=>{
        $form.find("input[type='submit']").val("Thanks!").prop('disabled', true);
      });
    }
  });

})(jQuery);