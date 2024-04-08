const body = document.querySelector("body");
const toggleBtn = document.getElementById("navToggle");
const navList = document.getElementById("navigation");

function clickToggleBtn() {
  if (navList.classList.contains("is-open")) {
    body.classList.remove("is-open");
    navList.classList.remove("is-open");
  } else {
    body.classList.add("is-open");
    navList.classList.add("is-open");
  }
}

function resizeBrowserWidth() {
  let w = window.innerWidth;
  if (w >= 768) {
    body.classList.remove("is-open");
    navList.classList.remove("is-open");
  }
}

toggleBtn.addEventListener("click", clickToggleBtn);
window.addEventListener("resize", resizeBrowserWidth);
resizeBrowserWidth();
