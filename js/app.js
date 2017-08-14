var cargarPagina = function () {
    scrollReveal();
    $('.carousel').carousel();
    desplazamientoSuave();
    $(".encontrarte-smoove").smoove({offset:'40%'})
}
var scrollReveal = function () {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 820) {
            $('.skill-icon').fadeOut();
            $('.habilidades').fadeIn();
            $('.skills').fadeIn();
        } else {
            $('.skills').fadeOut();
            $('.habilidades').fadeOut();
            $('.skill-icon').fadeIn()
        }
    });
}


var desplazamientoSuave = function () {

    $('a[href^="#"]').click(function (event) {
        var id = $(this).attr("href");
        var offset = 20;
        var target = $(id).offset().top - offset;

        $('html, body').animate({
            scrollTop: target
        }, 750);
        event.preventDefault();
    });
};

$(document).ready(cargarPagina);
