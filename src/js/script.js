$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        prevArrow: '<button type="button" class="prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
              },
        ]
    });
});