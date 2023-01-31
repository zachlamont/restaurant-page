export default function displayMenu() {
  // Get the main container
  const mainContainer = document.getElementById("content");

  // Create background-image div
  const backgroundImage = document.createElement("div");
  backgroundImage.classList.add("background-image");

  // Create header
  const header = document.createElement("header");

  // Create home div and link
  const home = document.createElement("div");
  home.classList.add("home");
  const homeLink = document.createElement("a");
  homeLink.setAttribute("href", "./index.html");
  homeLink.innerText = "HOME";
  home.appendChild(homeLink);

  // Create navigation
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  const menuItem = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.setAttribute("id", "menu-button");
  menuLink.setAttribute("href", "./menu.html");
  menuLink.innerText = "MENU";
  menuItem.appendChild(menuLink);
  navList.appendChild(menuItem);
  const aboutItem = document.createElement("li");
  const aboutLink = document.createElement("a");
  aboutLink.setAttribute("id", "menu-button");
  aboutLink.setAttribute("href", "./about.html");
  aboutLink.innerText = "ABOUT";
  aboutItem.appendChild(aboutLink);
  navList.appendChild(aboutItem);
  const contactItem = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.setAttribute("id", "menu-button");
  contactLink.setAttribute("href", "./contact.html");
  contactLink.innerText = "CONTACT";
  contactItem.appendChild(contactLink);
  navList.appendChild(contactItem);
  nav.appendChild(navList);

  header.appendChild(home);
  header.appendChild(nav);

  // Create main
  const main = document.createElement("main");
  main.setAttribute("id", "menu-scroll-container");

  // Create menu logo
  const menuLogo = document.createElement("div");
  menuLogo.classList.add("menu-logo");
  const cafe = document.createElement("div");
  cafe.classList.add("cafe");
  cafe.innerText = "Café";
  const fofinho = document.createElement("div");
  fofinho.classList.add("fofinho-red");
  fofinho.innerText = "Fofinho";
  menuLogo.appendChild(cafe);
  menuLogo.appendChild(fofinho);

  main.appendChild(menuLogo);

  // Create menu container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  main.appendChild(menuContainer);

  //Create menu items
  const menu = [
    {
      title: "Feijoada",
      snippet:
        "A traditional Brazilian stew made with black beans and various cuts of meat.",
      price: "$15",
    },
    {
      title: "Pão de Queijo",
      snippet:
        "Cheese bread made with tapioca flour, originating from Minas Gerais, Brazil.",
      price: "$5",
    },
    {
      title: "Churrasco",
      snippet:
        "A Brazilian-style barbecue with various grilled meats served with sides.",
      price: "$20",
    },
    {
      title: "Açai Bowl",
      snippet:
        "A Brazilian dish made with a blend of açai berries, granola and fresh fruit.",
      price: "$10",
    },
  ];

  menu.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const title = document.createElement("h2");
    title.classList.add("menu-item-title");
    title.textContent = item.title;

    const snippet = document.createElement("p");
    snippet.classList.add("menu-item-snippet");
    snippet.textContent = item.snippet;

    const price = document.createElement("h2");
    price.classList.add("menu-item-price");
    price.textContent = item.price;

    const border = document.createElement("hr");
    border.classList.add("menu-item-border");

    menuItem.appendChild(title);
    menuItem.appendChild(snippet);
    menuItem.appendChild(price);
    menuItem.appendChild(border);

    menuContainer.appendChild(menuItem);
  });

  const footer = document.createElement("footer");
  const p = document.createElement("p");
  p.textContent = "Developed with ♡ by Zach Lamont";
  footer.appendChild(p);

  mainContainer.appendChild(backgroundImage);
  mainContainer.appendChild(header);
  mainContainer.appendChild(main);
  mainContainer.appendChild(footer);
}
