const progress = document.getElementById('progress'),
    buttonPrev = document.getElementById('prev'),
    buttonNext = document.getElementById('next'),
    circles = document.querySelectorAll('.circle');

let currentActive = 1;

function updateDom() {
    circles.forEach(function (circle, idx) {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = `${(actives.length-1) / (circles.length-1) * 100}%`;
    // disable and enable buttons
    if (currentActive == 1) {
        buttonPrev.disabled = true;
    } else if (currentActive === circles.length) {
        buttonNext.disabled = true;
    } else {
        buttonPrev.disabled = false;
        buttonNext.disabled = false;
    }

}
buttonNext.addEventListener('click', function () {
    currentActive++;
    // keep it within boundaries
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    updateDom();
})

buttonPrev.addEventListener('click', function () {
    currentActive--;
    // keep it within boundaries
    if (currentActive < 1) {
        currentActive = 1;
    }
    updateDom();
})