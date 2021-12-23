const menuBtn =document.querySelector(".menu");
const menuBtnContent= document.querySelector(".menu-btn-componet");
const navbar=document.querySelector("header");
const items =document.querySelectorAll(".navbar-item");

menuBtn.addEventListener("click",(e)=>{
    menuBtnContent.classList.toggle("open");
    navbar.classList.toggle("open");
    items.forEach(item =>{
        item.classList.toggle("item-open");
    })
});