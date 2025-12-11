import './styles/styles.css';
import { createHeader } from "./shared/modules/header/header.js";
import { createProductListScreen } from "./screens/productList/productList.js";

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#app'); // Main app container

  // Header
  const header = createHeader();
  root.prepend(header); 

  // Product List Screen render
  await renderProductList(root);

});
