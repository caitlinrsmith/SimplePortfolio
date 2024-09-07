document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.project-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    // Moving icons in the background
    const iconContainer = document.querySelector('.icon-container');

    const icons = [
        `<svg xmlns="http://www.w3.org/2000/svg" class="icon-tech" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M4 8h16M4 16h16"/></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" class="icon-tech" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    ];

    icons.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.className = 'tech-icon';
        iconElement.innerHTML = icon;
        iconElement.style.top = `${Math.random() * 100}%`;
        iconElement.style.left = `${Math.random() * 100}%`;
        iconElement.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        iconContainer.appendChild(iconElement);
    });

    // Remove mouse hover animations
    const mainHeading = document.querySelector('.main-heading');
    const roleText = document.querySelector('.role');

    const removeMouseEffects = () => {
        mainHeading.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'; // Static black outline
        roleText.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)'; // Static black outline
    };

    removeMouseEffects();
});
