const karticky = document.querySelectorAll('.karticka')

karticky.forEach(karta => {
    karta.addEventListener('click', () => {
        karta.classList.toggle('otocena')

    })
});


// karticky[0].classList.remove('otocena')