let featuresLink = document.querySelector(".navLinks__left__Features");
let featuresDD = document.querySelector(".featuresDD");
let companyLink = document.querySelector(".navLinks__left__Company");
let companyDD = document.querySelector(".companyDD");
let featuresArrow = document.querySelector(".featuresArrow");
let companyArrow = document.querySelector(".companyArrow");

featuresLink.addEventListener("click", (e) => {
  featuresDD.classList.toggle("visible");
  featuresArrow.classList.toggle("open");
  const hideOnSideClick = (e) => {
    // console.log("click");
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
