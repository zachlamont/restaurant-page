export default function displayContact() {
  const mainContainer = document.getElementById("content");
  // Create elements
  const backgroundImage = document.createElement("div");
  backgroundImage.classList.add("background-image");

  //Create Header
  const header = document.createElement("header");
  const home = document.createElement("div");
  home.classList.add("home");
  const homeLink = document.createElement("a");
  homeLink.href = "./index.html";
  homeLink.textContent = "HOME";
  home.appendChild(homeLink);
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const menuButton = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.id = "menu-button";
  menuLink.href = "./menu.html";
  menuLink.textContent = "MENU";
  menuButton.appendChild(menuLink);
  const aboutButton = document.createElement("li");
  const aboutLink = document.createElement("a");
  aboutLink.id = "menu-button";
  aboutLink.href = "./about.html";
  aboutLink.textContent = "ABOUT";
  aboutButton.appendChild(aboutLink);
  const contactButton = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.id = "menu-button";
  contactLink.href = "./contact.html";
  contactLink.textContent = "CONTACT";
  contactButton.appendChild(contactLink);
  ul.appendChild(menuButton);
  ul.appendChild(aboutButton);
  ul.appendChild(contactButton);
  nav.appendChild(ul);
  header.appendChild(home);
  header.appendChild(nav);

  //Create Main
  const main = document.createElement("main");
  main.id = "contact-scroll-container";
  const menuLogo = document.createElement("div");
  menuLogo.classList.add("menu-logo");
  const cafe = document.createElement("div");
  cafe.classList.add("cafe");
  cafe.textContent = "Café";
  const fofinhoRed = document.createElement("div");
  fofinhoRed.classList.add("fofinho-red");
  fofinhoRed.textContent = "Fofinho";
  menuLogo.appendChild(cafe);
  menuLogo.appendChild(fofinhoRed);
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";
  const p1 = document.createElement("p");
  p1.textContent =
    "We would love to hear from you! If you have any questions or comments about our cafe or menu, please feel free to reach out to us using the form below or by giving us a call.";
  const p2 = document.createElement("p");
  p2.textContent = "Café Fofinho";
  const p3 = document.createElement("p");
  p3.textContent = "1234 Seaside Avenue";
  const p4 = document.createElement("p");
  p4.textContent = "Brazil, SA 12345";
  const p5 = document.createElement("p");
  p5.textContent = "Phone: (555) 555-5555";
  const p6 = document.createElement("p");
  p6.textContent = "Email: braziliancafe@email.com";
  menuContainer.append(h2, p1, p2, p3, p4, p5, p6);
  main.append(menuLogo);
  main.append(menuContainer);

  // Create footer
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.innerHTML = "Developed with ♡ by Zach Lamont";
  footer.appendChild(footerText);

  // Append sections to body
  mainContainer.appendChild(backgroundImage);
  mainContainer.appendChild(header);
  mainContainer.appendChild(main);
  mainContainer.appendChild(footer);
}
