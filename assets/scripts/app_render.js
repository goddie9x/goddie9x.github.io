function renderHeader(firstBreadCrumb, secondBreadCrumb) {
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
                <li class="nav-item active">
                    <a class="nav-link" href="../home.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../share.html">Chia sẻ</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../share.html/#pc">Máy tính</a>
                        <a class="dropdown-item" href="../share.html/#phone">Điện thoại</a>
                        <a class="dropdown-item" href="../share.html/#coding">Lập trình</a>
                        <a class="dropdown-item" href="../share.html/#tips">Mẹo vặt</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../story.html">Câu chuyện</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../story.html/#dreams">Những giấc mơ</a>
                        <a class="dropdown-item" href="../story.html/#jobs">Công việc</a>
                        <a class="dropdown-item" href="../story.html/#life">Đời thường</a>
                        <a class="dropdown-item" href="../story.html/#study">Học hành</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../relax.html">Giải trí</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../relax.html/#musics">Âm nhạc</a>
                        <a class="dropdown-item" href="../relax.html/#medias">Phim ảnh</a>
                        <a class="dropdown-item" href="../relax.html/#books">Sách</a>
                        <a class="dropdown-item" href="../relax.html/#games">Trò chơi</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../product.html">Sản phẩm</a>
                    <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../product.html/#webs">Trang web</a>
                        <a class="dropdown-item" href="../product.html/#poems">Thơ</a>
                        <a class="dropdown-item" href="../product.html/#medias">Ảnh video</a>
                    </div>
                </li>
            </ul>
            <form class="seach-bar my-2 my-lg-0">
                <input class="form-control mr-sm-2 col" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn  -outline-success my-2 my-sm-0 col" type="submit">Search</button>
            </form>
        </div>
    </nav>
</div>`);
};

function renderBreadCrumb(isHomePage) {
    let breadCrumbHtml = '';
    let currPgs = $('.main-nav-bar .current-page');
    let curPlength = currPgs.length;

    $('.hello').prepend(` <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
    </ol>
   
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