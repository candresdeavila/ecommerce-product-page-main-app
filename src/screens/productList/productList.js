import { getProducts } from '../../shared/services/api.js';

const containerClass = 'max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
let rootSection = null;

export async function createProductListScreen() {
  rootSection = document.createElement('section');
  rootSection.className = containerClass;

  await loadAndRenderProducts({ categoryId: null });

  window.addEventListener('filterProducts', async (e) => {
    const { categoryId } = e.detail;
    console.log('Filter event received:', categoryId);
    await loadAndRenderProducts({ categoryId });
  });

  return rootSection;
}

async function loadAndRenderProducts({ categoryId = null } = {}) {
  rootSection.innerHTML = `<div class="col-span-full text-center py-12">Loading products...</div>`;

  console.log('Loading products with categoryId:', categoryId);
  const products = await getProducts({ categoryId, limit: 50 });
  console.log('Products received:', products.length);



  if (!Array.isArray(products) || products.length === 0) {
    rootSection.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">No products found</div>`;
    return;
  }

  rootSection.innerHTML = '';
  const limitedProducts = products.slice(0, 50);
  limitedProducts.forEach(product => {
    const card = productCard(product);
    rootSection.appendChild(card);
  });
}

function productCard(product) {
  let imageUrl = Array.isArray(product.images) ? product.images[0] : '';

  // 🩹 FIX damaged images
  if (typeof imageUrl === 'string') {
    imageUrl = imageUrl.replace(/^"+|"+$/g, '');
  }

  const price = product.price ?? 'N/A';
  const title = product.title || 'Untitled product';

  const card = document.createElement('article');
  card.className = 'cursor-pointer bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition';

  card.innerHTML = `
    <div class="w-full h-48 bg-gray-100 flex items-center justify-center">
      ${
        imageUrl
          ? `<img src="${imageUrl}" alt="${escapeHtml(title)}" class="w-full h-full object-cover">`
          : `<span class="text-gray-400 text-sm">No image</span>`
      }
    </div>

    <div class="p-4">
      <h2 class="text-lg font-semibold text-gray-800 truncate">${escapeHtml(title)}</h2>
      <p class="text-orange-600 font-bold mt-2">$${price}</p>
    </div>
  `;

  card.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('openProduct', { detail: { id: product.id } }));
  });

  return card;
}

function escapeHtml(str = '') {
  return String(str).replace(/[&<>"']/g, (m) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}
