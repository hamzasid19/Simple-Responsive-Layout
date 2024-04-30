const btn = document.querySelector(".nav--toggle");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
