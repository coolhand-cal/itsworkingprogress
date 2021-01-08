const personalInfo = document.querySelector('.personal-info');
const messageText = document.querySelector('.message-text');
const form = document.querySelector('form');

const getName = document.querySelector('#name-input');
const getEmail = document.querySelector('#email-input');
const getMsg = document.querySelector('message-input');

const output = document.querySelector('#output');




form.addEventListener('submit' , function(e) {
e.preventDefault();

});

submitBtn.addEventListener('click', function {
    localStorage.setItem('name', getName.value);
    nameDisplayCheck();
});

function nameDisplayCheck() {
    if(localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        output.textContent ='result is ${name}!';

    }
}
