const loader = document.querySelector(".loader-wrapper");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    loader.classList.add("loader-wrapper--none")
  }, 800);
});