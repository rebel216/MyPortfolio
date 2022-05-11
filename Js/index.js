let mobileMenu = document.querySelector("#mobile-menu-hide");
let btnMobileMenu = document.querySelector("#mobile-menu-button");
let btnCancelMobileMenu = document.querySelector("#btn-close-nav");
const PortfolioClicked = document.querySelector(".link-portfolio");
const AboutClicked = document.querySelector(".link-about");
const ContactClicked = document.querySelector(".link-contact");
const allBtnPopups = document.querySelectorAll(".btn-pop");

var page = document.getElementsByTagName("body")[0];
var popup = document.getElementsByClassName("desk-work-list");

function displaymobilemenu() {
  //alert("changed");
  mobileMenu.classList.replace("mobile-menu-hide", "mobile-menu-show");
  page.classList.add("noscroll");
}

function hidemobilemenu() {
  //alert("changed");
  mobileMenu.classList.replace("mobile-menu-show", "mobile-menu-hide");
  page.classList.remove("noscroll");
}

btnMobileMenu.addEventListener("click", displaymobilemenu);
btnCancelMobileMenu.addEventListener("click", hidemobilemenu);
PortfolioClicked.addEventListener("click", hidemobilemenu);
AboutClicked.addEventListener("click", hidemobilemenu);
ContactClicked.addEventListener("click", hidemobilemenu);

const dataCards = [
  {
    id: 0,
    url: "./asset/cat1.jpg",
    title: "Multi-Post Stories Gain+Glory",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: "React",
      tech2: "css",
      tech3: "JavaScript",
      tech4: "html",
    },
    linkVersion: "https://google.com/",
    linkSource: "https://github.com/rebel216/",
  },
  {
    id: 1,
    url: "./asset/cat2.jpeg",
    title: "Multi-Post Stories Gain+Glory",
    description: `Odyssey Lift-off V - Server, and Odyssey Lift-off V - Client, Course Companion App, 
    Odyssey is Apollo's free interactive learning platform. It's the 
    perfect place to start your GraphQL journey, and we'll be adding 
    courses on more advanced features and topics soon.`,
    tecnologies: {
      tech1: "React",
      tech2: "Apollo-client",
      tech3: "Apollo-server",
      tech4: "GraphQL",
    },
    linkVersion: "https://google.com/",
    linkSource: "https://github.com/rebel216",
  },
  {
    id: 2,
    url: "./asset/cat2.jpeg",
    title: "Multi-Post Stories Gain+Glory",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: "React",
      tech2: "Firebase",
      tech3: "JavaScript",
      tech4: "css",
    },
    linkVersion: "https://google.com/",
    linkSource: "https://github.com/rebel216/",
  },
  {
    id: 3,
    url: "./asset//cat1.jpg",
    title: "Multi-Post Stories Gain+Glory",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: "Rubi on rails",
      tech2: "css",
      tech3: "JavaScript",
      tech4: "html",
    },
    linkVersion: "https://www.google.com",
    linkSource: "https://github.com/rebel216/",
  },
  {
    id: 4,
    url: "./asset/cat1.jpg",
    title: "Multi-Post Stories Gain+Glory",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: "Rubi on rails",
      tech2: "css",
      tech3: "JavaScript",
      tech4: "html",
    },
    linkVersion: "https://www.google.com",
    linkSource: "https://github.com/rebel216/",
  },
];
const WorkDetailsMobile = (index) => `
  <article class="card-work-detail">
          <button type="button">
            <span  class="btn-close-detail">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  fill="#67798E"></path>
              </svg>
            </span>
          </button>
          <div>
          <div class="card-image-details">
              <img src=${dataCards[index].url} alt="cat cute">
          </div>
          </div>
          <div class="card-title-mobile">
          <h2>
              ${dataCards[index].title}
          </h2>
          </div>
            <div class="card-links-mobile ">
                  <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./asset/see_live_icon.svg" alt="cat cute">
                  </a>
                  <a href=${dataCards[index].linkSource} class="btn-card-details-mobile">
                  See Sources
                  <img src="./asset/github_white.svg" alt="cat cute">
                  </a>
          </div>
          <div class="worktag-popup">
          <ul class="work-tag-popup">
              <li class="mobile-tag">${dataCards[index].tecnologies.tech1}</li>
              <li class="mobile-tag">${dataCards[index].tecnologies.tech2}</li>
              <li class="mobile-tag">${dataCards[index].tecnologies.tech3}</li>
              <li class="mobile-tag">${dataCards[index].tecnologies.tech4}</li>
          </ul>
          </div>
          <div class="popup-paragraph">
          <p>
            ${dataCards[index].description}
          </p>
          </div>
        <script src="index.js"></script>
  </article>
  
  `;

for (let i = 0; i < allBtnPopups.length; i++) {
  allBtnPopups[i].addEventListener("click", () => {
    const cardWork = document.createElement("div");
    cardWork.innerHTML = WorkDetailsMobile(i);
    document.body.appendChild(cardWork);
    //alert("cliclked");
    const btnCloseDetailsMobile = document.querySelector(".btn-close-detail");
    btnCloseDetailsMobile.addEventListener("click", async () => {
      document.body.removeChild(cardWork);
    });
  });
}
