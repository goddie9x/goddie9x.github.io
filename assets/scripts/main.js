let homeURL = window.location.origin;
let musicSrcs = [`${homeURL}/assets/medias/Bad_liar.mp3`, `${homeURL}/assets/medias/Believer.mp3`, `${homeURL}/assets/medias/Demons.mp3`, `${homeURL}/assets/medias/It_s_Time.mp3`, `${homeURL}/assets/medias/Natural.mp3`, `${homeURL}/assets/medias/Radioactive.mp3`];

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {

            $('.header').addClass('fixed-top', 'col-12');
            $('.up').show();
            // add padding top to show content behind navbar
        } else {
            $('.header').removeClass('fixed-top', 'col-12');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            $('.up').hide();
        }
    });
});



function renderMusic(elementContain, volume = 0.2) {
    let rand = Math.floor(Math.random() * musicSrcs.length);

    $(elementContain).append(`<audio autoplay="true" loop controls="true" src="${musicSrcs[rand]}" class="my-cosmos-music"></audio>`);
    $('.my-cosmos-music')[0].volume = volume;
}