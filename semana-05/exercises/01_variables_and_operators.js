/* 1)VARIABLES AND OPERATORS
     a) Variables and Operators
        Create two numeric variables and use the sum operator 
        to store the sum value of both numbers in a 3rd variable.*/
var value1, value2, value3;
value1=8;
value2=4;
value3=value1 + value2;
console.log("exercise 1-a:" + value3);       
    /*b) Create two String variables and concatenate them 
        saving the result in a 3rd variable. */
var string1, string2, string3;
string1= "JavaScript exercises: ";
string2= "Here we go.";
string3= string1 + string2;
console.log("exercise 1-b:" + string3);      
    /*c) Create two String variables and add the length of each 
        variable (number of letters of the string) 
        saving the result of the sum in a 3rd variable */
var string_a, string_b,quant1, quant2, quant3;
string_a="abc";
string_b="defg";
quant1=string_a.length;
quant2=string_b.length;
quant3=string_a.length + string_b.length;
console.log("exercise 1-c:" + quant3);  
