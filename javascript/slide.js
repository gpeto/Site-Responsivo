$(document).ready(function () {

    $.getJSON("javascript/json.js", function (result) {

        alert(JSON.stringify(result));

    });

    $('.slider').hover(function () {
        clearInterval(tempo);
    }, function () {
        tempo = setInterval(sliderSimple, 9000);
    });


    function sliderSimple() {
        var sliderActive = $(".sliderActive");
        var sliderNext = sliderActive.next().length ? sliderActive.next() : $("#slider-img li:first");
        sliderNext.addClass('sliderActive').fadeIn();
        sliderActive.removeClass('sliderActive').fadeOut();
    }
    ;

    $(function iniciaSlide() {
        $("#slider-img li:first").fadeIn('slow');
        tempo = setInterval(sliderSimple, 9000);
    });

});


