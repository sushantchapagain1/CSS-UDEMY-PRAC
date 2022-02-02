'use strict';
// Selecting for Form
const email = document.querySelector('.email');
const emailText = document.querySelector('.emailContent');
const pass = document.querySelector('.password');
const passText = document.querySelector('.passContent');
const submit = document.querySelector('.submit');
const seePass = document.querySelector('.see-pass');

// Selecting for CountDown
const currentDate = new Date();
const myBirthDate = new Date('2023-11-23T12:00:00');

const currentDay = currentDate.getTime();
console.log(currentDay);
console.log(currentDate);
console.log(myBirthDate);
// const calcBirthday = setTimeout(() => (conter.style = 'display:block'), 5000);
const showData = function () {
  emailText.textContent = email.value;
  passText.textContent = pass.value;
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') showData();
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  showData();
});
seePass.addEventListener('click', function (e) {
  e.preventDefault();
  if (pass.type === 'password') {
    pass.type = 'text';
    seePass.classList.remove('fa-eye');
    seePass.classList.add('fa-eye-slash');
  } else {
    pass.type = 'password';
    seePass.classList.add('fa-eye');
    seePass.classList.remove('fa-eye-slash');
  }
});
