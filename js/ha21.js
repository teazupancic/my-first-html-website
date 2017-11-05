//simplest statement, useless
1;
!false;

//var indicates we are going to define a variable
var caught = 5*5;

//now the variable name can be used as expression
var ten = 10;
console.log(ten*ten);

//we can change the value
var mood = "light";
console.log(mood);
var mood = "dark";
console.log(mood);


var debt = 140;
debt = debt - 35;
console.log(debt);

//variable without value
var one;
console.log(one); //undefined

//words mit special meaning, keywords such as for, break, true can't be names of var

//functions
//alert("Hey"); //window pops on screen

//output of function, return value = 4
console.log(Math.max(2,4));

console.log(Math.min(2,4)+100);

//prompt and confirm
//confirm("Shall we go?") //window pops up, cancel or ok are t and f

//prompt("message","text in the widow") //window pop up, question, input text, cancel,ok

//programm goes from top to bottom, first you give a number, than alert, if you put in chees there will be no output
//var theNumber = Number(prompt("Pick a number", ""));
//alert("Your number is the square root of " + theNumber * theNumber);

//if executes or skipes a statement, depending on the condition 
if (1<2){
    console.log("true");
}
else{
    console.log("false");
}

//isNaN
console.log(isNaN(3)); //false
console.log(isNaN(null)); //false
console.log(isNaN("k")); //true

//if, else if, else, check more conditions

//LOOPS: we don't have to repeat k line of code multiple times
//print numbers from 0 to 5
var number = 0;
while (number <= 5){
    console.log(number);
    number++;
}
//difference between while and do while - we don't know how many times we want to repeat it
var x = 4;
while (x < 3) {
    console.log("while loop");
}
do {
    console.log("do while loop");
} while (x < 3)
//do while executes at least once 

//for loop, we know how many times we want to repeat it
for (var i = 0 ; i<=5 ; i++){
    console.log(i);
}

//breaking out of the loop
i = 1;
while (true){
    if (i % 2 == 0){
        break;
    }
    i++;
}
console.log(i);
//continue jumps to the next iteration 

// (i++) == (i = i + 1) == (i += 1)

/* too long
if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();
*/
/*
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
*/

//one line comment
/* multi
line 
comment
*/

//triangle
for (i = 1 ; i<=7 ; i++){
    for (var j = 1 ; j<=i ; j++ ){
        process.stdout.write("#"); //no new line unlike console.log
    }
    console.log("\n");
}