function renderHeader() {
    $('.header').html(`<div class="container">
    <div class="up">
        <a href="#hello">
            <img src="../assets/images/up.png" alt="lên đầu trang">
        </a>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-brand">
            <a class="logo-link" href="../home.html">
                <div class="logo-image"></div>
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../home.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../share.html">Chia sẻ</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../share.html#pc">Máy tính</a>
                        <a class="dropdown-item" href="../share.html#phone">Điện thoại</a>
                        <a class="dropdown-item" href="../share.html#coding">Lập trình</a>
                        <a class="dropdown-item" href="../share.html#tips">Mẹo vặt</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../story.html">Câu chuyện</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../story.html#dreams">Những giấc mơ</a>
                        <a class="dropdown-item" href="../story.html#jobs">Công việc</a>
                        <a class="dropdown-item" href="../story.html#life">Đời thường</a>
                        <a class="dropdown-item" href="../story.html#study">Học hành</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../relax.html">Giải trí</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../relax.html#musics">Âm nhạc</a>
                        <a class="dropdown-item" href="../relax.html#medias">Phim ảnh</a>
                        <a class="dropdown-item" href="../relax.html#books">Sách</a>
                        <a class="dropdown-item" href="../relax.html#games">Trò chơi</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../product.html">Sản phẩm</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../product.html#webs">Trang web</a>
                        <a class="dropdown-item" href="../product.html#poems">Thơ</a>
                        <a class="dropdown-item" href="../product.html#medias">Ảnh video</a>
                    </div>
                </li>
            </ul>
            <form class="seach-bar my-2 my-lg-0">
                <input class="form-control mr-sm-2 col" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn  -outline-success my-2 my-sm-0 col" type="submit">Search</button>
            </form>
        </div>
    </nav>
</div>
<script>renderBreadCrumb()</script>
`);
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
                    $(item).addClass('active');

                    let parentNav = $(item).parents('.nav-item');
                    parentNav.addClass('active');

                    parentNav.each(function(index, Nav) {
                        $(Nav).find('.breadcrumb-item')
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
    $('.footer').html(`<div class="container">
    <div id="contact" class="contact">
        <div class="contact-title">
            <h2>Liên hệ</h2>
        </div>
        <div class="contact-content">
            <p>
                <i class="fa fa-map-marker"></i> 129 Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội.
            </p>
            <p>
                <i class="fa fa-phone"></i><a href="tel:0326152310"> 0326152310.</a>
            </p>
            <p>
                <i class="fa fa-envelope"></i><a href="mailto:hoangminhtam7991@gmail.com"> hoangminhtam7991@gmail.com.</a>
            </p>
            <p>
                <i class="fa fa-envelope"></i><a href="mailto:goddie9x@yahoo.com"> goddie9x@yahoo.com.</a>
            </p>
        </div>
    </div>
    <div class="contact-grid">
            <a href="https://www.facebook.com/goddie9x/">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://github.com/goddie9x"> <i class="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/hoangtam9x/"><i class="fab fa-linkedin"></i> </a>
    </div>
    <div class="clear-fixed "></div>
</div>`);
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