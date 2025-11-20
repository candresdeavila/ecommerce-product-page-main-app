// src/shared/modules/header/header.js

// NO usamos getCategories() porque la API devuelve categorías basura
// Import innecesario eliminado
// import { getCategories } from "../../services/api.js"; 

// Mapa de categorías fijas con sus IDs reales en la API
const CATEGORY_MAP = {
  all: null,
  shoes: 4,
  electronics: 2,
  clothes: 1,
  miscellaneous: 5,
  furniture: 3,
};

export function createHeader() {
  const header = document.createElement("header");
  header.className = `
    flex items-center justify-between border-b border-gray-200 
    px-6 md:px-0 py-4 md:py-6 max-w-6xl mx-auto
  `;

  /* ------------------------------------------------------ */
  /*  IZQUIERDA: BOTÓN + LOGO + NAV DESKTOP                */
  /* ------------------------------------------------------ */
  const leftContainer = document.createElement("div");
  leftContainer.className = "flex items-center gap-4";

  const menuButton = document.createElement("button");
  menuButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  `;
  menuButton.className = "md:hidden";

  const logo = document.createElement("img");
  logo.src = "./logo.svg";
  logo.alt = "Sneakers logo";
  logo.className = "h-5 md:h-6 cursor-pointer";

  const nav = document.createElement("nav");
  nav.className = "hidden md:flex gap-10 text-gray-500 font-medium pl-20";

  leftContainer.append(menuButton, logo, nav);

  /* ------------------------------------------------------ */
  /*  DERECHA: CARRITO + AVATAR                            */
  /* ------------------------------------------------------ */
  const rightContainer = document.createElement("div");
  rightContainer.className = "flex items-center gap-6";

  const cart = document.createElement("img");
  cart.src = "./icon-cart.svg";
  cart.alt = "Cart";
  cart.className = "w-6 cursor-pointer hover:opacity-70 transition";

  const avatar = document.createElement("img");
  avatar.src = "./image-avatar.png";
  avatar.alt = "User avatar";
  avatar.className =
    "w-8 border-2 border-transparent hover:border-orange-500 rounded-full cursor-pointer transition";

  rightContainer.append(cart, avatar);

  header.append(leftContainer, rightContainer);

  /* ------------------------------------------------------ */
  /*  MENÚ MOBILE                                           */
  /* ------------------------------------------------------ */

  const overlay = document.createElement("div");
  overlay.className = `fixed inset-0 bg-black/60 hidden z-40`;

  const sideMenu = document.createElement("aside");
  sideMenu.className = `
    fixed top-0 left-0 h-full w-64 bg-white z-50 transform -translate-x-full 
    transition-transform duration-300 flex flex-col p-6 pt-8
  `;

  const closeButton = document.createElement("button");
  closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;
  closeButton.className = "mb-8";

  const sideNav = document.createElement("nav");
  sideNav.className = "flex flex-col gap-6 font-bold text-lg";

  sideMenu.append(closeButton, sideNav);
  document.body.append(overlay, sideMenu);

  /* ------------------------------------------------------ */
  /*  EVENTOS DEL MENÚ MOBILE                              */
  /* ------------------------------------------------------ */

  menuButton.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    sideMenu.classList.remove("-translate-x-full");
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.add("hidden");
    sideMenu.classList.add("-translate-x-full");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    sideMenu.classList.add("-translate-x-full");
  });

  /* ------------------------------------------------------ */
  /*  RENDERIZAR CATEGORÍAS (fijas, NO de la API)          */
  /* ------------------------------------------------------ */

  renderCategories(nav, sideNav);

  return header;
}

/* ========================================================= */
/*  MOSTRAR LINKS DEL MENÚ (desktop + mobile)               */
/* ========================================================= */

function renderCategories(navDesktop, navMobile) {
  const categories = [
    { key: "all", label: "All" },
    { key: "shoes", label: "Shoes" },
    { key: "electronics", label: "Electronics" },
    { key: "clothes", label: "Clothes" },
    { key: "miscellaneous", label: "Miscellaneous" },
    { key: "furniture", label: "Furniture" },
  ];

  categories.forEach((cat) => {
    addCategoryLink(navDesktop, cat);
    addCategoryLink(navMobile, cat);
  });
}

/* ========================================================= */
/*   FUNCIÓN: CREA EL LINK Y EMITE EVENTO                    */
/* ========================================================= */

function addCategoryLink(container, { key, label }) {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = label;
  link.className = `hover:text-black transition-colors duration-200`;

  link.addEventListener("click", (e) => {
    e.preventDefault();

    const categoryId = CATEGORY_MAP[key];

    window.dispatchEvent(
      new CustomEvent("filterProducts", {
        detail: { categoryId },
      })
    );
  });

  container.appendChild(link);
}
