function validateABC(string){
    var abc=false;
    for (var index = 0; index < string.length; index++) {
        var element = string[index];  
         if (isNaN(element)) {
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
         if (isNaN(element)) {
         abc=false;
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

    var name = document.getElementById("name")
    var nameError = document.getElementById("nameError")
    var surnname = document.getElementById("surname")
    var surnnameError = document.getElementById("surnameError")

    function validNameBlur(){
        if(validateABC(name.value)==true || validateLenghtfor3(name.value)==false){
            console.log(name.value);
          nameError.style.visibility= "visible";
        }
    }
    function validNameFocus(){
        console.log("jbdjdj");
        nameError.style.visibility= "hidden";
    }
    name.addEventListener("focus" , validNameFocus)
    name.addEventListener("blur" , validNameBlur)

    }

    /*function validSurnameBlur(){
        if(validateABC(surname.value)==true || validateLenghtfor3(surname.value)==false){
          surnameError.style.visibility= "visible";
        }
    }
    function validSurnameFocus(){
        SurnameError.style.visibility= "hidden";
    }
    surname.addEventListener("focus" , validSurnameFocus)
    surname.addEventListener("blur" , validSurnameBlur)





