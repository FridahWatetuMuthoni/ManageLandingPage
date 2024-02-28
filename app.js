const menu = document.getElementById("menu");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", handleOpen);
close.addEventListener("click", CloseMenu);
menu.addEventListener("click", CloseMenu);

function handleOpen() {
  open.style.display = "none";
  close.style.display = "block";
  menu.style.left = "0";
}

function CloseMenu() {
  close.style.display = "none";
  open.style.display = "inline-block";
  menu.style.left = "-100000px";
}
