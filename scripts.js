// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.querySelector('.particle-container');

    const createParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    };

    document.addEventListener('mousemove', (e) => {
        createParticle(e.pageX, e.pageY);
    });

    const listItems = document.querySelectorAll('ul li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the display of the explanation
            const isActive = item.classList.contains('active');
            listItems.forEach(i => {
                i.classList.remove('active');
                const explanation = i.querySelector('.explanation');
                if (explanation) {
                    explanation.style.maxHeight = 0;
                    explanation.style.padding = 0;
                    explanation.style.marginTop = 0;
                }
            });

            if (!isActive) {
                let explanation = item.querySelector('.explanation');
                if (!explanation) {
                    explanation = document.createElement('div');
                    explanation.classList.add('explanation');
                    explanation.textContent = item.getAttribute('data-explanation');
                    item.appendChild(explanation);
                }
                item.classList.add('active');
                explanation.style.maxHeight = '200px';
                explanation.style.padding = '1rem';
                explanation.style.marginTop = '0.5rem';
            }
        });
    });
});
