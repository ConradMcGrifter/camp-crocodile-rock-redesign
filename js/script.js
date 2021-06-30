import * as navBar from "./navBar.js";

const PREV = document.getElementById("prev");
const NEXT = document.getElementById("next");
const CIRCLES = document.getElementsByClassName("circle");

let slideIndex = 1;

const showSlide = (n) => {
    let slides = document.getElementsByClassName("slide__img");
    let infoBoxes = document.getElementsByClassName("info-box");
    let circles = document.getElementsByClassName("circle");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden";
        slides[i].classList.remove("animate");
    }

    for (let i = 0; i < infoBoxes.length; i++) {
        infoBoxes[i].style.display = "none";
    }

    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.visibility = "visible";
    slides[slideIndex - 1].classList.add("animate");
    infoBoxes[slideIndex - 1].style.display = "flex";
    circles[slideIndex - 1].classList.add("active");
};

const changeSlide = (n) => {
    showSlide((slideIndex += n));
};

const currentSlide = (n) => {
    showSlide((slideIndex = n));
};

for (let i = 0; i < CIRCLES.length; i++) {
    CIRCLES[i].addEventListener("click", () => {
        currentSlide(i + 1);
    });
}

showSlide(slideIndex);

PREV.addEventListener("click", () => {
    changeSlide(-1);
});

NEXT.addEventListener("click", () => {
    changeSlide(1);
});
