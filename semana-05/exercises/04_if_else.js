/*4)If Else
a)Create a random number between 0 and 1 using the 
Math.random() function, if the value is greater than or 
equal to 0.5 display an alert with the message "Greater than 0.5" 
and otherwise an alert with the message "Lower than 0.5".*/
var one_number
one_number=Math.random();
console.log(Math.random());
if (one_number>= 0.5){
    alert ("Greater than 0,5");
}else{
    alert ("Lower than 0,5");
}          
console.log(one_number);
/*b)Create an "Age" variable containing an integer between 0 and 100 
and display the following alert messages:
"Baby" if the age is less than 2 years;
"Child" if the age is between 2 and 12 years;
"Teenager" between 13 and 19 years of age;
"Young" between 20 and 30 years of age;
"Adult" between 31 and 60 years of age;
"Older adult" if between 61 and 75 years of age;
"Elderly" if over 75 years of age.*/
var Age=63;
if (Age<2){
    alert ("Baby");
}if (Age>2 && Age<12){
    alert ("Child")
}if (Age>13 && Age<19){
    alert ("Teenager") 
}if (Age>20 && Age<30){
    alert ("Young")
}if (Age>31 && Age<60){
    alert ("Adult")
}if (Age>61 && Age<75){
    alert ("Older Adult")
}if (Age>75){
    alert ("Elderly")
}  
console.log(Age);        

