import './styles/styles.css';
import { createHeader } from "./shared/modules/header/header.js";
import { createCarrousel } from "./shared/modules/carrousel/carrousel.js";


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app'); //contenedor principal
  const header = createHeader();
  root.prepend(header); 
  //inicio del body
  // Sección principal con carrousel + info
  const mainSection = document.createElement('main');
  mainSection.className = `
    mx-auto max-w-6xl flex flex-col md:flex-row gap-16 p-6 md:py-16
  `;

  const carrousel = createCarrousel();
  

  mainSection.append(carrousel);
  root.append(mainSection);
});
