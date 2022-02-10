(function($){
    var typed = new Typed("span.txt-rotate", {
        strings: ["I'm a Web Developer", "I'm a Wordpress Developer", "I'm a UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 2,
        autoWidth: false,
        center: false,
        mergeFit: true,
        responsive : {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            }
        }
    })
    
})(jQuery);

$(document).ready(function() {
    $(".projects-wrapper").isotope({
        filter: "*",
        layoutMode: "masonry"
    });

    $(".list-filter a").click(function() {
        var selector = $(this).attr("data-filter");
        $(".list-filter a").removeClass("active");
        $(this).addClass("active");
        $(".projects-wrapper").isotope({
            filter: selector
        });
        return false;
    });

    $(".popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });

    $(".progress").each(function() {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');
    
        if (value > 0) {
          if (value <= 50) {
            right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
          } else {
            right.css('transform', 'rotate(180deg)')
            left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
          }
        }
    })
    
    function percentageToDegrees(percentage) {return percentage / 100 * 360}

    $('body').scrollspy({ 
        target: '#navbar',
        offset: 80
    });
    
    $('.scrollto').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 40  }, 1500);
        event.preventDefault();
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 50) { 
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
      });
});