document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('.header').classList.toggle('open')
    })
})


// Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector('.header').classList.remove('open')
    }
});

// закрыть при клике вне меню
document.getElementById('menu').addEventListener('click', e => {
    e._isClickWithInMenu = true
});
document.getElementById('burger').addEventListener('click', e => {
    e._isClickWithInMenu = true
});
document.body.addEventListener('click', e => {
    if (e._isClickWithInMenu) return;
    document.querySelector('.header').classList.remove('open')
});


