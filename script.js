/*** Hamburger ***/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu ");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/*** Lukker hamburger når der klikkes på links ***/
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Forside billede - tilføj #forside_container under querySelctor hvis den skal dreje

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector(".stjerne").classList.add("drej");
  document.querySelector(".stjerne1").classList.add("drej");
}
