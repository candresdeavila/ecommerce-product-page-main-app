// src/screens/productList/productList.js
import { getProducts } from '../../shared/services/api.js';

const containerClass = 'max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
let rootSection = null;

export async function createProductListScreen() {
  rootSection = document.createElement('section');
  rootSection.className = containerClass;

  // inicialmente mostrar todo
  await loadAndRenderProducts({ categoryId: null });

  // escuchar filtros globales
  window.addEventListener('filterProducts', async (e) => {
    const { categoryId } = e.detail;
    await loadAndRenderProducts({ categoryId });
  });

  return rootSection;
}

async function loadAndRenderProducts({ categoryId = null } = {}) {
  // loading UI
  rootSection.innerHTML = `<div class="col-span-full text-center py-12">Loading...</div>`;

  const products = await getProducts({ categoryId });
  console.log("Productos obtenidos de API con categoryId =", categoryId, products);

  if (!products || products.length === 0) {
    rootSection.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">No products found</div>`;
    return;
  }

  // build grid
  rootSection.innerHTML = '';
  products.forEach(product => {
    const card = productCard(product);
    rootSection.appendChild(card);
  });
}

function productCard(product) {
  const imageUrl = (product.images && product.images.length) ? product.images[0] : '';
  const price = product.price ?? '';
  const title = product.title ?? '';

  const card = document.createElement('article');
  card.className = 'cursor-pointer bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition';

  card.innerHTML = `
    <div class="w-full h-48 bg-gray-100">
      <img src="${imageUrl}" alt="${escapeHtml(title)}" class="w-full h-full object-cover">
    </div>
    <div class="p-4">
      <h2 class="text-lg font-semibold text-gray-800">${escapeHtml(title)}</h2>
      <p class="text-orange-600 font-bold mt-2">$${price}</p>
    </div>
  `;

  // click a detalle (opcional)
  card.addEventListener('click', () => {
    // aquí puedes navegar a pantalla detail o emitir evento
    window.dispatchEvent(new CustomEvent('openProduct', { detail: { id: product.id } }));
  });

  return card;
}

function escapeHtml(str = '') {
  return String(str).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
