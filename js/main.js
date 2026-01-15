let menuHidden = true;

document.querySelector(".btn-menu").addEventListener("click", () => {
  $(".menu").animate({ left: menuHidden ? 0 : "-80%" }, 500);
  menuHidden = !menuHidden;
});
