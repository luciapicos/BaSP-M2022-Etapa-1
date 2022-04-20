/*5)For
a)Create an array containing 5 words and traverse that array 
using a JavaScript for loop to display an alert using each of 
the words.*/
var array_five=["black","red","green","white","pink"]
array_five.forEach(element =>{
    alert("exercise 5-a:" + element);
});
/*b)To the above array convert the first letter of each word to 
uppercase and display an alert for each modified word.*/
var array_five, M_, array_five_M_;
array_five=["black","red","green","white","pink"]
M_=0;
array_five_M_=[];
for(M_ in array_five){
    array_five_M_.push(array_five[M_].charAt(0).toUpperCase()+array_five[M_].slice(1));
    alert("exercise 5-b:" + array_five_M_[M_]);
}
/*c)Create a variable called "sentence" that has an empty string, 
then run through the array from a) above with a for loop to store 
each word in the sentence variable. At the end display a single alert 
with the complete string.*/
var array_five, Sentence;
array_five=["black","red","green","white","pink"];
Sentence=" ";
L_=0;
for (L_ in array_five){
    Sentence=Sentence + ',' + array_five[L_];
}
alert("exercise 5-c:" + Sentence);
console.log(Sentence);
/*//OTHER OPTIONS (INCORRECT)//
var array_five, Sentence;
array_five=["black","red","green","white","pink"];
Sentence=" ";
array_five.forEach(element => {
    Sentence=element.toString();
    console.log(Sentence);  
});
//////////////////////////////
var array_five, Sentence;
array_five=["black","red","green","white","pink"];
Sentence=" ";
Sentence=array_five.toString();
alert(Sentence);
console.log(Sentence);*/
/*d)Create an empty array with a for loop of 10 repetitions. 
Fill the array with the number of the repetition, that is to 
say that at the end of the execution of the for loop there should 
be 10 elements inside the array, from number 0 to number 9. 
Display the final array in the browser console (use console.log).*/
var array_empty, j;
array_empty=[]
j=0;
for (j= 0; j< 10; j++) {
    array_empty.push(j);   
}
console.log("exercise 5-d:" + array_empty);