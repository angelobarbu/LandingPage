document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navButtons = document.querySelectorAll('.btn-section');

    const observerOptions = {
        root: document.querySelector('.content'),
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navButtons.forEach(button => button.classList.remove('selected'));
                const id = entry.target.getAttribute('id');
                document.querySelector(`.btn-section[onclick="scrollToSection('${id}')"]`).classList.add('selected');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    const content = document.querySelector('.content');
    const top = element.getBoundingClientRect().top + content.scrollTop - content.getBoundingClientRect().top;
    content.scrollTo({ top, behavior: 'smooth' });
}
