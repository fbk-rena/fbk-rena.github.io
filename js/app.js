var cargarPagina = function () {
    scrollReveal();
    $('.carousel').carousel();
     desplazamientoSuave();
}
var scrollReveal = function () {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 820) {
            $('.skills').fadeIn();
            $('.skills-intro').fadeOut()
        } else {
            $('.skills').fadeOut();
            $('.skills-intro').fadeIn()
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
