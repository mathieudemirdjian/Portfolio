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

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
})

const door = document.querySelector('.door');
const body = document.body;

setTimeout( ()=> {
    door.classList.add('slidein');
    body.classList.remove('door-open');
}, 2500, setTimeout( ()=> {
    door.remove();
},5500) );

const switchBox = document.querySelector(".sun-moon");

document.querySelector("input").addEventListener("change", (e) => {
    const { checked } = e.target;   
    if (checked) {
        switchBox.classList.add("move");
        body.classList.add('daymode')
    } else {
        switchBox.classList.remove("move");
        body.classList.remove('daymode')
    }
});


