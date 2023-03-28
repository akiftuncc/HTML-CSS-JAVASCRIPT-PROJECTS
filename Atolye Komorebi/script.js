// FIXING FLEXBOX GAP PROPERTY MISSING IN SOME SAFARI VERSIONS
//******************************************************
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/////////////////////////// NAVBAR İÇİN
const sectionHeroEl = document.querySelector(".nav-background-image-div");
const navbarSticky = document.querySelector(".nav-navbar");
const linkColor = document.querySelectorAll(".color-for-nav-links");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      navbarSticky.classList.add("sticky");
      linkColor.forEach((element) => {
        element.style.color = "#444";
      });
    }

    if (ent.isIntersecting) {
      navbarSticky.classList.remove("sticky");
      linkColor.forEach((element) => {
        element.style.color = "#fff";
      });
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
/////////////////////////////////////////////////

const urunler = document.querySelector(".urunler-link");

urunler.addEventListener("mouseenter", () => {});
//////////////////////////////////////////////////

//  icon
const iletisim_div = document.querySelector(".body-sticky-div");
const iletisim_icon = document.querySelector(
  ".body-sticky-right-bottom ion-icon"
);
iletisim_icon.addEventListener("click", function () {
  if (iletisim_icon.name === "chatbox-outline") {
    iletisim_icon.setAttribute("name", "close-outline");
    iletisim_div.classList.remove("display-none");
  } else {
    iletisim_icon.setAttribute("name", "chatbox-outline");
    iletisim_div.classList.add("display-none");
  }
});

const iletisimKapatma = document.querySelector(".iletisim-kapatma-iconu");

iletisimKapatma.addEventListener("click", function () {
  iletisim_icon.setAttribute("name", "chatbox-outline");
  iletisim_div.classList.add("display-none");
});

const iletisimNav = document.querySelector(".color-for-nav-links-iletisim");
iletisimNav.addEventListener("click", function () {
  iletisim_div.classList.toggle("display-none");
});
//////////////////////////////////////////////////////

//URUNLER HOVER
const hoveredElement = document.querySelector(".urunler-relative");
const urunlerNav = document.querySelector(".urunler-clicked");

hoveredElement.addEventListener("mouseover", function () {
  urunlerNav.classList.remove("display-none");
});

hoveredElement.addEventListener("mouseout", function () {
  urunlerNav.classList.add("display-none");
});

//////////////////////////////////////////////////
