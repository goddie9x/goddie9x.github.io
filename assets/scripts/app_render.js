var base_url = window.location.origin;
var host = window.location.host;
var pathArray = window.location.pathname.split('/');

function renderHeader() {
    $('.header').load(`${base_url}/header.html`);
};

function renderBreadCrumb() {
    let path = $(location).attr('pathname');
    let subItem = $('header .dropdown-item');
    let inMainLink = true;
    let breadCrumbHtml = '';
    let isCrumbExit = $('.breadcrumb').length;

    if (!isCrumbExit) {
        $('.hello').prepend(` <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        </ol>
        </nav>`);

        if (path == '/home.html') {
            breadCrumbHtml = '<li class="breadcrumb-item active" aria-current="page">Home</li>';
            $('.header .nav-item')[0].classList.add('active');
        } else {

            subItem.each(function(index, item) {
                let subLink = $(item).attr('href').replace('..', '');

                if (subLink == path) {
                    let subLink = '';

                    $(item).addClass('active');

                    let parentNav = $(item).parents('.nav-item');
                    parentNav.addClass('active');


                    parentNav.each(function(index, Nav) {
                        let currentLink = $(Nav).prev()[0];
                        subLink = `<li class="breadcrumb-item"><a href="${currentLink.href}">${currentLink.innerHTML}</a></li>`
                    });
                    breadCrumbHtml += `<li class="breadcrumb-item active" aria-current="page">${item.innerHTML}</li>`;
                    inMainLink = false;
                }
            });

            if (inMainLink) {
                $('.header .nav-link').each(function(index, item) {
                    let mainLink = $(item).attr('href').replace('..', '');

                    if (mainLink == path) {
                        $(item).parent().addClass('active');
                        breadCrumbHtml += ` <li class="breadcrumb-item active" aria-current="page">${item.innerHTML}</li>`;
                    }
                });
            }
            breadCrumbHtml = `<li class="breadcrumb-item"><a href="../home.html">Home</a></li>` + breadCrumbHtml;
        }
        $('ol.breadcrumb').html(breadCrumbHtml);
    }
}

function renderFooter(info) {
    $('.footer').load(`${base_url}/footer.html`);
}
//library activeEvent made by Tam
function activeEvent(elementTriggers, Targets, elementContainer, event = 'click') {
    if (elementContainer) {
        if (typeof(Targets) == 'function') {
            $(elementContainer).delegate(elementTriggers, event, function(e) {
                Targets(e);
            });
        } else {
            $(elementContainer).delegate(elementTriggers, event, function(e) {
                $(Targets).toggleClass('active');
            });
        }
    } else {
        let trigger = $(elementTriggers).unbind();

        if (trigger) {
            if (typeof(Targets) == 'function') {
                trigger.on(event, function(e) {
                    Targets(e);
                });
            } else {
                trigger.on(event, function(e) {
                    $('.nav-scale').toggleClass('active');
                });
            }
        }
    }
}

//my own mini lib
function activeEvent(elementTriggers, Targets, elementContainer, event = 'click') {
    if (elementContainer) {
        if (typeof(Targets) == 'function') {
            $(elementContainer).delegate(elementTriggers, event, function(e) {
                Targets(e, this);
            });
        } else {
            $(elementContainer).delegate(elementTriggers, event, function(e) {
                $(Targets).toggleClass('active');
            });
        }
    } else {
        let trigger = $(elementTriggers).unbind();

        if (trigger) {
            if (typeof(Targets) == 'function') {
                trigger.on(event, function(e) {
                    Targets(e, this);
                });
            } else {
                trigger.on(event, function(e) {
                    $('.nav-scale').toggleClass('active');
                });
            }
        }
    }
}

function add3Dots(string, limit, height, lineHeight, fontWeight, replace = '...') {
    let maxLength = limit - 3;

    if (string.length > maxLength) {
        string = string.slice(0, maxLength) + replace;
    }

    return string;
}