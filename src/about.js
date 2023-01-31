export default function displayAbout() {
  const mainContainer = document.getElementById("content");

  // Create background-image div
  const backgroundImage = document.createElement("div");
  backgroundImage.classList.add("background-image");

  // Create header element
  const header = document.createElement("header");

  // Create home div and link
  const home = document.createElement("div");
  home.classList.add("home");
  const homeLink = document.createElement("a");
  homeLink.href = "./index.html";
  homeLink.textContent = "HOME";
  home.appendChild(homeLink);

  // Create nav element and list
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  // Create menu link
  const menuLink = document.createElement("a");
  menuLink.id = "menu-button";
  menuLink.href = "./menu.html";
  menuLink.textContent = "MENU";
  const menuListItem = document.createElement("li");
  menuListItem.appendChild(menuLink);

  // Create about link
  const aboutLink = document.createElement("a");
  aboutLink.id = "menu-button";
  aboutLink.href = "./about.html";
  aboutLink.textContent = "ABOUT";
  const aboutListItem = document.createElement("li");
  aboutListItem.appendChild(aboutLink);

  // Create contact link
  const contactLink = document.createElement("a");
  contactLink.id = "menu-button";
  contactLink.href = "./contact.html";
  contactLink.textContent = "CONTACT";
  const contactListItem = document.createElement("li");
  contactListItem.appendChild(contactLink);

  // Append list items to list
  navList.appendChild(menuListItem);
  navList.appendChild(aboutListItem);
  navList.appendChild(contactListItem);

  // Append list to nav
  nav.appendChild(navList);

  // Append home and nav to header
  header.appendChild(home);
  header.appendChild(nav);

  // Create main element and menu-scroll-container id
  const main = document.createElement("main");
  main.id = "menu-scroll-container";

  // Create menu-logo div and cafe and fofinho-red divs
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
  main.appendChild(menuLogo);

  // Create menu-container div and about-paragraph p
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // Create about paragraph
  const aboutParagraph = document.createElement("p");

  aboutParagraph.setAttribute("class", "about-paragraph");
  aboutParagraph.innerHTML = `Our Brazilian-themed seaside cafe offers a unique dining experience
                              with a menu featuring authentic dishes inspired by the flavors of
                              Brazil. Our chefs use only the freshest ingredients to create
                              delectable dishes, such as the traditional Feijoada stew, Pão de
                              Queijo cheese bread, Churrasco barbecue, and refreshing Açai Bowl.
                              <br /><br />
                              Located on the beach, our cafe provides the perfect atmosphere for a
                              relaxing meal, with stunning views of the ocean and a warm,
                              welcoming ambiance. Whether you're a local or a tourist, you're sure
                              to enjoy the exotic flavors and friendly service at our cafe.
                              <br /><br />
                              Come visit us and taste the magic of Brazil for yourself!`;

  // Append elements to main container
  menuContainer.appendChild(aboutParagraph);
  main.appendChild(menuContainer);

  // Create footer
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.innerHTML = "Developed with ♡ by Zach Lamont";
  footer.appendChild(footerText);

  // Append main container and footer to body
  mainContainer.appendChild(backgroundImage);
  mainContainer.appendChild(header);
  mainContainer.appendChild(main);
  mainContainer.appendChild(footer);
}
