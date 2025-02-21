
// Contador del carrito
let cartCount = 0;
const cartElement = document.getElementById('cart-count');

// Función para agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartElement.textContent = cartCount;
    });
});;
const categoryImages = document.querySelectorAll('.category-image');

categoryImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});
// Selecciona todas las imágenes de las promociones
const promotionImages = document.querySelectorAll('.promotion-image');

// Añade un evento de clic a cada imagen
promotionImages.forEach(image => {
    image.addEventListener('click', () => {
        // Alterna la clase 'zoomed' para aplicar o quitar el efecto
        image.classList.toggle('zoomed');
    });
});
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
const startCarousel = (carousel) => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000);
};

document.querySelectorAll('.image-carousel').forEach(startCarousel);
