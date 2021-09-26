// list of variables connected to the fom

let firstName = document.forms['validation-form']['first-name'];
let lastName = document.forms['validation-form']['last-name'];
let password = document.forms['validation-form']['password'];
let email = document.forms['validation-form']['email'];
let btn = document.getElementById('send-form');

//create function after click
btn.addEventListener('click', validateForm);



//calling the function
function validateForm(){

//in case some or all the fields are empty, show error messages to warn the user, they have to fill the fields correctly

    if (firstName.value == ''){
        
        alert('First name cannot be empty ');
    
    } else if (lastName.value == ''){
        
        alert('Last Name cannot be empty');
    
    } else if(email.value == ''){
        
        alert('Email Address cannot be empty');

    
    } else if (password.value == ''){
    
        alert('Password cannot be empty')
    
    }

    //in case all fields are filled (true), show this message, the form is 'sent'

    if(firstName.value && lastName.value && email.value && password.value){
        alert('Thanks for filling the form. You can now press \'ok\' and refresh the page!')
    }
    };