(function($) {

	var co = $('article').find('span.co').each(function() {
		var $this = $(this);

		$('<blockquote></blockquote'), {
			class: 'co',
			text: $this.text()
		}).prependTo( $this.closest('p') );
	});

})( jQuery );