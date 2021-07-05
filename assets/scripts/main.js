let musicSrcs = ['./assets/medias/Bad_liar.mp3', './assets/medias/Believer.mp3', './assets/medias/Demons.mp3',
    './assets/medias/It_s_Time.mp3', './assets/medias/Natural.mp3', './assets/medias/Radioactive.mp3',
];

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
    renderMusic('.hello');
});

function renderMusic(elementContain, volume = 0.2) {
    rand = Math.floor(Math.random()) * musicSrcs.length;

    $(elementContain).append(`<audio autoplay="true" loop controls="true" src="${musicSrcs[rand]}" class="my-cosmos-music"></audio>`);
    $('.my-cosmos-music')[0].volume = volume;
}