const menu =document.querySelector("#menu-btn");
const nav = document.querySelector(".navbar-menu");

menu.oclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}