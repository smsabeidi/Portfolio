// Opens and closes the nav menu
function initializeResponsiveNav() {
    const toggleBtn = document.querySelector(".togglebtn");
    const navLinks = document.querySelector(".navlinks");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("active");
            toggleBtn.classList.remove("click");
        }
    });
}

initializeResponsiveNav();


// Creating button click show hide navbar 
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings: [
        "Wordpress Developer",
        "UX Designer",
        "Java Developer",
        "Travel Agent",
    ],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true,
});

// Portfolio section - Modal
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});