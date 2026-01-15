let menuHidden = true;

document.querySelector(".btn-menu").addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  document.querySelector(".menu").style.left = menuHidden ? 0 : "-80%";
  menuHidden = !menuHidden;
}
