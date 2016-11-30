/**
 * Created by Irina on 11/25/2016.
 */
$(document).ready(function() {

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("header_solid");
        } else {
            $(".header").removeClass("header_solid");
        }
    });

    $("#menu-button").on("click", function() {
        $(".header").toggleClass("header_menu-active");
    })
});
