let menu = document.querySelector('#menu-icon');
let navegador = document.querySelector('.navegador');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navegador.classList.toggle('open');
}

let usuario = document.querySelector('#user-icon');
let sesion = document.querySelector('.sesion');

usuario.onclick = () => {
    usuario.classList.toggle('bx-x');
    sesion.classList.toggle('open');
}