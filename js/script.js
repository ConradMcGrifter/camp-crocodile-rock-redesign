const PREV = document.getElementById("prev");
const NEXT = document.getElementById("next");

let slideIndex = 1;


const showSlide = (n) => {
    let slides = document.getElementsByClassName("slide__img");
    let infoBoxes = document.getElementsByClassName("info-box")

    if(n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (let i = 0; i < infoBoxes.length; i++) {
        infoBoxes[i].style.display = "none"
    }


    slides[slideIndex - 1].style.display = "block"
    infoBoxes[slideIndex - 1].style.display = "block"
    
}

const changeSlide = (n) => {
    showSlide(slideIndex += n)
}

showSlide(slideIndex)

PREV.addEventListener("click", ()=> {
    changeSlide(-1)
})

NEXT.addEventListener("click", ()=> {
    changeSlide(1)
})
