let mobileMenu = document.querySelector("#mobile-menu-hide");
let btnMobileMenu = document.querySelector("#mobile-menu-button");
let btnCancelMobileMenu = document.querySelector("#btn-close-nav");
const PortfolioClicked = document.querySelector(".link-portfolio");
const AboutClicked = document.querySelector(".link-about");
const ContactClicked = document.querySelector(".link-contact");

var page = document.getElementsByTagName('body')[0];


function displaymobilemenu() {
  //alert("changed");
  mobileMenu.classList.replace("mobile-menu-hide", "mobile-menu-show");
  page.classList.add('noscroll');
}

function hidemobilemenu() {
  //alert("changed");
  mobileMenu.classList.replace("mobile-menu-show", "mobile-menu-hide");
  page.classList.remove('noscroll');
}

btnMobileMenu.addEventListener("click", displaymobilemenu);
btnCancelMobileMenu.addEventListener("click", hidemobilemenu);
PortfolioClicked.addEventListener("click", hidemobilemenu);
AboutClicked.addEventListener("click", hidemobilemenu);
ContactClicked.addEventListener("click", hidemobilemenu);


  /* FORM VALIDATIONS */

  const submit = document.getElementById('submit-form');
  const emailError = document.getElementById('error');
  
  submit.addEventListener('click', (event) => {
    const email = document.getElementById('email-form').value;
    const emailValidation = /[A-Z]/.test(email);
  
    if (emailValidation) {
      emailError.textContent = 'To submit the form, please enter your email id in lowercase';
      event.preventDefault();
    }
  });
    