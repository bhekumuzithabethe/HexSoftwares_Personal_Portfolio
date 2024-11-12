const menu =document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.oclick = () =>{
    menu.classList.toggle('fa-xmark');
    nav.classList.toggle('active');
}