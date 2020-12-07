const panels = document.querySelectorAll('.panel'); // NodeList

/**Remove all active classes */
function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}


panels.forEach(function (panel) {
    panel.addEventListener('click', function () {
        removeActiveClass();
        panel.classList.add('active');
    });
})