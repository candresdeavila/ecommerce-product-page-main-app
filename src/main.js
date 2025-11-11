import './styles/styles.css';
import { createHeader } from "./shared/modules/header/header.js";
import { createCarrousel } from "./shared/modules/carrousel/carrousel.js";
import { createProductInfo } from "./shared/modules/productInfo/productInfo.js";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app'); // contenedor principal

  // Header
  const header = createHeader();
  root.prepend(header); 

  // Sección principal con carrousel + info
  const mainSection = document.createElement('main');
  mainSection.className = `
    mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start 
    gap-10 md:gap-12 md:py-14 px-6 justify-between
  `;

  // Crear módulos
  const carrousel = createCarrousel();
  const productInfo = createProductInfo(); 

  // Agregar módulos al main
  mainSection.append(carrousel, productInfo);
  root.append(mainSection);
});
