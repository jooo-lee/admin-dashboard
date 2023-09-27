const hamburgerMenu = document.querySelector("#hamburger-menu-icon");
const sideNav = document.querySelector("#side-nav");
const closeBtn = document.querySelector("#close-btn");
const body = document.querySelector("body");

// ---------------------- Adding event listeners ----------------------

hamburgerMenu.addEventListener("click", openSideNav);
closeBtn.addEventListener("click", closeSideNav);

// ----------------------------- Callbacks -----------------------------

function openSideNav() {
    sideNav.style.width = "100%";
    body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeSideNav() {
    sideNav.style.width = "0";
    body.style.overflow = "auto"; // Re-enable scrolling
}