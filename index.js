// const base = {
//     closeNav: function() {
//         const navElement = document.querySelector('.navigation');
//         var w = document.documentElement.clientWidth || window.innerWidth;

//         if (w <= 1200) {
//             navElement.remove();
//          }
//          console.log(w);
//     },
    
//     init: function () { 
//         base.closeNav();

//         console.log('init !');
//     },
// }

// document.addEventListener('DOMContentLoaded', base.init);

const burger = document.querySelector('.burger');
const menu = document.querySelector('.dropdown-menu');

burger.addEventListener('click', (e) => {
    // if ((!burger.contains(e.target)) || (!menu.contains(e.target))){
    //     burger.classList.toggle('active')
    //     menu.classList.toggle('dropdown-menu-active')
    // }
    burger.classList.toggle('active')
    menu.classList.toggle('dropdown-menu-active')
});

const door = document.querySelector('.door');
const body = document.body;

setTimeout( ()=> {
    door.classList.add('slidein');
    body.classList.remove('door-open');
}, 2500, setTimeout( ()=> {
    door.remove();
},5500) );

const switchBox = document.querySelector(".sun-moon");

switchBox.addEventListener("click", () => {
    switchBox.classList.toggle('move')
    body.classList.toggle('daymode')
    
});


