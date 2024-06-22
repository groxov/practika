document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const thankYouMessage = document.getElementById('thank-you-message');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.style.display = 'none');
            thankYouMessage.style.display = 'block';
        });

        star.addEventListener('mouseover', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('hover');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
});