function renderHeader(firstBreadCrumb, secondBreadCrumb) {
    $('.header').html(`
    <div class="main-nav container">
                    <div class="logo">
                        <a class="logo-link" href="../">
                            <div class="logo-image"></div>
                        </a>
                    </div>
                   
                    <div class="main-nav-bar">
                        <div class="bar-item">
                            <a class="main-nav-item " href="../home.html">Home</a>
                        </div>
                        <div class="bar-item bar-item--has-childrent ">
                            <a class=" main-nav-item " href="../share.html">Chia sẻ</a>
                            <div class="sub-menu">
                                <a class="bar-item sub-menu-item" href="../share.html/#pc">Máy tính</a>
                                <a class="bar-item sub-menu-item" href="../share.html/#phone">Điện thoại</a>
                                <a class="bar-item sub-menu-item" href="../share.html/#coding">Lập trình</a>
                                <a class="bar-item sub-menu-item" href="../share.html/#tips">Mẹo vặt linh tinh</a>
                            </div>
                        </div>
                        <div class="bar-item bar-item--has-childrent ">
                            <a class="main-nav-item " href="../story.html">Câu chuyện</a>
                            <div class="sub-menu">
                                <a class="bar-item sub-menu-item" href="../story.html/#dreams">Những giấc mơ</a>
                                <a class="bar-item sub-menu-item" href="../story.html/#jobs">Công việc</a>
                                <a class="bar-item sub-menu-item" href="../story.html/#life">Đời thường</a>
                                <a class="bar-item sub-menu-item" href="../story.html/#study">Học hành</a>
                            </div>
                        </div>
                        <div class="bar-item bar-item--has-childrent">
                            <a class=" main-nav-item " href="../relax.html">Giải trí</a>
                            <div class="sub-menu">
                                <a class="bar-item sub-menu-item" href="../relax.html/#musics">Âm nhạc</a>
                                <a class="bar-item sub-menu-item" href="../relax.html/#medias">Phim ảnh</a>
                                <a class="bar-item sub-menu-item" href="../relax.html/#books">Sách</a>
                                <a class="bar-item sub-menu-item" href="../relax.html/#games">trò chơi</a>
                            </div>
                        </div>
                        <div class="bar-item bar-item--has-childrent ">
                            <a class=" main-nav-item" href="../product.html">Sản phẩm</a>
                            <div class="sub-menu">
                                <a class="bar-item sub-menu-item" href="../product.html/#webs">Trang web</a>
                                <a class="bar-item sub-menu-item" href="../product.html/#poems">Thơ</a>
                                <a class="bar-item sub-menu-item" href="../product.html/#medias">Ảnh video</a>
                            </div>
                        </div>
                    </div>
                    <div class="main-nav-mobile">
                        <a class="bar-item-mobile " href="../home.html">Home</a>
                        <a class="bar-item-mobile " href="../share.html">Chia sẻ</a>
                        <div class="sub-menu">
                        <a class="bar-item-mobile tab-line" href="../share.html/#pc">Máy tính</a>
                        <a class="bar-item-mobile tab-line" href="../share.html/#phone">Điện thoại</a>
                        <a class="bar-item-mobile tab-line" href="../share.html/#coding">Lập trình</a>
                        <a class="bar-item-mobile tab-line" href="../share.html/#tips">Mẹo vặt linh tinh</a>
                        </div>
                        <a class="bar-item-mobile " href="../story.html">Câu chuyện</a>
                        <div class="sub-menu">
                        <a class="bar-item-mobile tab-line" href="../story.html/#dreams">Những giấc mơ</a>
                        <a class="bar-item-mobile tab-line" href="../story.html/#jobs">Công việc</a>
                        <a class="bar-item-mobile tab-line" href="../story.html/#life">Đời thường</a>
                        <a class="bar-item-mobile tab-line" href="../story.html/#study">Học hành</a>
                        </div>
                        <a class="bar-item-mobile " href="../relax.html">Giải trí</a>
                        <div class="sub-menu">
                        <a class="bar-item-mobile tab-line" href="../relax.html/#musics">Âm nhạc</a>
                        <a class="bar-item-mobile tab-line" href="../relax.html/#medias">Phim ảnh</a>
                        <a class="bar-item-mobile tab-line" href="../relax.html/#books">Sách</a>
                        <a class="bar-item-mobile tab-line" href="../relax.html/#games">trò chơi</a>
                        </div>
                        <a class="bar-item-mobile " href="../product.html">Sản phẩm</a>
                        <div class="sub-menu">
                        <a class="bar-item-mobile tab-line" href="../product/webs">Trang web</a>
                        <a class="bar-item-mobile tab-line" href="../product/poems">Thơ</a>
                        <a class="bar-item-mobile tab-line" href="../product/medias">Ảnh video</a>
                        </div>
                    </div>
                    <div class="main-nav-search">
                        <input class="main-nav-item bar-item float-right" type="text" placeholder="Search..">
                        <image class="main-nav-item" src="../assets/images/timkiem.png"></image>
                    </div>
                    <div class="main-nav-mobile-icon">
                        <image class="main-nav-mobile-open menu-icon active" src="../assets/images/icon-menu.png"></image>
                        <image class="main-nav-mobile-close menu-icon" src="../assets/images/icon-menu-close.png"></image>
                    </div>
                </div>`);

    let mainNav = $('div.bar-item')[firstBreadCrumb];
    let mainNavMobile = $('.main-nav-mobile').find('.bar-item-mobile:not(.tab-line)')[firstBreadCrumb];

    $(mainNav).addClass('current-page');
    $(mainNavMobile).addClass('current-page');

    if (Number.isInteger(secondBreadCrumb)) {
        let secLevelItem = $(mainNav).find('.bar-item')[secondBreadCrumb];
        let secLevelItemM = $(mainNavMobile).next().find('.bar-item-mobile')[secondBreadCrumb];

        $(secLevelItem).addClass('current-page');
        $(secLevelItemM).addClass('current-page');
    }
};

function renderBreadCrumb(isHomePage) {
    let breadCrumbHtml = '';
    let currPgs = $('.main-nav-bar .current-page');
    let curPlength = currPgs.length;

    $('.hello').prepend(` <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
    </ol>
    <div class="up">
    <a href="#hello">
        <img src="../assets/images/up.png" alt="lên đầu trang">
    </a>
</div>
</nav>`);
    if (isHomePage) {
        breadCrumbHtml += '<li class="breadcrumb-item active" aria-current="page">Home</li>';
    } else {
        breadCrumbHtml += `<li class="breadcrumb-item"> <a href="../home.html">Home</a> <span class="bread-crumb__spread"></span></a></li>`;
        if (curPlength == 1) {
            breadCrumbHtml += `<li class="breadcrumb-item active" aria-current="page">${currPgs[0].innerHTML}</li>`
        } else {
            currPgs.each((index, element) => {
                if (index == curPlength - 1) {
                    breadCrumbHtml += `<li class="breadcrumb-item active" aria-current="page">${element.innerHTML}</li>`;
                } else {
                    breadCrumbHtml += `<li class="breadcrumb-item"> <a href="${$(this).attr('href')}">${element.innerHTML}</a> <span class="bread-crumb__spread"></span></a></li>`;
                }
            });
        }
    }

    $('ol.breadcrumb').html(breadCrumbHtml);
}

function renderFooter(linkMusic) {
    $('.footer').html(`<div class="container">
    <div id="contact" class="contact ">
        <div class="item-title">
            <h2>Liên hệ</h2>
        </div>
        <div class="item-content">
            <p>
                <i class="fa fa-map-marker"></i> 129 Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội.
            </p>
            <p>
                <i class="fa fa-phone"></i> 0326152310.
            </p>
            <p>
                <i class="fa fa-envelope"></i> hoangminhtam7991@gmail.com.
            </p>
            <p>
                <i class="fa fa-envelope"></i> goddie9x@yahoo.com
            </p>
        </div>
    </div>
    <div class="content-grid">
        <p class="item-content-grid">
            <a href="https://www.facebook.com/goddie9x/">
                <i class="fab fa-facebook-square"></i>
            </a>
        </p>
        <p class="item-content-grid">
            <a href="https://github.com/goddie9x"> <i class="fab fa-github-square"></i></a>
        </p>
        <p class="item-content-grid">
            <a href="https://www.linkedin.com/in/hoangtam9x/"><i class="fab fa-linkedin"></i> </a>
        </p>
    </div>
    <div class="my-cosmos-music">
        <audio src="${linkMusic}" loop preload="auto " controls="true" autoplay="true" class="chapi "></audio>
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

function replaceClass(element, classNeedReplace, classReplace) {
    let elementTarget = $(element);

    elementTarget.removeClass(classNeedReplace);
    elementTarget.addClass(classReplace);
}