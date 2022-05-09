let mobileMenu = document.querySelector("#mobile-menu-hide");
let btnMobileMenu = document.querySelector("#mobile-menu-button");
let btnCancelMobileMenu = document.querySelector("#btn-close-nav");
const PortfolioClicked = document.querySelector(".link-portfolio");
const AboutClicked = document.querySelector(".link-about");
const ContactClicked = document.querySelector(".link-contact");

function displaymobilemenu() {
  //alert("changed");
  mobileMenu.classList.replace("mobile-menu-hide", "mobile-menu-show");
}

function hidemobilemenu() {
  //alert("changed");
  mobileMenu.classList.replace("mobile-menu-show", "mobile-menu-hide");
}

btnMobileMenu.addEventListener("click", displaymobilemenu);
btnCancelMobileMenu.addEventListener("click", hidemobilemenu);
PortfolioClicked.addEventListener("click", hidemobilemenu);
AboutClicked.addEventListener("click", hidemobilemenu);
ContactClicked.addEventListener("click", hidemobilemenu);
