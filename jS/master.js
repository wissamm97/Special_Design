let mainColor = localStorage.getItem("color_option");
let backGroundOption = true;
let theInterval;
// LocalStorag For backGroundOption
let backgroundImage = localStorage.getItem("random_option");
if (backgroundImage !== null) {
  if (backgroundImage === "true") {
    backGroundOption = true;
  } else {
    backGroundOption = false;
  }
  document
    .querySelectorAll(".random-back span")
    .forEach((span) => span.classList.remove("active"));
  if (backgroundImage === "true") {
    document.querySelector(".random-back .yes").classList.add("active");
  } else {
    document.querySelector(".random-back .no").classList.add("active");
  }
}
// LocalStorag
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".colors-list li").forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}
let myBox = document.querySelector(".settinges-box");
let icon = document.querySelector(".icon");
icon.onclick = function () {
  this.classList.toggle("fa-spin");
  myBox.classList.toggle("open");
};
document.onkeyup = function (e) {
  if (e.key == "Escape") {
    icon.classList.toggle("fa-spin");
    myBox.classList.remove("open");
  }
};
// Switch RandomBackGround
let randomBackEl = document.querySelectorAll(".random-back span");
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);
    if (e.target.dataset.back == "yes") {
      backGroundOption = true;
      randomizImag();
      localStorage.setItem("random_option", true);
    } else {
      backGroundOption = false;
      clearInterval(theInterval);
      localStorage.setItem("random_option", false);
    }
  });
});
// End Switch RandomBackGround
// Switch Color
const colorslis = document.querySelectorAll(
  ".settinges-box .option-Box .colors-list li"
);
colorslis.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color_option", e.target.dataset.color);
    handleActive(e);
  });
});
// End Switch Color
// Start landingPage
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// End landingPage
function randomizImag() {
  theInterval = setInterval(() => {
    let numberRandom = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage =
      'url("./images/' + imgsArray[numberRandom] + '")';
  }, 10000);
}

// Scrolling
// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// Start Gallery
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Created Section Overlay
    let overlay = document.createElement("div");
    // Set ClassName For Overlay Section
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    let boxOverlayCh = document.createElement("div");
    boxOverlayCh.className = "popup-box";
    if (img.alt !== null) {
      let title = document.createElement("h3");
      title.appendChild(document.createTextNode(img.alt));
      boxOverlayCh.appendChild(title);
    }
    let imgbox = document.createElement("img");
    imgbox.src = img.src;
    boxOverlayCh.appendChild(imgbox);
    let buttonClose = document.createElement("span");
    buttonClose.className = "close-button";
    buttonClose.textContent = "X";
    boxOverlayCh.appendChild(buttonClose);
    overlay.appendChild(boxOverlayCh);
  });
});
// Close Box

document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    document.querySelector(".popup-overlay").remove();
  }
});

//Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bulltes");
const allLinks = document.querySelectorAll(".link a");

function scrollToSome(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSome(allBullets);
scrollToSome(allLinks);

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletContainer = document.querySelector(".nav-bullets");
let bulletLocalStorage = localStorage.getItem("bullet_option");

if (bulletLocalStorage !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("actvie");
  });
  if (bulletLocalStorage === "block") {
    bulletContainer.style.display = bulletLocalStorage;
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletContainer.style.display = bulletLocalStorage;
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.dataset.display === "block") {
      bulletContainer.style.display = e.target.dataset.display;
      localStorage.setItem("bullet_option", e.target.dataset.display);
    } else {
      bulletContainer.style.display = e.target.dataset.display;
      localStorage.setItem("bullet_option", e.target.dataset.display);
    }
    handleActive(e);
  });
});
//Handle Function
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  ev.target.classList.add("active");
}
// Scrolling To Top
// let myBtn = document.querySelector(".to-top");
// window.onscroll = function () {
//   if (window.scrollY > 1000) {
//     myBtn.style.display = "block";
//     myBtn.onclick = function () {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };
//   } else {
//     myBtn.style.display = "none";
//   }
// };
// Reset Button
document.querySelector(".reset-option").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
// Handl Function
// Start Toggle
let toggleMenu = document.querySelector(".toggle-bars");
let myLinksLis = document.querySelector(".links-container .link");
toggleMenu.onclick = function (e) {
  e.stopPropagation();
  myLinksLis.classList.toggle("open");
  if (myLinksLis.classList.contains("open")) {
    toggleMenu.style.color = window.localStorage.getItem("color_option");
  } else {
    toggleMenu.style.color = "#fff";
  }
};
myLinksLis.onclick = function (e) {
  e.stopPropagation();
};
document.addEventListener("click", (e) => {
  if (e.target !== toggleMenu && e.target !== myLinksLis) {
    if (myLinksLis.classList.contains("open")) {
      myLinksLis.classList.remove("open");
      toggleMenu.style.color = "#fff";
    }
  }
});

// End Toggle
