/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function switchLanguage(language) {
    var englishTexts = document.getElementsByClassName('english');
    var frenchTexts = document.getElementsByClassName('french');

    if(language == 'english') {
        for(var i = 0; i < englishTexts.length; i++) {
            englishTexts[i].style.display = 'block';
            frenchTexts[i].style.display = 'none';
        }
    } else {
        for(var i = 0; i < englishTexts.length; i++) {
            englishTexts[i].style.display = 'none';
            frenchTexts[i].style.display = 'block';
        }
    }
}

document.querySelectorAll('#video-carousel .card-img-top').forEach(item => {
  item.addEventListener('click', event => {
    const videoId = event.target.getAttribute('data-video-id');
    document.getElementById('main-video').src = `https://www.youtube.com/embed/${videoId}`;
  });
});

function addVideoClickListeners() {
  document.querySelectorAll('#video-carousel .card-img-top').forEach(item => {
    item.addEventListener('click', event => {
      const videoId = event.target.getAttribute('data-video-id');
      document.getElementById('main-video').src = `https://www.youtube.com/embed/${videoId}`;
    });
  });
}

addVideoClickListeners();

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

// Reattach event listeners to cloned items
addVideoClickListeners();
