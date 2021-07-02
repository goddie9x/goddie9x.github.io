$(document).ready(function() {

    function toggleItem(elementTrigger, elementTarget) {
        let triggerE = $(elementTrigger);
        if (triggerE) {
            triggerE.click(function() {
                $(elementTarget).toggleClass('active');
            });
        }
    }
    toggleItem('.main-nav-mobile', '.main-nav-bar-mobile');
});
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            $('.main-nav').addClass('fixed-top');
            $('.menu_bar--mobile').addClass('fixed-top');

            // add padding top to show content behind navbar
        } else {
            $('.main-nav').removeClass('fixed-top');
            $('.menu_bar--mobile').removeClass('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});