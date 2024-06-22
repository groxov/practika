document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
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
                if (i <= index) s.classList.add('hover');
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
});
var modal = document.getElementById("loginModal");

// Get the image that opens the modal
var img = document.getElementById("loginImage");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the image, open the modal
img.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}