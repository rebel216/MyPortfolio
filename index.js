const mobileMenu = document.querySelector('#mobile-menu-hide');
const btnMobileMenu = document.querySelector('#mobile-menu-button');
const btnCancelMobileMenu = document.querySelector('#btn-close-nav');
const PortfolioClicked = document.querySelector('.link-portfolio');
const AboutClicked = document.querySelector('.link-about');
const ContactClicked = document.querySelector('.link-contact');
const allBtnPopups = document.querySelectorAll('.btn-pop');
const page = document.getElementsByTagName('body')[0];
const form = document.querySelector('.form-input');
const [firstName, lastName, email, textArea] = form.elements;
const form1 = document.querySelector('.form-input1');
const [firstName1, lastName1, email1, textArea1] = form1.elements;

/* checks avalable storage */

function storageAvailable() {
  let storage;
  try {
    storage = window.localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

/* end checks */

if (storageAvailable('localStorage')) {
  let inputData = {};
  if (localStorage.savedForm) {
    inputData = JSON.parse(localStorage.getItem('savedForm'));
  }

  firstName.addEventListener('change', () => {
    inputData.firstName = firstName.value;
  });

  lastName.addEventListener('change', () => {
    inputData.lastName = lastName.value;
  });

  email.addEventListener('change', () => {
    inputData.email = email.value;
  });

  textArea.addEventListener('change', () => {
    inputData.textArea = textArea.value;
  });

  const fillDataInput = () => {
    if (inputData.firstName) {
      firstName.value = inputData.firstName;
    }
    if (inputData.lastName) {
      lastName.value = inputData.lastName;
    }
    if (inputData.email) {
      email.value = inputData.email;
    }
    if (inputData.textArea) {
      textArea.value = inputData.textArea;
    }
  };
  const populateFields = () => {
    localStorage.setItem('savedForm', JSON.stringify(inputData));
    fillDataInput();
  };
  populateFields();
  form.onchange = populateFields;
}

/* From data save mobile */
let inputData1 = {};
if (localStorage.savedForm1) {
  inputData1 = JSON.parse(localStorage.getItem('savedForm1'));
}

firstName1.addEventListener('change', () => {
  inputData1.firstName1 = firstName1.value;
});

lastName1.addEventListener('change', () => {
  inputData1.lastName1 = lastName1.value;
});

email1.addEventListener('change', () => {
  inputData1.email1 = email1.value;
});

textArea1.addEventListener('change', () => {
  inputData1.textArea1 = textArea1.value;
});

const fillDataInput1 = () => {
  if (inputData1.firstName1) {
    firstName1.value = inputData1.firstName1;
  }
  if (inputData1.lastName1) {
    lastName1.value = inputData1.lastName1;
  }
  if (inputData1.email1) {
    email1.value = inputData1.email1;
  }
  if (inputData1.textArea1) {
    textArea1.value = inputData1.textArea1;
  }
};
const populateFields1 = () => {
  localStorage.setItem('savedForm1', JSON.stringify(inputData1));
  fillDataInput1();
};
populateFields1();
form1.onchange = populateFields1;

/*  Pop-up Data */
const dataCards = [
  {
    id: 0,
    url: './asset/cat1.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://google.com/',
    linkSource: 'https://github.com/rebel216/',
  },
  {
    id: 1,
    url: './asset/cat2.jpeg',
    title: 'Multi-Post Stories Gain+Glory',
    description: `Odyssey Lift-off V - Server, and Odyssey Lift-off V - Client, Course Companion App, 
    Odyssey is Apollo's free interactive learning platform. It's the 
    perfect place to start your GraphQL journey, and we'll be adding 
    courses on more advanced features and topics soon.`,
    tecnologies: {
      tech1: 'React',
      tech2: 'Apollo-client',
      tech3: 'Apollo-server',
      tech4: 'GraphQL',
    },
    linkVersion: 'https://google.com/',
    linkSource: 'https://github.com/rebel216',
  },
  {
    id: 2,
    url: './asset/cat2.jpeg',
    title: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'React',
      tech2: 'Firebase',
      tech3: 'JavaScript',
      tech4: 'css',
    },
    linkVersion: 'https://google.com/',
    linkSource: 'https://github.com/rebel216/',
  },
  {
    id: 3,
    url: './asset//cat1.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/rebel216/',
  },
  {
    id: 4,
    url: './asset/cat1.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/rebel216/',
  },
];

const WorkDetailsMobile = (index) => `<div class='pop-up'>
  <article class='card-work-detail'>
          <div>
          <button type='button' class='btn-close-detail'>
            <img src='./asset/Icon-Cancel.svg' alt='cancel icon'>
          </button>
          </div>
          <div>
          <div class='card-image-details'>
              <img src=${dataCards[index].url} alt='cat cute'>
          </div>
          </div>
          <div class='card-title-mobile'>
          <h2>
              ${dataCards[index].title}
          </h2>
          </div>
            <div class='card-links-mobile '>
                  <a href=${dataCards[index].linkVersion} class='btn-card-details-mobile'>
                  See Live
                  <img src='./asset/see_live_icon.svg' alt='cat cute'>
                  </a>
                  <a href=${dataCards[index].linkSource} class='btn-card-details-mobile'>
                  See Sources
                  <img src='./asset/github_white.svg' alt='cat cute'>
                  </a>
          </div>
          <div>
          <ul class='work-tag-popup'>
              <li class='mobile-tag'>${dataCards[index].tecnologies.tech1}</li>
              <li class='mobile-tag'>${dataCards[index].tecnologies.tech3}</li>
              <li class='mobile-tag'>${dataCards[index].tecnologies.tech4}</li>
          </ul>
          </div>
          <div class='popup-paragraph'>
          <p>
            ${dataCards[index].description}
          </p>
          </div>
        <script src='index.js'></script>
  </article>
  </div>
  `;

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

btnMobileMenu.addEventListener('click', displaymobilemenu);
btnCancelMobileMenu.addEventListener('click', hidemobilemenu);
PortfolioClicked.addEventListener('click', hidemobilemenu);
AboutClicked.addEventListener('click', hidemobilemenu);
ContactClicked.addEventListener('click', hidemobilemenu);

for (let i = 0; i < allBtnPopups.length; i += 1) {
  allBtnPopups[i].addEventListener('click', () => {
    const cardWork = document.createElement('div');
    cardWork.innerHTML = WorkDetailsMobile(i);
    document.body.appendChild(cardWork);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-detail');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      document.body.removeChild(cardWork);
    });
  });
}

/* Form Data local storage */

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