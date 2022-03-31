const burger = document.querySelector('.burger');
const menu = document.querySelector('.dropdown-menu');

burger.addEventListener('click', () => {
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

const nom = document.getElementById('nom');
const email = document.getElementById('email');
const texte = document.getElementById('texte');
const form = document.getElementById('form');
const erreur = document.getElementById('erreur');
console.log(nom);
console.log(texte);
form.addEventListener('submit', (e) => {
    console.log(e);
    let messages = [];
    console.log(messages);
    const emailcheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if (nom.value.trim() === '' || nom.value == null) {
        console.log(nom.value);
        messages.push('Veuillez entrer votre nom');
    }

    if(emailcheck.test(email.value.trim())) {
        console.log(emailcheck.value);
    }else {
        messages.push('Veuillez entrer un email valide');
    } 

    if (texte.value.trim() === '' || texte.value == null) {
        console.log(texte.value);
        messages.push('Veuillez entrer votre message');
    } 

    if (messages.length > 0) {
        e.preventDefault();
        erreur.innerHTML = messages.join('<br>');
    }

})

