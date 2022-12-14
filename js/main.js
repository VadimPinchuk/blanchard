// dropdown menu
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled",
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// hero-slider

const swiper = new Swiper(".js-hero-swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  allowTouchMove: false,
  effect: "fade",
  speed: 10000,
  autoplay: {
    delay: 10000,
  },
});

// gallery slider

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery__swiper-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery__swiper-section .gallery__swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },

    breakpoints: {
      580: {
        slidesPerGroup: 3,
        slidesPerView: 2,
        spaceBetween: 38,
      },

      1000: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },

      1200: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }, // ?????????? ?????????????????? ?? ???????????????????? ?????????????????? ??????????/????????????

    // ???????????????????? ???????????????????? ???????????? ???????????? ?????? ?????????????? ?????????????????? ???? ??????????????????????????
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
    },

    // on: {
    //   /* ???????????????????? ?????? ?? margin-top ???????????????????? ?????? ?????????? ??????????????????????, ?????? ???????? ?????????? ?? 6-?? ???????????? ???????????????? */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// Choices

const defaultSelect = () => {
  const element = document.querySelector(".gallery__select");
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    allowHTML: true,
    shouldSort: false,
  });
};

defaultSelect();

//Accordion

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0],
  });
})();

// ????????
const parameters = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active",
};

function setTabs(parameters) {
  const tabBtns = document.querySelectorAll(`.${parameters.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${parameters.wrap}`);
    const currentContent = wrap.querySelector(
      `.${parameters.content}[data-target="${path}"]`
    );
    const contents = wrap.querySelectorAll(`.${parameters.content}`);

    contents.forEach((el) => {
      el.classList.remove(parameters.active);
    });

    currentContent.classList.add(parameters.active);

    tabBtns.forEach((el) => {
      el.classList.remove(parameters.active);
    });

    this.classList.add(parameters.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(parameters);

const doingsSwiper = new Swiper(".doings__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: ".doings__swiper-btn-next",
    prevEl: ".doings__swiper-btn-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,

      slidesPerGroup: 1,
    },

    700: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    998: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// TOOLTIPS

tippy("#tooltip1", {
  content: "???????????? ?????????????????????? ?????????????????? - ?????????????????????? ?????????????????????? ????????????????????",
  theme: "myTheme",
});

tippy("#tooltip2", {
  content:
    "??????????????, ????????????????, ??????????????????, ?????? ?????????????????? ???? ???????? ?????????????????? ???????????? ???????????????? ?? ?????? ????????????",
  theme: "myTheme",
});

tippy("#tooltip3", {
  content: "?? ???????????????????? ???????????????? ????????????????",
  theme: "myTheme2",
});

const projectsSwiper = new Swiper(".projects__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: ".projects-button-next",
    prevEl: ".projects-button-prev",
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    485: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 35,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// MAP

// ?????????????? ymaps.ready() ?????????? ??????????????, ??????????
// ???????????????????? ?????? ???????????????????? API, ?? ?????????? ?????????? ?????????? ???????????? DOM-????????????.
ymaps.ready(init);
function init() {
  // ???????????????? ??????????.
  var myMap = new ymaps.Map(
    "map",
    {
      center: [55.75847411879586, 37.60108849999989],
      zoom: 14,
      controls: ["smallMapDefaultSet"],
    },

    {
      searchControlProvider: "yandex#search",
      geolocationControlPosition: { top: "300px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" },
    }
  );


  myMap.controls.remove("geolocationControl"); // ?????????????? ????????????????????
  myMap.controls.remove("searchControl"); // ?????????????? ??????????
  myMap.controls.remove("trafficControl"); // ?????????????? ???????????????? ??????????????
  myMap.controls.remove("typeSelector"); // ?????????????? ??????
  myMap.controls.remove("fullscreenControl"); // ?????????????? ???????????? ???????????????? ?? ?????????????????????????? ??????????
  myMap.controls.remove("zoomControl"); // ?????????????? ?????????????? ????????????????????????
  myMap.controls.remove("rulerControl"); // ?????????????? ?????????????? ????????????
  myMap.behaviors.disable(["scrollZoom"]); // ?????????????????? ???????????? ?????????? (??????????????????????)


  if (window.matchMedia("(min-width: 769px)").matches) {
    myMap.controls.add("geolocationControl");
    myMap.controls.add("zoomControl");
  }



  var myPlacemark = new ymaps.Placemark(
    [55.75847411879586, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./images/map-point.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    }
  );

  // ???????????????????? ???????????????????? ???? ??????????.

  myMap.geoObjects.add(myPlacemark);
}

// Validate

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

let validation = new JustValidate("#form", {
  errorLabelStyle: {
    color: "#D11616",
  },
});

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "???? ???? ?????????? ??????",
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: "?????????????? 3 ??????????????",
  },
  {
    rule: "maxLength",
    value: 30,
    errorMessage: "???????????????? 30 ????????????????",
  },
]);

validation.addField("#tel", [
  {
    validator: (value) => {
      const tel = selector.inputmask.unmaskedvalue();
      return Boolean(Number(tel) && tel.length > 0);
    },
    errorMessage: "???? ???? ?????????? ??????????????",
  },
  {
    validator: (value) => {
      const tel = selector.inputmask.unmaskedvalue();
      return Boolean(Number(tel) && tel.length === 10);
    },
    errorMessage: "?????????????? ?????????????? ??????????????????",
  },
]);

// Search Form

let search = document.querySelector(".form-search");
let close = document.querySelector(".form-search-close");

document.getElementById("open").addEventListener("click", () => {
  search.classList.add("form-search-show");
  search.removeAttribute("inert");
  document.getElementById("open").classList.add("header__search-close");
});

close.addEventListener("click", () => {
  search.classList.remove("form-search-show");
  document.getElementById("open").classList.remove("header__search-close");
});

document.getElementById("open").addEventListener("submit", (e) => {
  e.preventDefault();
});

// Burger

let burgerBtn = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger__nav");
let burgerLinks = document.querySelectorAll(".burger__nav");
burgerMenu.inert = true;

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.add("burger__nav-active");
  burgerMenu.removeAttribute("inert");
  burgerMenu.inert = false;
  document.body.classList.toggle("stop-scroll");
});

burgerLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burgerMenu.classList.remove("burger__nav-active");
    document.body.classList.remove("stop-scroll");
  });
});

// Smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
