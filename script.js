
    const particleContainer = document.querySelector('.fire-particles');
    const particleCount = 6;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particleContainer.appendChild(particle);
    }
