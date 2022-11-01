const sidenav = document.querySelector('.sidenav');
const menuButton = document.querySelector('.menu');

menuButton.onclick = function (){
    sidenav.classList.toggle('sidenav__open')
    if(sidenav.classList.contains('sidenav__open')){
        menuButton.src = 'assets/images/icon-menu-close.svg'
    } else {
        menuButton.src = 'assets/images/icon-menu.svg'
    }
}
