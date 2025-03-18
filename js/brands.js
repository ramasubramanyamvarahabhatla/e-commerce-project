// Optional: Pause on hover (UX enhancement)
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    document.querySelector('.carousel-track').style.animationPlayState = 'paused';
});
document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    document.querySelector('.carousel-track').style.animationPlayState = 'running';
});
