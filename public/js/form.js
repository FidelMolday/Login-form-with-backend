const { name } = require("body-parser");

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
      item.styleMap.opacity = 1
    },i*100);
})

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

if(name == null){ //means name is open

}else{ //means register page is open
    submitBtn.addEventListener('click', () => {
      fetch('/register-user', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json'}),
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value
        })
})
 .then(res => res.json())
 .tthen(data => {
    })
  })