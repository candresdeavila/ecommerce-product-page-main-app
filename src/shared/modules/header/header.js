// shared/modules/header/header.js
export function createHeader() {
  const header = document.createElement('header');
  header.className = `
    mx-auto max-w-6xl border-b border-gray-200
    flex items-center justify-between px-6 py-4
  `;

  header.innerHTML = `
    <div class="flex items-center gap-10">
      <!-- Logo -->
      <img src="./public/logo.svg" alt="Sneakers logo" class="h-5">

      <!-- Navigation -->
      <nav>
        <ul class="hidden md:flex gap-6 text-gray-500 text-sm">
          <li><a href="#" class="hover:text-black transition">Collections</a></li>
          <li><a href="#" class="hover:text-black transition">Men</a></li>
          <li><a href="#" class="hover:text-black transition">Women</a></li>
          <li><a href="#" class="hover:text-black transition">About</a></li>
          <li><a href="#" class="hover:text-black transition">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="flex items-center gap-6">
      <!-- Cart icon -->
      <button class="relative">
        <img src="./public/icon-cart.svg" alt="Cart icon" class="w-5 h-5">
        <!-- Example of cart counter -->
        <!-- <span class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full px-1">3</span> -->
      </button>

      <!-- Avatar -->
      <img
        src="./public/image-avatar.png"
        alt="User avatar"
        class="w-10 h-10 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer transition"
      >
    </div>
  `;

  return header;
}
