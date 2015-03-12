
(function($) {
	$(document).ready(function() {
	  var expanderTrigger = document.getElementById("js-expander-trigger");
	  var expanderContent = document.getElementById("js-openhere");

	  $('#js-expander-trigger').click(function(){
	    $(this).toggleClass("expander-hidden");
	  });
	});
})(jQuery);