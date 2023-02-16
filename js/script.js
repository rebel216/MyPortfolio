const popupcontainer = document.createElement('section');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header-desktop');
const crossicon = document.querySelector('.cross-icon');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const portfolio = document.getElementById('portfolio');

const Works = [

  {
    title: 'Conference WebPage',
    description: `The global summit on Climate change . App helps one to know about the conference , different speaker attending and register to attend the conference ,
     get exposure to new ideas and contribute new ideas for benefit of humanity.`,
     imageUrl: './asset/project-1.png',
      tecnologies: [
       'React',
      'css',
     'JavaScript',
     'html',
    ],
    liveVersion: 'https://rebel216.github.io/Capstone-Project-1/index.html',
    source: 'https://github.com/rebel216/Capstone-Project-1',
  },
    {
        title: 'The Budget App',
        description:  `The Ruby Budget App is an example of a blog website.
        It will enable a one to create manage thier earnings and savings.`,
        imageUrl: './asset/budgetApp.png',
          tecnologies: [
           'React',
          'css',
         'JavaScript',
         'html',
        ],
        liveVersion: 'https://rails-budget-app.onrender.com/',
        source: 'https://github.com/rebel216/The-Budget-App',

  },
  {
    title: 'To Do List APP',
    description:  `To-do list App is an app that helps one to create and manage Todo list .
    It uses local storage to store the data so that it will persist even when the webpage is closed.`,
    imageUrl: './asset/todo.png',
      tecnologies: [
       'React',
      'css',
     'JavaScript',
     'html',
    ],
    liveVersion: 'https://rebel216.github.io/To-Do-List/dist/',
    source: 'https://github.com/rebel216/ToDo-List-2',

  },
  {
    title:  'LeaderBoard',
    description: `A leaderboard that displays scores submitted by different players. Allows submission of your own score.
    All data is preserved thanks to the external Leaderboard API service.`,
      imageUrl: './asset/leader.png',
      tecnologies: [
        'Rubi on rails',
       'React',
      'css',
     'JavaScript',
     'html',
    ],
    liveVersion: 'https://rebel216.github.io/LeaderBoard/dist',
    source: 'https://github.com/rebel216/LeaderBoard',

  },
  {
    title:   'STOCKIST WEB APP',
    description: `The project, a frontend web application,
    catalogue of financial values using Stock API and collect the data from my React Application.`,

      imageUrl: './asset/cat1.jpg',
      tecnologies: [
        'Rubi on rails',
       'React',
      'css',
     'JavaScript',
     'html',
    ],
    liveVersion: 'https://63416a61dc027f0008bfb05e--tranquil-gumdrop-ab7d6d.netlify.app/',
    source: 'https://github.com/rebel216/Capstone-React-Finance',

  },
];

const popup = (name, img, desc, tech, liveVersion, projectSource, index) => {
  popupcontainer.classList.add('mobile-popup-container');
  popupcontainer.setAttribute('data-visible', 'false');
  popupcontainer.classList.add('display-none');

  popupcontainer.innerHTML = `
  <div class="icon-image">
    <div class="back-cross">
      <img class="cross-popup-icon" src="images/cross-icon.png" alt="" />
    </div>
    <div class="popup-image">
      <img src=${img} />
    </div>
  </div>
  <div class="title-and-tech">
    <div>
      <h1 class="popup-title">${name}</h1>
    </div>
    <div>
      <ul class="popup-tech tech-list-${index}">
      </ul>
    </div>
  </div>
  <div class="popup-description">${desc}</div>
  <div class="popup-buttons">
    <div class="live-button">
      <a class="live" target="_blank" href=${liveVersion}>
        See Live
      </a>
      <img src="images/live-icon.svg" alt="" />
    </div>
    <div class="live-button ml">
      <a class="live" target="_blank" href=${projectSource}>
        See Source
      </a>
      <img src="images/source-icon.svg" alt="" />
    </div>
  </div>
  `;

  document.body.appendChild(popupcontainer);

  const techContainer = document.querySelector(`.tech-list-${index}`);
  tech.forEach((tec) => {
    techContainer.innerHTML += `<li class="popup-tech-li">${tec}</li>`;
  });

  const divbackcross = document.querySelector('.cross-popup-icon');
  document.addEventListener('click', (event) => {
    const popup = document.querySelector('.mobile-popup-container');
    const visibility = popup.getAttribute('data-visible');
    if (event.target.closest('.mobile-popup-container')) return;
    if (visibility === 'true') {
      popup.setAttribute('data-visible', 'onRight');
    }
    document.body.style.overflow = 'auto';
  });

  divbackcross.addEventListener('click', () => {
    const popup = document.querySelector('.mobile-popup-container');
    const visibility = popup.getAttribute('data-visible');
    const techDiv = popup.querySelector('.title-and-tech');
    const popupTech = popup.querySelector('.popup-tech');

    if (visibility === 'true') {
      popup.setAttribute('data-visible', 'onRight');
    }

    setTimeout(() => {
      techDiv.childNodes.forEach((tech) => {
        techDiv.removeChild(tech);
      });
      techDiv.parentElement.removeChild(techDiv);

      popupTech.childNodes.forEach((tech) => {
        popupTech.removeChild(tech);
      });
      popupTech.parentElement.removeChild(popupTech);

      // remove children elements...
      popup.childNodes.forEach((child) => {
        popup.removeChild(child);
      });
      popup.parentElement.removeChild(popup);
      popup.setAttribute('data-visible', 'false');
    }, 200);
    document.body.style.overflow = 'auto';
  });
};

const createPopup = () => {
  const storybutton = document.querySelectorAll('.seepr-button');

  for (let i = 0; i < storybutton.length; i += 1) {
    storybutton[i].addEventListener('click', () => {
      popup(Works[i].title, Works[i].imageUrl, Works[i].description,
        Works[i].technologies, Works[i].liveVersion, Works[i].source, i);
      const popupcontainer = document.querySelector('.mobile-popup-container');
      popupcontainer.classList.remove('display-none');
      popupcontainer.classList.add('display-flex');
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        const visibility = popupcontainer.getAttribute('data-visible');
        if (visibility === 'false') {
          popupcontainer.setAttribute('data-visible', 'true');
        }
      }, 50);
    });
  }
};

function cards (name, technologies, img, index) {
  const gridContainer = document.querySelector('.grid');

  gridContainer.innerHTML += `
  <div class="stories-card" style='background-image: url(${img});'>
    <div class="white-back">
      <h3 class="card-title">${name}</h3>
      <ul class="list technologies-list-${index}">
      </ul>
      <p class="seepr-button">See Project</p>
    </div>
  </div>`;

  const technologiesContainer = document.querySelector(`.technologies-list-${index}`);

  technologies.forEach((tech) => {
    technologiesContainer.innerHTML += `<li class="lang-name">${tech}</li>`;
  });
}

const cardCreator = (projects) => {
  for (let i = 0; i < projects.length; i += 1) {
    cards(projects[i].title, projects[i].technologies, projects[i].imageUrl, i);
  }
};

hamburger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  const visibility = header.getAttribute('data-visible');
  if (visibility === 'false') {
    header.setAttribute('data-visible', 'true');
  } else if (visibility === 'true') {
    header.setAttribute('data-visible', 'false');
  }
});

crossicon.addEventListener('click', () => {
  header.setAttribute('data-visible', 'onRight');
  setTimeout(() => {
    header.setAttribute('data-visible', 'false');
  }, 400);
  document.body.style.overflow = 'auto';
});

portfolio.addEventListener('click', () => {
  header.setAttribute('data-visible', 'false');
  document.body.style.overflow = 'auto';
});

about.addEventListener('click', () => {
  header.setAttribute('data-visible', 'false');
  document.body.style.overflow = 'auto';
});

contact.addEventListener('click', () => {
  header.setAttribute('data-visible', false);
  document.body.style.overflow = 'auto';
});

window.addEventListener('load', () => {
  cardCreator(Works);
  createPopup();
});
