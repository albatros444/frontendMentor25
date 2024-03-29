let featuresLink = document.querySelector(".navLinks__left__Features");
let featuresDD = document.querySelector(".featuresDD");
let companyLink = document.querySelector(".navLinks__left__Company");
let companyDD = document.querySelector(".companyDD");
let featuresArrow = document.querySelector(".featuresArrow");
let companyArrow = document.querySelector(".companyArrow");
let humburgerButton = document.querySelector(".humburgerButton");

featuresLink.addEventListener("click", (e) => {
  featuresDD.classList.toggle("visible");
  companyDD.classList.remove("visible");
  featuresArrow.classList.toggle("open");
  const hideOnSideClick = (e) => {
    if (
      e.composedPath().some((elem) => elem.id === "navLinks__left__Features")
    ) {
      return;
    } else {
      featuresDD.classList.remove("visible");
      document.body.removeEventListener("click", hideOnSideClick);
      featuresArrow.classList.remove("open");
    }
  };
  document.body.addEventListener("click", hideOnSideClick);
});
featuresDD.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});
/////////////////
companyLink.addEventListener("click", (e) => {
  companyDD.classList.toggle("visible");
  featuresDD.classList.remove("visible");
  companyArrow.classList.toggle("open");
  const hideOnSideClick = (e) => {
    if (
      e.composedPath().some((elem) => elem.id === "navLinks__left__Company")
    ) {
      return;
    } else {
      companyDD.classList.remove("visible");
      document.body.removeEventListener("click", hideOnSideClick);
      companyArrow.classList.remove("open");
    }
  };
  document.body.addEventListener("click", hideOnSideClick);
});
companyDD.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});

///mobile ///////////////////
let overlay = document.querySelector(".overlay");
let slideMenu = document.querySelector(".slideMenu");
let featuresMobile = document.querySelector(".navLinks__Features");
let featuresDDmob = document.querySelector(".featuresDDmob");
let lisInFeatures = document.querySelectorAll(".navLinks ul");

let companyMobile = document.querySelector(".navLinks__Company");
let companyDDmob = document.querySelector(".companyDDmob");

let featuresArrowMob = document.querySelector(".featuresArrowMob");
let companyArrowMob = document.querySelector(".companyArrowMob");

featuresMobile.addEventListener("click", (e) => {
  featuresDDmob.classList.toggle("visible");
  featuresArrowMob.classList.toggle("open");
});
companyMobile.addEventListener("click", (e) => {
  companyDDmob.classList.toggle("visible");
  companyArrowMob.classList.toggle("open");
});

////////humburger menu
humburgerButton.addEventListener("click", () => {
  overlay.classList.toggle("overlayToggle");
  humburgerButton.classList.toggle("open");
  slideMenu.classList.toggle("slideMenuOpen");
});

lisInFeatures.forEach((ul) => {
  ul.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });
});
