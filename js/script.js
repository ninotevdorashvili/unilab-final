// let nav=document.getElementById('head-navi');
// let barmenu=document.getElementById('bar');
// // let links=document.querySelectorAll('ul li');
// barmenu.addEventListener('click', function(){
//     nav.classList.toggle('active');
// });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener('click', ()=>{
//Animate Links
navLinks.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
});
//Hamburger Animation
hamburger.classList.toggle("toggle");
});