let menuHidden = true;

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  $(".menu").animate({ left: menuHidden ? 0 : "-80%" }, 500);
  menuHidden = !menuHidden;
});
