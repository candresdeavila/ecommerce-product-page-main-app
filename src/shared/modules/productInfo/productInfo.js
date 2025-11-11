// shared/modules/productInfo/productInfo.js
export function createProductInfo() {
  const section = document.createElement('section');
  section.className = `
      w-full md:w-[40%] flex flex-col justify-center 
      px-6 md:px-0 space-y-6 md:space-y-8
  `;

  section.innerHTML = `
    <!-- Marca -->
    <span class="uppercase text-orange-500 font-semibold tracking-widest text-sm mb-2">
      Sneaker Company
    </span>

    <!-- Título -->
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Fall Limited Edition Sneakers
    </h1>

    <!-- Descripción -->
    <p class="text-gray-600 text-base mb-6">
      These low-profile sneakers are your perfect casual wear companion. 
      Featuring a durable rubber outer sole, they'll withstand everything 
      the weather can offer.
    </p>

    <!-- Precios -->
    <div class="flex items-center justify-between md:justify-start md:gap-4 mb-6">
      <div class="flex items-center gap-3">
        <span class="text-3xl font-bold text-gray-900">$125.00</span>
        <span class="bg-orange-100 text-orange-600 font-semibold px-2 py-1 rounded-md text-sm">50%</span>
      </div>
      <span class="text-gray-400 font-semibold line-through">$250.00</span>
    </div>

    <!-- Selector de cantidad + botón -->
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Cantidad -->
      <div class="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3 md:w-40">
        <button id="minus-btn" class="text-orange-500 text-2xl font-bold hover:opacity-70">-</button>
        <span id="quantity" class="text-gray-900 font-semibold text-lg">0</span>
        <button id="plus-btn" class="text-orange-500 text-2xl font-bold hover:opacity-70">+</button>
      </div>

      <!-- Botón agregar -->
      <button class="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all flex justify-center items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.5 19a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6 6h15l-1.68 7.47a2 2 0 01-1.97 1.53H9.16a2 2 0 01-1.97-1.53L6 6zm-2 0H2V4h2a1 1 0 011 1v1z"/>
        </svg>
        Add to cart
      </button>
    </div>
  `;

  // --- Lógica de botones + y - ---
  const minusBtn = section.querySelector('#minus-btn');
  const plusBtn = section.querySelector('#plus-btn');
  const quantityEl = section.querySelector('#quantity');
  let quantity = 0;

  plusBtn.addEventListener('click', () => {
    quantity++;
    quantityEl.textContent = quantity;
  });

  minusBtn.addEventListener('click', () => {
    if (quantity > 0) quantity--;
    quantityEl.textContent = quantity;
  });

  return section;
}
