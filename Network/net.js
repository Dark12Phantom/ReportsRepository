const intro = document.getElementById('intro');
const body1 = document.getElementById('body1');
const body2 = document.getElementById('body2');
const body3 = document.getElementById('body3');
const conclusion = document.getElementById('concl');

const cont1 = document.querySelector('.cont1');
const cont2 = document.querySelector('.cont2');
const cont3 = document.querySelector('.cont3');
const cont4 = document.querySelector('.cont4');
const cont6 = document.querySelector('.cont6');

// Store the original display style of each section
const originalDisplays = {
    cont1: getComputedStyle(cont1).display,
    cont2: getComputedStyle(cont2).display,
    cont3: getComputedStyle(cont3).display,
    cont4: getComputedStyle(cont4).display,
    cont6: getComputedStyle(cont6).display,
};

// Function to show the target section and hide others
function showSection(targetCont) {
    // List all sections
    const sections = [cont1, cont2, cont3, cont4, cont6];

    // Loop through all sections
    sections.forEach(section => {
        if (section === targetCont) {
            section.classList.add('active');
            section.style.display = originalDisplays[section.classList[0]];
        } else {
            section.classList.remove('active');
            section.style.display = 'none';
        }
    });
}

// Event listeners for each section
intro.addEventListener('click', () => showSection(cont1));
body1.addEventListener('click', () => showSection(cont2));
body2.addEventListener('click', () => showSection(cont3));
body3.addEventListener('click', () => showSection(cont4));
conclusion.addEventListener('click', () => showSection(cont6));
