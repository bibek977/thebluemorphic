window.addEventListener('scroll',function () {
    let header = document.querySelector('nav');

    header.classList.toggle('onscroll', window.scrollY > 100);
})