/*6)Functions
a)Create a sum function that receives two numeric values and returns 
the result. Execute the function and save the result in a variable, 
displaying the value of that variable in the browser console.*/
var value1,value2, values_sum;
value1=6
value2=5
values_sum= (value1 + value2)
function sum_function(value1,value2){
    return value1 + value2;
}
console.log("exercise 6-a:" + values_sum);
/*b)To the previous sum function, add a validation to check if any of 
the parameters is not a number, display an alert that one of the 
parameters has an error and return the NaN value as the result.*/

/*c)Create a validate integer function that receives a number as parameter 
and returns true if it is an integer.*/

/*d)To the function sum of exercise 6b) add a call to validate that the 
numbers are integers. In case there are decimals, display an alert with 
the error and return the number converted to integer (rounded).*/

/*e)Convert the validation of the exercise 6d) in a separate function and 
call it inside the function sum testing that everything 
continues working the same.*/