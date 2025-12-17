// Get the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const contactMessage = document.getElementById('contact-message');
const contactForm = document.querySelector('#contact form');

// Function to open the lightbox
function openLightbox(imageSrc, captionText) {
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = captionText;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

// Function to close the lightbox
function closeLightbox(event) {
    // Check if the click was directly on the overlay or the close button
    if (event.target === lightbox || event.target.closest('button')) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Attach event listeners to all portfolio cards
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
        const imageSrc = card.getAttribute('data-image-src');
        const captionText = card.getAttribute('data-caption');
        openLightbox(imageSrc, captionText);
    });
});

// Handle keyboard escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox({ target: lightbox });
    }
});

// Simple Form Submission Handler (since no backend is used)
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server here.
    
    contactMessage.textContent = 'Thank you! Your message has been received (simulated submission).';
    contactMessage.classList.remove('hidden', 'text-red-400');
    contactMessage.classList.add('text-green-400');
    
    // Clear form after a short delay
    setTimeout(() => {
        contactForm.reset();
        contactMessage.classList.add('hidden');
    }, 3000);
});
