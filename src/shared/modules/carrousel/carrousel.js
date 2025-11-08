// shared/modules/carrousel/carrousel.js
export function createCarrousel() {
  const section = document.createElement('section');
  section.className = `
    flex flex-col gap-4 md:w-1/2
  `;

  section.innerHTML = `
    <!-- Imagen principal -->
    <div class="relative">
      <img
        src="./image-product-1.jpg"
        alt="Main product image"
        class="rounded-2xl cursor-pointer"
      >
      <!-- Botones de navegación (solo visibles en mobile) -->
      <button
        class="md:hidden absolute top-1/2 left-3 -translate-y-1/2 bg-white p-3 rounded-full shadow"
      >
        <img src="./icon-previous.svg" alt="Previous" class="w-3 h-3">
      </button>
      <button
        class="md:hidden absolute top-1/2 right-3 -translate-y-1/2 bg-white p-3 rounded-full shadow"
      >
        <img src="./icon-next.svg" alt="Next" class="w-3 h-3">
      </button>
    </div>

    <!-- Miniaturas (solo desktop) -->
    <div class="hidden md:flex justify-between gap-4">
      <img
        src="./image-product-1-thumbnail.jpg"
        alt="Thumbnail 1"
        class="w-20 rounded-xl cursor-pointer border-2 border-transparent hover:border-orange-500 hover:opacity-70 transition"
      >
      <img
        src="./image-product-2-thumbnail.jpg"
        alt="Thumbnail 2"
        class="w-20 rounded-xl cursor-pointer border-2 border-transparent hover:border-orange-500 hover:opacity-70 transition"
      >
      <img
        src="./image-product-3-thumbnail.jpg"
        alt="Thumbnail 3"
        class="w-20 rounded-xl cursor-pointer border-2 border-transparent hover:border-orange-500 hover:opacity-70 transition"
      >
      <img
        src="./image-product-4-thumbnail.jpg"
        alt="Thumbnail 4"
        class="w-20 rounded-xl cursor-pointer border-2 border-transparent hover:border-orange-500 hover:opacity-70 transition"
      >
    </div>
  `;

  return section;
}
