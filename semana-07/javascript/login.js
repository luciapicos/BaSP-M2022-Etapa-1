    function validateEmail(input){
    var regExEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    return regExEmail.test(input);
}
    function validatePassword(string){
       var abc=false;
       var num=false;
       for (var index = 0; index < string.length; index++) {
           var element = string[index];  
            if (isNaN(element)==true) {
            abc=true;
            }
            if(isNaN(element)==false){
            num=true;
            }   
       }
       return abc && num;
    }
   
window.onload = function() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var emailError = document.getElementById("emailError")
    var passwordError = document.getElementById("passwordError")
    
    
    function validEmailBlur(){
      if(validateEmail(email.value)==false){
        emailError.style.visibility= "visible";
        }
    }
    function validEmailFocus(){
            emailError.style.visibility= "hidden";
    }
    email.addEventListener("focus" , validEmailFocus)
    email.addEventListener("blur" , validEmailBlur)

    function validPasswordBlur(){
        if (!validatePassword(password.value)) {
            passwordError.style.visibility="visible";
        }
    }

    function validPasswordFocus(){
            passwordError.style.visibility="hidden"; 
    }
    password.addEventListener("focus", validPasswordFocus)
    password.addEventListener("blur", validPasswordBlur)

    var buttonLogin=document.getElementById("loginB")
    var invalidMail= "¡Invalid E-mail! \nMust be a valid E-mail format: \nexample@example.ex";
    var invalidPass= 
    "¡Invalid Password! \n-Must contain letters and numbers. \n-Must contain at least 8 characters.";
    
    function onSubmit(){
        if (validateEmail(email.value) && validatePassword(password.value)) {
            var AllOk= "¡Everything is Okay!" + "\nEmail: " + email.value + "\nPassword: " + password.value; 
            alert(AllOk);
        return true;
        } else {
            if (!validateEmail(email.value)) {
                alert (invalidMail);
            return false;
            }
            if (!validatePassword(password.value)) {
                alert (invalidPass);
            return false;
            }    
        }
        
    }
    buttonLogin.addEventListener("click", onSubmit)

    var buttonRememberMe=document.getElementById("rememberMe");
    
    function onRememberMe(){
        if (validateEmail(email.value) && validatePassword(password.value)) {
            var rememberAlert= "We'll remember this information: " + "\nEmail: " +
             email.value + "\nPassword: " + password.value; 
            alert(rememberAlert); 
        } else {
            alert("¡Something is wrong! \nCheck your information.")
        }
        
    }
    buttonRememberMe.addEventListener("click", onRememberMe)

    function serverSend() {
        if (onSubmit()) {
        fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?email=" +
            email.value + "&password=" + password.value)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            alert(data.msg);
        }).catch(function (error) {
            console.log(error)
            alert (error.msg);
        });   
        } else {
            alert("¡Something is wrong! \nCheck your information.");
        }
        
    }
    buttonLogin.addEventListener("click", serverSend)

}