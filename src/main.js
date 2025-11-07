import './styles/styles.css';
import { createHeader } from "./shared/modules/header/header.js";


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app'); //contenedor principal
  const header = createHeader();
  root.prepend(header); //inicio del body
});
