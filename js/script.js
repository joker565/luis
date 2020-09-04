$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        fade: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    arrows: false
                }
            }
        ]

    });
});

$('#more').click(function () {
    $('#body1').show();
    $('#body2').show();
    $('#body3').show();
    $('#less').show();
    $('#more').hide();
});
$('#less').click(function () {
    $('#body1').hide();
    $('#body2').hide();
    $('#body3').hide();
    $('#less').hide();
    $('#more').show();
});

$('.header__link').click(function () {
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});