window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home__section").classList.add("active");
  // page loader
  document.querySelector(".page__loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page__loader").style.display = "none";
  }, 600);
});

// Toggle Navbar Start
const navTogger = document.querySelector(".nav__toggler");
navTogger.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}
// Toggle Navbar End

// Active Section
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link__item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    navTogger.classList.add("hide");
    if (e.target.classList.contains("nav__item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }

    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navTogger.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

// Start About Tabs
const tabsContainer = document.querySelector(".about__tabs");
aboutSection = document.querySelector(".about__section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab__item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    console.log("target: ", target);

    aboutSection
      .querySelector(".tab__content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});
// End About Tabs

// Portfolio Item Details Popup Start
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view__project__btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio__popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}
document
  .querySelector(".pp__close")
  .addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp__inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".portfolio__item__thumbnail img").src;

  document.querySelector(".pp__header h3").innerHTML =
    portfolioItem.querySelector(".portfolio__item__title").innerHTML;

  document.querySelector(".pp__body").innerHTML = portfolioItem.querySelector(
    ".portfolio__item__details"
  ).innerHTML;
}
// Portfolio Item Details Popup End
