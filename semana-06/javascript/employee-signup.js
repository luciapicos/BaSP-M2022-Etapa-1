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

    var document = document.getElementById("document")
    var documentError = document.getElementById("documentError")

    function validDocumentBlur(){
        if(validateNoABC(document.value)==true || validateLenghtfor7(document.value)==false){
          documentError.style.visibility= "visible";
        }
    }
    function validDocumentFocus(){
        documentError.style.visibility= "hidden";
    }
    document.addEventListener("focus" , validDocumentFocus)
    document.addEventListener("blur" , validDocumentBlur)
}
