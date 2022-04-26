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
        if (validatePassword(password.value)==false) {
            passwordError.style.visibility="visible";
        }
    }

    function validPasswordFocus(){
            passwordError.style.visibility="hidden"; 
    }
    password.addEventListener("focus", validPasswordFocus)
    password.addEventListener("blur", validPasswordBlur)

}