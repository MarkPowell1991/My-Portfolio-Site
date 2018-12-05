// select DOM items
const menuBtn = document.querySelector(".menu-btn"); //gets the menu button
const menu = document.querySelector(".menu"); //gets the menu itself
const menuNav = document.querySelector(".menu-nav"); //gets the nav menu panel
const menuBranding = document.querySelector(".menu-branding"); // gets the branding panel
const navItems = document.querySelectorAll(".nav-item"); //gets all the nav items

//Set initial State of Menue

let showMenu = false; //the menu is closed by default

menuBtn.addEventListener("click", toggleMenu); //run togglemenu method when menu button is clicked

function toggleMenu() {
  if (!showMenu) {
    //if the menu was closed, flag variables with "show"
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show")); //flags each item with "show"

    //set menu state
    showMenu = true; //flag the menu as open
  } else {
    //if the menu was open as the button was clicked, do the oppsoite
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}
