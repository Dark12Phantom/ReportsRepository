let home = document.getElementById('home')
let report = document.getElementById('report')
let firstSection = document.getElementById('first')
let secondSection = document.getElementById('second')

home.addEventListener('click', () => {
    if (home.classList.contains('active') && firstSection.style.display === "block") {
        home.classList.remove('active');
        secondSection.style.display = "grid"
        firstSection.style.display = "none"
    }
    else {
        home.classList.add('active');
        report.classList.remove('active')
        secondSection.style.display = "none"
        firstSection.style.display = "block";
    }
})

report.addEventListener('click', () => {
    if (report.classList.contains('active') && secondSection.style.display === "grid") {
        report.classList.remove('active')
        firstSection.style.display = "block"
        secondSection.style.display = "none"
    } else {
        report.classList.add('active')
        firstSection.style.display = "none"
        secondSection.style.display = "grid"
    }
})