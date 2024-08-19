document.querySelector('.logos').appendChild(document.querySelector('.logo-slide').cloneNode(true));

// services button
const cardContainer = [...document.querySelectorAll('.cards-container')];
const nxtBtn = [...document.querySelectorAll('.nxt')];
const prevBtn = [...document.querySelectorAll('.prev')];

cardContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

// NavBar
let lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
    lastScrollTop = scrollTop;
})
