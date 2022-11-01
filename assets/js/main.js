const sidenav = document.querySelector('.sidenav');
const openMenuButton = document.querySelector('#menu_button');
const closeMenuButton = document.querySelector('#close_button');
const fadeEffect = document.querySelector('.fade-effect')

openMenuButton.onclick = function (){
    sidenav.classList.toggle('sidenav__open')
        fadeEffect.style.display = 'block'
}

closeMenuButton.onclick = function (){
    sidenav.classList.toggle('sidenav__open')
        fadeEffect.style.display = 'none'
}