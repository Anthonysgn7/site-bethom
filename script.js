const burger = document.getElementById("burger");
const menu = document.querySelector("header nav");

burger.addEventListener("click", function () {
  menu.classList.toggle("ouvert");
});
const liens = document.querySelectorAll("header nav a");

liens.forEach(function (lien) {
  lien.addEventListener("click", function () {
    menu.classList.remove("ouvert");
  });
});