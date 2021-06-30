const HAMBURG = document.getElementById("hamburger-btn");

HAMBURG.addEventListener("click", () => {
    document.querySelector(".ul--wrap").classList.toggle("display");
    document.querySelector(".darken").classList.toggle("active");
});
