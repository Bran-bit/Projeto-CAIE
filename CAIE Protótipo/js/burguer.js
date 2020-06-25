const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links li');

    burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-ativa');
 
   /* navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = 'navLinkSumir 0.5 ease forwards $(index / 5 + 1)s';
        }
       });*/
    });
   

    burguer.classList.toggle('alternar'); 
}

navSlide();