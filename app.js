const slideLeftBtn = document.querySelector('.slider-controls .left');
const slideRightBtn = document.querySelector('.slider-controls .right');
const testimonials = document.querySelectorAll('.testimonial-item');

let currentIndex = 0;

slideLeftBtn.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        moveSlider();
    }
}

slideRightBtn.onclick = function() {
    if (currentIndex < testimonials.length - 1) {
        currentIndex++;
        moveSlider();
    }
}


function moveSlider() {
    testimonials.forEach(function(item) {
        item.classList.remove('active');
    })

    testimonials[currentIndex].classList.add('active');
}
