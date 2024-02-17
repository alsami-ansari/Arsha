window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    //   once: true,
      mirror: false
    });
  });



  // back to top==
  
  // let backtotop = select('.back-to-top')
  // if (backtotop) {
  //   const toggleBacktotop = () => {
  //     if (window.scrollY > 100) {
  //       backtotop.classList.add('active')
  //     } else {
  //       backtotop.classList.remove('active')
  //     }
  //   }
  //   window.addEventListener('load', toggleBacktotop)
  //   onscroll(document, toggleBacktotop)
  // }


  let backtotop = document.querySelector('.back-to-top');
if (backtotop) {
  let toggleBacktotop = () => backtotop.classList.toggle('active', window.scrollY > 100);
  window.addEventListener('load', toggleBacktotop);
  window.addEventListener('scroll', toggleBacktotop);
}

// nav color


// document.addEventListener('scroll', ()=>{

//   let header = document.querySelector('header');

//   if(window.scrollY > 100 ){
//     header.classList.add('header-scrolled');
//   } else{

//     header.classList.remove('header-scrolled');

//   }




// })




// let selectHeader = select('#header')
//   if (selectHeader) {
//     const headerScrolled = () => {
//       if (window.scrollY > 100) {
//         selectHeader.classList.add('header-scrolled')
//       } else {
//         selectHeader.classList.remove('header-scrolled')
//       }
//     }
//     window.addEventListener('load', headerScrolled)
//     onscroll(document, headerScrolled)
//   }



// const selectHeader = document.querySelector('#header');
// const headerScrolled = () => selectHeader.classList.toggle('header-scrolled', window.scrollY > 100);

// selectHeader && (window.onload = window.onscroll = headerScrolled);


// const navbar = document.querySelector('#header');

// const headerScrolled = () => {
//     if (window.scrollY > 100) {
//         navbar.style.backgroundColor = ' background: #37517e; '; // Change to your desired color
//     } else {
//         navbar.style.backgroundColor = ' background: rgba(40, 58, 90, 0.9);'; // Change to your default color
//     }
// };

// window.onload = window.onscroll = headerScrolled;


const navbar = document.querySelector('#header');

const headerScrolled = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-color');
    } else {
        navbar.classList.remove('nav-color');
    }
};

window.onload = window.onscroll = headerScrolled;
