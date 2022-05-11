const mobileMenu = document.querySelector('#mobile-menu-hide');
const btnMobileMenu = document.querySelector('#mobile-menu-button');
const btnCancelMobileMenu = document.querySelector('#btn-close-nav');
const PortfolioClicked = document.querySelector('.link-portfolio');
const AboutClicked = document.querySelector('.link-about');
const ContactClicked = document.querySelector('.link-contact');

const page = document.getElementsByTagName('body')[0];

function displaymobilemenu() {
  mobileMenu.classList.replace('mobile-menu-hide', 'mobile-menu-show');
  page.classList.add('noscroll');
}

function hidemobilemenu() {
  mobileMenu.classList.replace('mobile-menu-show', 'mobile-menu-hide');
  page.classList.remove('noscroll');
}

btnMobileMenu.addEventListener('click', displaymobilemenu);
btnCancelMobileMenu.addEventListener('click', hidemobilemenu);
PortfolioClicked.addEventListener('click', hidemobilemenu);
AboutClicked.addEventListener('click', hidemobilemenu);
ContactClicked.addEventListener('click', hidemobilemenu);

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

const submit1 = document.getElementById('submit-form1');

const emailError1 = document.getElementById('error1');

submit1.addEventListener('click', (event) => {
  const email1 = document.getElementById('email-form1').value;
  const emailValidation1 = /[A-Z]/.test(email1);

  if (emailValidation1) {
    emailError1.textContent = 'To submit the form, please enter your email id in lowercase';
    event.preventDefault();
  }
});
