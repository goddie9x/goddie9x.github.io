let musicSrcs = ['../../../../../../../../assets/medias/Bad_liar.mp3', '../../../../../../../../assets/medias/Believer.mp3', '../../../../../../../../assets/medias/Demons.mp3', '../../../../../../../../assets/medias/It_s_Time.mp3', '../../../../../../../../assets/medias/Natural.mp3', '../../../../../../../../assets/medias/Radioactive.mp3'];

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {

            $('.header').addClass('fixed-top');
            $('.up').show();
            // add padding top to show content behind navbar
        } else {
            $('.header').removeClass('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            $('.up').hide();
        }
    });
});

$(document).ready(function() {
    renderMusic('.hello');
});

function renderMusic(elementContain, volume = 0.2) {
    let rand = Math.floor(Math.random() * musicSrcs.length);

    $(elementContain).append(`<audio autoplay="true" loop controls="true" src="${musicSrcs[rand]}" class="my-cosmos-music"></audio>`);
    $('.my-cosmos-music')[0].volume = volume;
}