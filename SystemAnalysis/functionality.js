let ignoreScroll = false;
let lastScrollTop = 0;
let ticking = false;
const nav = document.querySelector('nav');
const collapseThreshold = 10;


function toggleMenu(x) {
    const links = document.querySelector('.links');
    const isShown = links.classList.toggle("show");
    x.classList.toggle('change', isShown);
}

function addRemoveActive(click) {
    const links = document.querySelectorAll('.links .txt');
    links.forEach(link => link.classList.remove('active'));
    click.classList.add('active');

    const linksContainer = document.querySelector('.links');
    linksContainer.classList.remove('show');

    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('change');

    ignoreScroll = true;

    nav.classList.remove('collapsed');

    setTimeout(() => {
        ignoreScroll = false;
    }, 300);
}
window.addEventListener('scroll', function () {
    if (ignoreScroll) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            if (Math.abs(scrollTop - lastScrollTop) > collapseThreshold) {
                if (scrollTop > lastScrollTop) {
                    nav.classList.add('collapsed');
                } else {
                    nav.classList.remove('collapsed');
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }
            ticking = false;
        });

        ticking = true;
    }
});

function updateActiveLink() {
    const sections = document.querySelectorAll('main section');
    const links = document.querySelectorAll('.links .txt');
    let currentSection = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash || '#intro'; // Default to #intro
    const activeLink = document.querySelector(`a[href="${hash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    updateActiveLink();
});

window.addEventListener('scroll', updateActiveLink);