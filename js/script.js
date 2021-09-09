// let nav=document.getElementById('head-navi');
// let barmenu=document.getElementById('bar');
// // let links=document.querySelectorAll('ul li');
// barmenu.addEventListener('click', function(){
//     nav.classList.toggle('active');
// });

// hamburgermenu-animation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener('click', ()=>{

navLinks.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
});

hamburger.classList.toggle("toggle");
});

// header-scroll-effect
// const header = document.querySelector(".header");

// window.onscroll=function(){
//     let top=window.scrollY;
//     console.log(top);
//     if(top >=100){
//         header.classList.add("bg-active")
//     }else {
//         header.classList.remove("bg-active");
//     }
// }

// slick-slider
$('.center').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 732,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });

  // blog
  const rawcard = document.getElementById('Raw-card');
  const rawcard1 = document.getElementById('Card1');
  const rawcard2 = document.getElementById('Card2');
  const rawcard3 = document.getElementById('Card3');
  const rawcard4 = document.getElementById('Card4');
  const rawcard5 = document.getElementById('Card5');

  rawcard1.addEventListener('mouseover', ()=>{
    rawcard.style.backgroundImage = 'url(images/outdoormeditation.jpg)';
  }, false);  
  rawcard1.addEventListener('mouseout', ()=>{
    rawcard.style.backgroundImage = '';
  }, false);  
 
  rawcard2.addEventListener('mouseover', ()=>{
    rawcard.style.backgroundImage = 'url(images/intervaln.jpg)';
  }, false);  
  rawcard1.addEventListener('mouseout', ()=>{
    rawcard.style.backgroundImage = '';
  }, false);  

  rawcard3.addEventListener('mouseover', ()=>{
    rawcard.style.backgroundImage = 'url(images/pranayamas.jpg)';
  }, false);  
  rawcard1.addEventListener('mouseout', ()=>{
    rawcard.style.backgroundImage = '';
  }, false); 

  rawcard4.addEventListener('mouseover', ()=>{
    rawcard.style.backgroundImage = 'url(images/chakras.jpg)';
  }, false);  
  rawcard1.addEventListener('mouseout', ()=>{
    rawcard.style.backgroundImage = '';
  }, false); 

  rawcard5.addEventListener('mouseover', ()=>{
    rawcard.style.backgroundImage = 'url(images/card5.jpg)';
  }, false);  
  rawcard1.addEventListener('mouseout', ()=>{
    rawcard.style.backgroundImage = '';
  }, false); 

// scroll-effect
const scrollElements = document.querySelectorAll('.scroll');
scrollElements.forEach((el) => {
    el.style.opacity = 0
  })
const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
  } 
const displayScrollElement = (element) => {
  element.classList.add('scrolled');

}
const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 50)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  })
};
window.addEventListener('scroll', () => {
    handleScrollAnimation();
})



// header-scroll
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 150) {
          $(".Header").addClass("bg-active");
      } else {
         $(".Header").removeClass("bg-active");
      }
  });
});

// menu-dropdown
// const dropdown = document.getElementById('down');
// const Downlist = document.getElementById('downlist');
// Downlist.style.display='none';
// dropdown.addEventListener('click', (event)=>{
//   if(Downlist.style.display == 'none') {
//     Downlist.style.display = 'block';
//   } else {
//     Downlist.style.display = 'none';
//   }
// })

// menu-dropdown2
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunctionn() {
  document.getElementById("myDropdownn").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunctionnn() {
  document.getElementById("myDropdownnn").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// form
function validateForm(){
  let x = document.forms['myForm']['Fname'].value;
  if (x=='') {
      alert("Name must be filled out");
      return false;
  }
  let y = document.forms['myForm']['Lname'].value;
  if (y=='') {
      alert("Last Name must be filled out");
      return false;
  }
  let z = document.forms['myForm']['email'].value;
  if (z=='') {
      alert("E-mail must be filled out");
      return false;
  }
  let massage = document.forms['myForm']['message'].value;
  if (massage=='') {
      alert("Enter your message");
      return false;
  }

}
function submitFunction() {
document.getElementById("myForm").submit();
}




document.getElementById('submit').addEventListener('click', function(){
  alert('Submit');
});
