import './styles/styles.css';
import { createHeader } from "./shared/modules/header/header.js";
import { createProductListScreen } from "./screens/productList/productList.js";

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#app'); // contenedor principal

  // Header
  const header = createHeader();
  root.prepend(header); 

  // Renderizar la pantalla principal (lista de productos)
  const screen = await createProductListScreen();
  root.append(screen);

});
