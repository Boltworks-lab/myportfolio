var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('text-error');
var submitError = document.getElementById('submit-error');
let popup = document.getElementById('popup');
let themeIcon = document.getElementById('theme-icon');


function validateName(){
    var name = document.getElementById('fName').value;

    if(name.length == 0){
        nameError.innerHTML = 'Full Name is required';
        return false;
    }
    if(!name.match(/^[a-z ,.'-]+$/i)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    else nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = 'Phone no should be 11 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    else phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Enter email'
    }
    if(!email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'Email format invalid'
        return false;
    }
    else emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE"></i>';
    return true;
}

function validateText(){
    var text = document.getElementById('desc').value;
    var required = 50;
    var left = required - text.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    else messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE"></i>';
    return true;
        
    }

    function validateForm(){
        if(!validateName() || !validatePhone() || !validateEmail() || !validateText()){
            submitError.style.display = "block";
            submitError.innerHTML = 'Please fix error to submit';
            setTimeout(function(){submitError.style.display = 'none';}, 3000);
            return false;
        }else{
            document.getElementsByClassName('click').addEventListener("click", openPopup());
            return true;
        }
    }

    function openPopup(){
        popup.classList.add('open-popup')
    }
    function closePopup(){
        popup.classList.remove('open-popup');
    }
    function clearField(){
        document.getElementById('myForm').reset();
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        messageError.innerHTML = "";
        submitError.innerHTML = "";   
    }


    // const theme = localStorage.getItem('theme');
    // theme && document.body.classList.add('theme') && themeIcon.src;

    // let mode = localStorage.getItem('mode');
    // const darkMode = () =>{
    //     document.body.classList.add('dark-theme');
    //     localStorage.setItem('mode', 'dark-theme');
    // }
    // if (mode === "dark-theme"){
    //     darkMode();
    //     themeIcon.src = "/Icons/icons8-moon-30.png";
    // }


    //themeIcon.addEventListener('click', () =>{
    //document.body.classList.toggle('dark-theme');
    //if (document.body.classList.contains('dark-theme')) {
    //         localStorage.setItem('theme', 'dark-theme');
    //themeIcon.src = "/Icons/icons8-sun-32.png";

    //} else{
    //         localStorage.removeItem('theme');
    //themeIcon.src = "/Icons/icons8-moon-30.png";

    //    }
        
    //});

    