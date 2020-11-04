let calculatorRowSliderSum = document.querySelector('.calculator-row__slider.sum');
let button = document.querySelector('.fixed-btn');
let footer = document.querySelector('.widget');
let calculatorRowSliderTerm = document.querySelector('.calculator-row__slider.term');
let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
let clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
let windowHeight = window.innerHeight
let widget = document.getElementById('#widget')
let widgetRect = widget.getBoundingClientRect()

let widgetPositions = {
    top: widgetRect.top + scrolltop - clientTop,
    bottom: widgetRect.bottom + scrolltop - clientTop
}


noUiSlider.create(calculatorRowSliderSum, {
    start: 955000,
    connect: 'lower',
    step: 90000,
    range: {
        'min': 90000,
        'max': 2000000
    }
});

noUiSlider.create(calculatorRowSliderTerm, {
    start: 45,
    connect: 'lower',
    step: 1,
    range: {
        'min': 13,
        'max': 60
    }
});

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        425: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

button.addEventListener('click', () => {
    scrollTo(footer);
})

let lastScrollPosition

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop


    if(scrollTop > lastScrollPosition && scrollTop < widgetPositions.top) {
        // down
        button.classList.add("hide-btn");
    }
    else {
        // up
        button.classList.remove("hide-btn");
    }

    lastScrollPosition = scrollTop
});