const hamburger = document.querySelector(".fas");
const menu = document.querySelector(".hamburger");
const showMenu = () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('fa-bars')
    hamburger.classList.toggle('fa-times')
}
hamburger.addEventListener('click', showMenu);