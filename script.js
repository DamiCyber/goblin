let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () =>{
    menu.classList.toogle('bx-bx');
    navlist.classList.toogle('open');
};