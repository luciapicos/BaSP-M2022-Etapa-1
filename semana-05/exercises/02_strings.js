
/*Strings
a)Create a string variable with at least 10 characters 
and convert all text to uppercase (use toUpperCase).*/
string= "javascript is lovely";
console.log(string.toUpperCase());
/*b)Create a string variable with at least 10 characters
 and generate a new string with the first 5 characters 
 saving the result in a new variable (use substring).*/
var string_b, new_string_b;
string_b="hello world";
new_string_b=string_b.substring(0,5);
console.log(new_string_b);
 /*c)Create a string variable with at least 10 characters 
and generate a new string with the last 3 characters saving 
the result in a new variable (use substring).*/
var string_c, new_string_c;
string_c="hello world";
new_string_c=string_c.substring(8,11);
console.log(new_string_c);
/*d)Create a string variable with at least 10 characters
 and generate a new string with the first letter in uppercase 
 and the others in lowercase. Save the result in a new variable 
 (use substring, toUpperCase, toLowerCase and the + operator).*/
var string_d, string_d_first, string_d_upper, string_d_rest, string_d_lower, comp;
string_d="abcdefghijk";
string_d_first=string_d.substring(0,1);
string_d_rest=string_d.substring(1,10);
string_d_upper=string_d_first.toUpperCase();
string_d_lower=string_d_rest.toLowerCase();
comp=string_d_upper + string_d_lower;
console.log(comp);
/*e)Create a string variable with at least 10 characters 
and some whitespace. Find the position of the first blank 
space and store it in a variable (use indexOf).*/
var string_e, string_white;
string_e="good morning";
string_white=string_e.indexOf(" ");
console.log(string_white);
/*f)Create a string variable with at least 2 long words 
(10 characters and some space in between). Use the methods 
from the previous exercises to generate a new string with the 
first letter of both words in uppercase and the other letters in 
lowercase (use indexOf, substring, toUpperCase, toLowerCase 
and the + operator).*/
var string_f1, string_f2, string_f3, string_f4, string_f5;
string_f1="HILARIOUS MAGAZINE";
string_f2=string_f1.substring(0,1);
string_f3=string_f1.substring(1,9);
string_f4=string_f3.toLowerCase();
string_f5=(string_f2 + string_f4)
var string_f7,string_f8, string_f9, string_f10;
string_f7=string_f1.substring(9,11);
string_f8=string_f1.substring(11,18);
string_f9=string_f8.toLowerCase();
string_f10=(string_f7 + string_f9)
console.log(string_f5 + string_f10);












