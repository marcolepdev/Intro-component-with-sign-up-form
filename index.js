let firstName = document.forms['validation-form']['first-name'];
let lastName = document.forms['validation-form']['last-name'];
let password = document.forms['validation-form']['password'];
let email = document.forms['validation-form']['email'];

let btn = document.getElementById('send-form');


btn.addEventListener('click', validateForm);

function validateForm(){

    if (firstName.value == ''){
        
        alert('First name cannot be empty ');
    
    } else if (lastName.value == ''){
        
        alert('Last Name cannot be empty');
    
    } else if(email.value == ''){
        
        alert('Email Address cannot be empty');

        if( ){}
    
    } else if (password.value == ''){
    
        alert('Password cannot be empty')};

}