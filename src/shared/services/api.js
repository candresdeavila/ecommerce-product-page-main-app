// src/shared/services/api.js
const BASE = 'https://api.escuelajs.co/api/v1';

export async function getCategories() {
  try {
    const res = await fetch(`${BASE}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return await res.json(); // array de {id, name, image}
  } catch (err) {
    console.error('getCategories:', err);
    return [];
  }
}

export async function getProducts({ categoryId = null, limit = 0 } = {}) {
  try {
    let url = `${BASE}/products`;
    const params = [];
    if (categoryId) params.push(`categoryId=${encodeURIComponent(categoryId)}`);
    if (limit > 0) params.push(`limit=${limit}`);
    if (params.length) url += `?${params.join('&')}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  } catch (err) {
    console.error('getProducts:', err);
    return [];
  }
}

