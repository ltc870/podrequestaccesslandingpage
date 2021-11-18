'use strict';

const formEl = document.querySelector('.form');
const formEmailEl = document.querySelector('.form-email');
const formSubmitBtnEl = document.querySelector('.form-SubmitBtn');
const formErrorEl = document.querySelector('.form-error');


// when the email value is empty, or if email is not written correctly, this function will perform
formSubmitBtnEl.addEventListener('click', function() {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if(formEmailEl.value === "" || formEmailEl.value !== emailRegex ) {
    formErrorEl.classList.add('show-msg');
  } 
});


// when the input field has been changed, the error message will disappear
formEmailEl.addEventListener('input', function() {
  formErrorEl.classList.remove('show-msg');
});


// when the email is written correctly, this function will perform
formEl.addEventListener('submit', (event) => {
  // stop form submission//
  event.preventDefault();
  alert('Your form has been submitted. Thank you!');
  // so the form can be submitted and refreshed//
  formEl.submit();
  formErrorEl.classList.remove('show-msg');
});


// when the email is not written correctly, this function will perform
// formSubmitBtnEl.addEventListener('click', function() {
//   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

//   if(formEmailEl.value !== emailRegex) {
//     formErrorEl.classList.add('show-msg');
//   }
// });














