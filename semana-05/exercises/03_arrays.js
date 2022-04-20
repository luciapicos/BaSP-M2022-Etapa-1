/*3)Arrays
a)Given the following array: ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"] display by console the months 5 and 11 (use console.log).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log("exercise 3-a:" + array_months[4],array_months[10]);
/*b)Sort the months array alphabetically and display it by console
(use sort).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 array_months.sort();
 console.log("exercise 3-b:" + array_months.sort());
/*c)Add an element to the beginning and end of the array 
(use unshift and push).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log("exercise 3-c:" + array_months.unshift("Start"));
 console.log("exercise 3-c:" + array_months.push("End"));
 console.log("exercise 3-c:" + array_months);
/*d)Remove an element from the beginning and end of the array 
(use shift and pop).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log("exercise 3-d:" + array_months.shift("January"));
 console.log("exercise 3-d:" + array_months.pop("December"));
 console.log("exercise 3-d:" + array_months);
/*e)Reverse the order of the array (use reverse).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log("exercise 3-e:" + array_months.reverse());
/*f)Join all elements of the array into a single string where 
each month is separated by a hyphen - (use join).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
 console.log("exercise 3-f:" + array_months.join("-"));
/*g)Create a copy of the months array containing from May to November 
(use slice).*/
var array_months=["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November",
 "December"];
console.log("exercise 3-g:" + array_months.slice([4],[11]));


