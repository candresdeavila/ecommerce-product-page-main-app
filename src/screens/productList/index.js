// screens/productList/index.js
import { createProductListScreen } from "./productList.js";

export async function renderProductList(root) {
  const screen = await createProductListScreen();
  root.append(screen);
}
