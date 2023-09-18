const hamburgerMenu = document.querySelector("#hamburger-menu");
const sideNav = document.querySelector("#side-nav");
const closeBtn = document.querySelector("#close-btn");

hamburgerMenu.addEventListener("click", openSideNav);
closeBtn.addEventListener("click", closeSideNav);

function openSideNav() {
    sideNav.style.width = "100%";
}

function closeSideNav() {
    sideNav.style.width = "0";
}