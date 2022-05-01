function validateABC(string){
    var abc=false;
    for (var index = 0; index < string.length; index++) {
        var element = string[index];  
         if (!isNaN(element)) {
         abc=true;
         }
    }   
    console.log(abc);  
    return abc;
}    
function validateLenghtfor3(string){
    longEnough=false;
    if (string.length>=3) {
        longEnough=true;      
    }      
    return longEnough;
}  
function validateNoABC(string){
    var noabc=true;
    for (var index = 0; index < string.length; index++) {
        var element = string[index];  
         if (!isNaN(element)) {
         noabc=false;
         }
    }     
    return noabc;
}    
function validateLenghtfor7(string){
    longEnough=false;
    if (string.length>=7) {
        longEnough=true;      
    }      
    return longEnough;
}  
function validateLenghtfor10(string){
    longEnough=false;
    if (string.length==10) {
        longEnough=true;      
    }      
    return longEnough;
} 
function validateLenghtfor8(string){
    longEnough=false;
    if (string.length>=8) {
        longEnough=true;      
    }      
    return longEnough;
} 
function validateLenghtforBetween4and5(string){
    longEnough=false;
    if (string.length==4 || string.length==5) {
        longEnough=true;      
    }      
    return longEnough;
} 
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


window.onload = function(){

    var nameError = document.getElementById("nameError")
    var userName = document.getElementById("userName")

    function validNameBlur(){
        if(validateABC(userName.value)==true || validateLenghtfor3(userName.value)==false){
            console.log(userName.value);
          nameError.style.visibility= "visible";
        }
    }
    function validNameFocus(){
        console.log("jbdjdj");
        nameError.style.visibility= "hidden";
    }
    userName.addEventListener("focus" , validNameFocus)
    userName.addEventListener("blur" , validNameBlur)

    var surname = document.getElementById("surname")
    var surnameError = document.getElementById("surnameError")

    function validSurnameBlur(){
        if(validateABC(surname.value)==true || validateLenghtfor3(surname.value)==false){
          surnameError.style.visibility= "visible";
        }
    }
    function validSurnameFocus(){
        surnameError.style.visibility= "hidden";
    }
    surname.addEventListener("focus" , validSurnameFocus)
    surname.addEventListener("blur" , validSurnameBlur)

    var userDocument = document.getElementById("userDocument")
    var documentError = document.getElementById("documentError")

    function validDocumentBlur(){
        if(validateNoABC(userDocument.value)==true || validateLenghtfor7(userDocument.value)==false){
          documentError.style.visibility= "visible";
        }
    }
    function validDocumentFocus(){
        documentError.style.visibility= "hidden";
    }
    userDocument.addEventListener("focus" , validDocumentFocus)
    userDocument.addEventListener("blur" , validDocumentBlur)

    var phone = document.getElementById("phone")
    var phoneError = document.getElementById("phoneError")

    function validPhoneBlur(){
        if(validateNoABC(phone.value)==true || validateLenghtfor10(phone.value)==false){
          phoneError.style.visibility= "visible";
        }
    }
    function validPhoneFocus(){
        phoneError.style.visibility= "hidden";
    }
    phone.addEventListener("focus" , validPhoneFocus)
    phone.addEventListener("blur" , validPhoneBlur)

    var city = document.getElementById("city")
    var cityError = document.getElementById("cityError")

    function validCityBlur(){
        if (validateABC(city.value)==true || validateLenghtfor3(city.value)==false){
            cityError.style.visibility="visible";
        }
    }

    function validCityFocus(){
            cityError.style.visibility="hidden"; 
    }
    city.addEventListener("focus", validCityFocus)
    city.addEventListener("blur", validCityBlur)

    var postalcode = document.getElementById("postalcode")
    var postalcodeError = document.getElementById("postalcodeError")

    function validPostalcodeBlur(){
        if(validateNoABC(postalcode.value)==true || validateLenghtforBetween4and5(postalcode.value)==false){
          postalcodeError.style.visibility= "visible";
        }
    }
    function validPostalcodeFocus(){
        postalcodeError.style.visibility= "hidden";
    }
    postalcode.addEventListener("focus" , validPostalcodeFocus)
    postalcode.addEventListener("blur" , validPostalcodeBlur)

    var email = document.getElementById("email")
    var emailError = document.getElementById("emailError")
    
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

    var password = document.getElementById("password")
    var passwordError = document.getElementById("passwordError")
    
    function validPasswordBlur(){
        if (validatePassword(password.value)==false || validateLenghtfor8(password.value)==false) {
            passwordError.style.visibility="visible";
        }
    }

    function validPasswordFocus(){
            passwordError.style.visibility="hidden"; 
    }
    password.addEventListener("focus", validPasswordFocus)
    password.addEventListener("blur", validPasswordBlur)

    var repeat = document.getElementById("repeat")
    var repeatError = document.getElementById("repeatError")

    function validRepeatBlur(){
        if (validatePassword(repeat.value)==false || validateLenghtfor8(repeat.value)==false) {
            repeatError.style.visibility="visible";
        }
    }

    function validRepeatFocus(){
            repeatError.style.visibility="hidden"; 
    }
    repeat.addEventListener("focus", validRepeatFocus)
    repeat.addEventListener("blur", validRepeatBlur)
  
    var onButtonSignUp = document.getElementById("buttonSignUp")

    function validateAllResults(){
        if (validateABC(userName.value)==false && validateLenghtfor3(userName.value)==true &&
        validateABC(surname.value)==false && validateLenghtfor3(surname.value)==true && 
        validateNoABC(userDocument.value)==false && validateLenghtfor7(userDocument.value)==true && 
        validateNoABC(phone.value)==false && validateLenghtfor10(phone.value)==true && 
        validateABC(city.value)==false && validateLenghtfor3(city.value)==true && 
        validateNoABC(postalcode.value)==false && validateLenghtforBetween4and5(postalcode.value)==true && 
        validateEmail(email.value)==true && validatePassword(password.value)==true && 
        validateLenghtfor8(password.value)==true && validatePassword(repeat.value)==true && 
        validateLenghtfor8(repeat.value)==true){
            var alertContent= "¡Everything is okay!" + "\nName: " + userName.value + "\nSurname: " + 
            surname.value + "\nDocument: " + userDocument.value + "\nDate of birth: " + "VOID" +
            "\nPhone number: " + phone.value +  "\nAdress: " + "VOID" +
            "\nCity: " + city.value + "\nPostal code: " + postalcode.value +
            "\nE-mail: " + email.value + "\nPassword: " + password.value;
            alert(alertContent);
        } else {
            alert("¡Somethign is wrong! \nCheck your information.")
        }
    }
    onButtonSignUp.addEventListener("click", validateAllResults)
}
