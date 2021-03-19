setInterval(function() {
    let H1Element = document.querySelector('.headingTitle');
    H1Element.classList.toggle('colorChangeBlack');
}, 500);

function elementMoveWhenMouseMove(object) {
    let funnyTextElement = document.querySelector(object.funnyTextElement),
        arrayTextRandom = object.arrayTextRandom;
    if (arrayTextRandom) {
        let arrayLength = arrayTextRandom.length;

        funnyTextElement.onmousemove = function(e) {

            let randomLeft = `${Math.floor(Math.random()*95)}vw`,
                randomTop = `${Math.floor(Math.random()*95)}vh`,
                randomText = Math.floor(Math.random() * arrayLength);

            Object.assign(e.target.style, {
                left: randomLeft,
                top: randomTop,
            });
            e.target.innerText = arrayTextRandom[randomText];
        }
    } else {
        funnyTextElement.onmousemove = function() {};
    }

}

let Copyright = document.querySelector('.copyright');

Copyright.onclick = function(e) {
    isClick = Copyright.classList.contains('buttonF');
    if (isClick) {
        elementMoveWhenMouseMove({
            funnyTextElement: '.funnyText',
            arrayTextRandom: ['đừng chạm vào đây *.*',
                'á á á ><',
                'đố anh bắt được iem :3',
                'em đùa đấy đừng chạm vào em @@',
                'đã bảo đừng động vào tôi rồi ~~',
                'tránh ra nào $.$',
                'ơ hay 0.o', 'né né né -.-',
                'click vào copyright để dừng lại :v'
            ]
        });
        Copyright.classList.toggle('buttonF');
    } else {
        elementMoveWhenMouseMove({
            funnyTextElement: '.funnyText'
        });
        Copyright.classList.toggle('buttonF');
    }
}

function scrollLocalAddclass(elementActive, elementAddClass, scrollY) {


    window.addEventListener("scroll", function() {
        let elementStikyAdd = document.querySelector(elementActive);

        if (window.scrollY > scrollY) {
            elementStikyAdd.classList.add(elementAddClass);
        } else {
            elementStikyAdd.classList.remove(elementAddClass);
        }
    });
}

function ShowDivSelect(object) {
    if (object) {
        let elementNeedActive = document.querySelector(object.elementActive);
        let elementShow = object.elementShow;

        elementNeedActive.onchange = function() {
            let valueElementActive = elementNeedActive.value;
            let whichElementShow = document.querySelector(elementShow[valueElementActive]);

            elementShow.forEach(E => {
                ElementOff = document.querySelector(E);
                ElementOff.style.display = 'none';
            });
            whichElementShow.style.display = 'inline-block';

        }
    }

}

//need style display=none hard code on html

function ShowHideChangeDiv(object) {
    let elementActive = document.querySelector(object.elementActive),
        ArrayElementShowHide = object.ArrayElementShowHide,
        elementNeedChangeHTML = object.elementNeedChangeHTML,
        HTMLchange = object.HTMLchange;

    elementActive.onclick = function() {
        ArrayElementShowHide.forEach(
            function(text) {
                elementShowHide = document.querySelector(text);

                if (elementShowHide.style.display == 'none') {
                    elementShowHide.style.display = 'inline-block';

                } else {
                    elementShowHide.style.display = 'none';
                }
            }
        );
        if (elementNeedChangeHTML && HTMLchange) {
            let target = document.querySelector(elementNeedChangeHTML);
            target.innerHTML = HTMLchange;
        }
    }
}

function clickOutsideClose(elementName, exceptionElement) {
    let elementClickOutHide = document.querySelector(elementName),
        elememtException = document.querySelector(exceptionElement);

    document.addEventListener('click', function(event) {
        isClickInside = (exceptionElement) ? (elementClickOutHide.contains(event.target) || elememtException.contains(event.target)) : elementClickOutHide.contains(event.target);

        if (!isClickInside) {
            elementClickOutHide.style.display = 'none';
        }
    });
}

function clickedChangeElement(element, elementHtmlInner) {
    let elementChange = document.querySelector(element);
    if (elementHtmlInner) {
        elementChange.onclick = function() {
            elementChange.innerHTML = elementHtmlInner;
        }
    }
}