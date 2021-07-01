const HAMBURG = document.getElementById("hamburger-btn");

const openCloseNav = () => {
    document.querySelector(".ul--wrap").classList.toggle("display");
    document.querySelector(".darken").classList.toggle("active");
    document.querySelector("body").classList.toggle("hidden");
    document.querySelector(".nav__ul").classList.toggle("display");
};

HAMBURG.addEventListener("click", openCloseNav);

document.querySelector(".darken").addEventListener("click", openCloseNav);
