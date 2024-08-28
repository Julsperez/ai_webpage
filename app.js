// Variables para los testimonios
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

// Mostrar el primer testimonio por defecto
testimonials[currentTestimonial].classList.add('active');

// Función para mostrar el siguiente testimonio
document.getElementById('next-testimonial').addEventListener('click', function() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
});

// Función para mostrar el testimonio anterior
document.getElementById('prev-testimonial').addEventListener('click', function() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
});