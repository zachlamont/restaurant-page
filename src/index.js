console.log("Zach's Restaurant page");

function displayHome() {
  const content = document.getElementById("content");

  const backgroundImage = document.createElement("div");
  backgroundImage.classList.add("background-image");
  content.appendChild(backgroundImage);

  //Create Header
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const menuItem = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.href = "./menu.html";
  menuLink.textContent = "MENU";
  menuItem.appendChild(menuLink);
  ul.appendChild(menuItem);
  const aboutItem = document.createElement("li");
  const aboutLink = document.createElement("a");
  aboutLink.href = "./about.html";
  aboutLink.textContent = "ABOUT";
  aboutItem.appendChild(aboutLink);
  ul.appendChild(aboutItem);
  const contactItem = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.href = "./contact.html";
  contactLink.textContent = "CONTACT";
  contactItem.appendChild(contactLink);
  ul.appendChild(contactItem);
  nav.appendChild(ul);
  header.appendChild(nav);
  content.appendChild(header);

  //Create main
  const main = document.createElement("main");
  main.id = "scroll-container";
  const logo = document.createElement("div");
  logo.classList.add("logo");
  const cafe = document.createElement("div");
  cafe.classList.add("cafe");
  cafe.textContent = "Café";
  logo.appendChild(cafe);
  const fofinho = document.createElement("div");
  fofinho.classList.add("fofinho");
  fofinho.textContent = "Fofinho";
  logo.appendChild(fofinho);
  main.appendChild(logo);
  content.appendChild(main);

  const button = document.createElement("a");
  button.classList.add("button");
  button.setAttribute("href", "./menu.html");
  button.textContent = "SEE THE MENU";
  main.appendChild(button);

  //Create Footer
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  p.textContent = "Developed with ♡ by Zach Lamont";
  footer.appendChild(p);
  content.appendChild(footer);
}

import displayMenu from "./menu.js";
import displayAbout from "./about.js";
import displayContact from "./contact.js";

window.addEventListener("load", function () {
  switch (document.title) {
    case "Menu":
      displayMenu();
      break;
    case "About":
      displayAbout();
      break;
    case "Contact":
      displayContact();
      break;
    default:
      displayHome();
  }
});



