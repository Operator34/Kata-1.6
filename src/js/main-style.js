const mediaQuery_320px = window.matchMedia(
    "(min-width: 320px) and (max-width: 767px)"
);
const mediaQuery_768px = window.matchMedia(
    "(min-width: 768px) and (max-width: 1120px)"
);
const mediaQuery_1121px = window.matchMedia("(min-width: 1121px)");

const buttonDescriptionReadMore = document.querySelector(
    ".description-read-more__button-read-more"
);
const buttonDescriptionHiddenMore = document.querySelector(
    ".description-read-more__button-hidden-more"
);
const descriptionForAll = document.querySelector(".description__for-all");
const descriptionForTablet = document.querySelector(".description__for-tablet");
const descriptionForDesktop = document.querySelector(
    ".description__for-desktop"
);

buttonDescriptionReadMore.addEventListener("click", function (evt) {
    console.log("buttonDescriptionReadMore");
    descriptionForTablet.classList.add("show");
    descriptionForDesktop.classList.add("show");
    buttonDescriptionReadMore.classList.add("hidden");
    buttonDescriptionHiddenMore.classList.remove("hidden");
});

buttonDescriptionHiddenMore.addEventListener("click", function (evt) {
    console.log("buttonDescriptionHiddenMore");
    if (mediaQuery_320px) {
        descriptionForTablet.classList.remove("show");
        descriptionForDesktop.classList.remove("show");
    }
    if (mediaQuery_768px) {
        descriptionForDesktop.classList.remove("show");
    }
    buttonDescriptionHiddenMore.classList.add("hidden");
    buttonDescriptionReadMore.classList.remove("hidden");
});
