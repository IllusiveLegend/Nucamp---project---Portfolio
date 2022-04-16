$(document).ready(function(){
    $('.header').height($(window).height());
})

$(function () {
    $(".carousel").carousel({interval: 6000});
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("$carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});


 

