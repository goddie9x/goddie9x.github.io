const $AO = function activeOn(elements) {
    elements.forEach(element => {
        element.classList.add('active');
    })
}

const $AOff = function activeOff(elements) {
    elements.forEach(element => {
        element.classList.remove('active');
    })
}

const $toggle = function toggleActiveClass(elements) {
    elements.forEach(element => {
        element.classList.toggle('active');
    })
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('.main-nav-bar-submit').onclick = function(e) {
    $toggle([$('.ground-2'), $('.house'), $('.moon-big'), $('.moon'), $('.man-sitting'), $('.telescope'), $('.man-hand-behind-neck'), $('.tree'), $('.ground-1')])
}
$('.main-nav-mobile').onclick = function() {
    $toggle([...$$('.menu-icon'), $('.main-nav-bar-mobile')]);
}
$('.moon').onclick = function() {
    $toggle([$('.poems')]);
}