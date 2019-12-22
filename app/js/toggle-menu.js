const navLists = document.getElementsByClassName('nav__list');
const navToggleIcon = document.getElementsByClassName('nav__toggle-icon')[0];
const navLinks = document.getElementsByClassName('nav__link');

navToggleIcon.addEventListener('click', function () {
    for (let i = 0; i < navLists.length; i++) {
        navLists[i].classList.toggle('nav__list--moved');
    }
})


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        for (let i = 0; i < navLists.length; i++) {
            navLists[i].classList.add('nav__list--moved');s
        }
    })
}
