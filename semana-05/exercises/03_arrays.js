/*3)Arrays
a)Given the following array: ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"] display by console the months 5 and 11 (use console.log).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log(array_months[4],array_months[10]);
/*b)Sort the months array alphabetically and display it by console
(use sort).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 array_months.sort();
 console.log(array_months.sort());
/*c)Add an element to the beginning and end of the array 
(use unshift and push).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log(array_months.unshift("Start"));
 console.log(array_months.push("End"));
 console.log(array_months);
/*d)Remove an element from the beginning and end of the array 
(use shift and pop).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log(array_months.shift("January"));
 console.log(array_months.pop("December"));
 console.log(array_months);
/*e)Reverse the order of the array (use reverse).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log(array_months.reverse());
/*f)Join all elements of the array into a single string where 
each month is separated by a hyphen - (use join).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log(array_months.join("-"));
/*g)Create a copy of the months array containing from May to November 
(use slice).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
console.log(array_months.slice([4],[11]));


