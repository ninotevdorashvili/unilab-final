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

// header-scroll-effect
const header = document.querySelector(".header");

window.onscroll=function(){
    let top=window.scrollY;
    console.log(top);
    if(top >=100){
        header.classList.add("bg-active")
    }else {
        header.classList.remove("bg-active");
    }
}

// slick-slider
$('.center').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });