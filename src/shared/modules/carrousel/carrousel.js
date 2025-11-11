// shared/modules/carrousel/carrousel.js
export function createCarrousel() {
  const section = document.createElement('section');
  section.className = `
    relative w-full md:w-[43%] flex flex-col items-center 
    md:items-start gap-4 md:gap-5
  `;

  // Array de imágenes
  const images = [
    "./image-product-1.jpg",
    "./image-product-2.jpg",
    "./image-product-3.jpg",
    "./image-product-4.jpg"
  ];

  // Estado actual
  let currentIndex = 0;

  // Imagen principal
  const mainImg = document.createElement('img');
  mainImg.src = images[currentIndex];
  mainImg.alt = "Product image";
  mainImg.className = `
  w-screen md:w-full md:max-w-md object-cover 
  h-[300px] md:h-auto
  md:rounded-2xl transition-all duration-300
`;

  // Botones de navegación (solo visibles en mobile)
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = "&#10094;";
  prevBtn.className = `
    absolute left-4 top-1/2 -translate-y-1/2 
    bg-white rounded-full w-10 h-10 flex items-center justify-center 
    text-black font-bold shadow-md md:hidden
  `;

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = "&#10095;";
  nextBtn.className = `
    absolute right-4 top-1/2 -translate-y-1/2 
    bg-white rounded-full w-10 h-10 flex items-center justify-center 
    text-black font-bold shadow-md md:hidden
  `;

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    mainImg.src = images[currentIndex];
  }

  prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  // Contenedor de miniaturas (solo visible en desktop)
  const thumbContainer = document.createElement('div');
  thumbContainer.className = `
    hidden md:flex gap-4
  `;

  images.forEach((src, index) => {
    const thumb = document.createElement('img');
    thumb.src = src.replace('.jpg', '-thumbnail.jpg');
    thumb.alt = `Thumbnail ${index + 1}`;
    thumb.className = `
      w-20 h-20 rounded-xl cursor-pointer hover:opacity-70 border-2
      ${index === 0 ? 'border-orange-500 opacity-60' : 'border-transparent'}
    `;

    thumb.addEventListener('click', () => {
      showImage(index);
      document.querySelectorAll('.thumb').forEach(el => {
        el.classList.remove('border-orange-500', 'opacity-60');
        el.classList.add('border-transparent');
      });
      thumb.classList.add('border-orange-500', 'opacity-60');
    });

    thumb.classList.add('thumb');
    thumbContainer.appendChild(thumb);
  });

  // Lightbox (solo visible en desktop)
  const overlay = document.createElement('div');
  overlay.className = `
    fixed inset-0 bg-black/75 hidden z-50 
    flex items-center justify-center
  `;

  const lightboxContainer = document.createElement('div');
  lightboxContainer.className = `
    relative w-[90%] max-w-lg flex flex-col items-center
  `;

  const lightboxImg = document.createElement('img');
  lightboxImg.src = images[currentIndex];
  lightboxImg.className = `
    rounded-2xl w-full max-h-[80vh] object-contain
  `;

  const prevLightbox = document.createElement('button');
  prevLightbox.innerHTML = "&#10094;";
  prevLightbox.className = `
    absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full
    w-10 h-10 flex items-center justify-center text-black font-bold hover:text-orange-500
  `;

  const nextLightbox = document.createElement('button');
  nextLightbox.innerHTML = "&#10095;";
  nextLightbox.className = `
    absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full
    w-10 h-10 flex items-center justify-center text-black font-bold hover:text-orange-500
  `;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = "&times;";
  closeBtn.className = `
    absolute -top-10 right-0 text-white text-3xl font-bold hover:text-orange-500
  `;

  prevLightbox.addEventListener('click', () => showLightboxImage(currentIndex - 1));
  nextLightbox.addEventListener('click', () => showLightboxImage(currentIndex + 1));
  closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });

  function showLightboxImage(index) {
    currentIndex = (index + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
  }

  // Solo abre el lightbox en desktop
  mainImg.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
      overlay.classList.remove('hidden');
      showLightboxImage(currentIndex);
    }
  });

  lightboxContainer.append(closeBtn, lightboxImg, prevLightbox, nextLightbox);
  overlay.append(lightboxContainer);
  document.body.append(overlay);

  section.append(mainImg, prevBtn, nextBtn, thumbContainer);
  return section;
}
