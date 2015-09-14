
,
      getSortData: {
        genre: '#genre',
        author: '.author',
        title: '.title',
        length: '.length'
      }
    });
    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
      var sortByValue = $(this).attr('data-sort-by');
      $container.isotope({ sortBy: sortByValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });





    <script>
  
  $(window).load(function(){

    var $container = $('.cards');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    $('nav.iso-filter ul a').click(function(){

      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });
      return false;
    });

  });

</script>