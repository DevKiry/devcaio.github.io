const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
    hamburger.classList.toggle("is-active");
});

document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}));