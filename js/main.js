const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

fadeSections.forEach(section => {
    observer.observe(section);
});

const galleryImages = document.querySelectorAll('.gallery-track img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('active');
    });
});

function sendWhatsApp() {
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const phone = "919701880187"; // replace with real number

    const text = `Hello, my name is ${name}.
Service Required: ${service}
Message: ${message}`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
        "_blank"
    );
}

