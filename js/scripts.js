(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});

      $('#registration-form').on('submit', function(e) {
          e.preventDefault();
          var button = $(this).find('button');
          var f = e.target;
          var email = f._replyto.value;
          var name = f.name.value;

          button.prop('disabled', true);
          $.ajax({
              url: 'https://formspree.io/tcfunk25@gmail.com',
              method: 'POST',
              data: {
                  _replyto: email,
                  name: name,
              },
              dataType: 'json',
          }).then(function(data) {
              var successText = '<h3 class="text-center text-success"><i class="ion-checkmark-round"></i> Thanks for signing up! We will be in touch soon.</h3>';
              console.log(data);
              button.prop('disabled', false);
              $('#form-parent').html(successText);
          });
      });
	});
})(jQuery);

$('.pull-down').each(function() {
  var $this=$(this);
	$this.css('margin-top', $this.parent().height()-$this.height())
});
