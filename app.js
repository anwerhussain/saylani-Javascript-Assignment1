//1. Write a program that takes input a name from user & greet the user like this:

var name = prompt("Enter your Name");
alert("Hi "+name);

/*2. Write a program to take input a number from user & display
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by
default.*/

var num = +prompt("Enter Number for Table");
var times = 1;
if(num !== 0){
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
}
else{
num = 5;
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
document.write(num + " x " + times + " = " + num*times +"<br />");times++
}

/*3. Write a program to take “city” name as input from user. If user
enters “Karachi”, welcome the user like this: “Welcome to city
of lights”*/

var city = prompt("Enter Name of City");
if(city==="Karachi" || city==="karachi"){
    alert("Welcome to the City of Lights");
}
else{   alert("Not from Karachi");   }

/*4. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma’am.*/

var gender = prompt("Enter Gender");
if(gender==="male" || gender==="Male")
{
    alert("Good Morning Sir!");
}
else if(gender==="female" || gender==="Female")
{
    alert("Good Morning Ma'am!");
}
else alert("Enter Something");

/*5. Write a program to take input color of road traffic signal from
the user & show the message according to this table:*/

var signal = prompt("Enter Signal Light Color");
if(signal==="Red" || signal==="red"){ alert("vehicles must stop");    }
else if(signal==="Yellow" || signal==="yellow"){ alert("Vvehicles should get ready to move");    }
else if(signal==="Green" || signal==="green"){ alert("Vehicles can move now");    }

/*6. Write a program to take input max age & current age from
user. If the current age is less than or equal to max age, show the message “You are welcome”*/

var maxage = +prompt("Enter Maximum Age");
var currage = +prompt("Enter Current Age");
if(currage <= maxage){  alert("You are Welcome");   }
else{   alert("Not Welome");    }

/*7. Write a program to take input remaining fuel in car (in litres)
from user. If the current fuel is less than 0.25litres, show the
message “Please refill the fuel in your car”*/

var fuel = +prompt("Enter Fuel in Liters")
if(fuel < 0.25){    alert("Please refill fuel in your Car");    }
else{   alert("Good to Go");    }

//8. Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

/*9. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute grade asper following table:*/

var urdu = +prompt("Enter marks in Urdu");
var english = +prompt("Enter marks in English");
var maths = +prompt("Enter marks in Maths");
var tmarks = +prompt("Enter Total Marks");
var total = urdu+english+maths;
var per = Math.round(total/tmarks*100);
var grade;
var remarks;
if(per >= 80){  grade = "A-one";  remarks="Excellent";  }
else if(per >= 70){  grade = "A"; remarks="Good";   }
else if(per >= 60){  grade = "B"; remarks="You need to improve";   }
else if(per < 60){  grade = "Fail"; remarks="Sorry";   }
document.write("<h2>Marks Sheet</h2><br />");
document.write("Total Marks = "+tmarks+"<br />");
document.write("Marks Obtained = "+ total+"<br />");
document.write("Percentage " + total/tmarks*100+"% <br />");
document.write("Grade " +grade+"<br />");
document.write("Remarks " +remarks+"<br />");


/*10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser*/

var nameItem1 = prompt("Enter name of Item # 1");
var nameItem2 = prompt("Enter name of Item # 2");
var priceItem1 = +prompt("Enter price of Item # 1");
var priceItem2 = +prompt("Enter price of Item # 2");
var qtyItem1 = +prompt("Enter quantity of Item # 1");
var qtyItem2 = +prompt("Enter quantity of Item # 2");
var shipCharges = +prompt("Enter Shipping Charges");
var totalCost = (priceItem1*qtyItem1)+(priceItem2*qtyItem2)+shipCharges;
document.write("<h2>Shopping Cart</h2><br />");
document.write("Price of "+nameItem1+" is "+priceItem1+"<br />");
document.write("Quantity of "+nameItem1+" is "+qtyItem1+"<br />");
document.write("Price of "+nameItem2+" is "+priceItem2+"<br />");
document.write("Quantity of "+nameItem2+" is "+qtyItem2+"<br /><br />");
document.write("Shipping Charges "+shipCharges+"<br /><br />");
if(totalCost > 2000) {
    document.write("Total Cost of Your Order is "+totalCost+"<br />");
    document.write("Discounted Price is "+(totalCost*0.90)+"<br />");
}
else{ 
    document.write("Total Cost of Your Order is "+totalCost+"<br />"); 
 }


/*11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correctanswer”.
b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.*/

var secNum = 4;
var guessNum = +prompt("Guess the Number");
if(guessNum === secNum){ alert("Bingo!!!!");  }
else if(guessNum === secNum+1){ alert("Close enough to the correct answer");    }


/*12. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is divisible by 3.*/

var divNum = +prompt("Enter number to be divided by 3")
if((divNum % 3) == 0){  alert("Number is fully divided by 3");  }
else{  alert("Number cannot be fully divided by 3");  }

/*13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if there is a tie. (Team A or Team B)*/

var nameTeam1 = prompt("Enter name of Team # 1");
var nameTeam2 = prompt("Enter name of Team # 2");
var scoreTeam1 = prompt("Enter score of Team # 1");
var scoreTeam2 = prompt("Enter score of Team # 2");
if(scoreTeam1 > scoreTeam2){    alert(nameTeam1 + " wins"); }
else if(scoreTeam1 < scoreTeam2){    alert(nameTeam2 + " wins"); }
else {  alert("Its a Tie"); }

/*14. Take a string, a number and a Boolean in three variables.
Write a program that checks the type of variables & responds accordingly. Like :*/

var x = prompt("Enter string number or boolean");
alert(typeof x);

//15. Write a program that checks whether the given input is an even number or an odd number.

var a = +prompt("Enter any Number");
if(a % 2 == 0) {    alert("Even Number");  }
else{    alert("Odd Number");  }

/*16. Weather in Karachi nowadays is too cool, write a program that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/

var temp = +prompt("Enter temperature of Karachi");
if(temp>40){    alert("It is too hot outside."); }
else if(temp>30){    alert("The Weather today is Normal."); }
else if(temp>20){    alert("Today’s Weather is cool."); }
else if(temp>10){    alert("OMG! Today’s weather is so Cool."); }

/*17. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user*/

var firstNumber = +prompt("Enter First Number");
var secNumber = +prompt("Enter Second Number");
var op = prompt("Enter symbol of operation e.g: (+, -, *, /, %)");
if(op == '+'){   alert(firstNumber +" + "+secNumber +" = "+ (firstNumber + secNumber)); }
else if(op == '-'){   alert(firstNumber +" - "+secNumber +" = "+ (firstNumber - secNumber)); }
else if(op == '*'){   alert(firstNumber +" * "+secNumber +" = "+ (firstNumber * secNumber)); }
else if(op == '/'){   alert(firstNumber +" / "+secNumber +" = "+ (firstNumber / secNumber)); }
else if(op == '%'){   alert(firstNumber +" % "+secNumber +" = "+ (firstNumber % secNumber)); }

/*18. Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”.*/

var day = prompt("Enter Day");
day = day.toLowerCase();
if(day === "monday" || day=== "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    alert("It’s a week day");
}
else if (day === "saturday"){   alert("It's weekend");  }
else if (day === "sunday"){   alert("Yay! It’s a holiday");  }

/*19. Write a program that takes input user’s score, if it’s greater
than 50, say “You are passed”. Otherwise, show “Try again!”*/

var uscore = +prompt("Enter Score of User");
if(uscore > 50) {   alert("You are passed");    }
else{   alert("Try Again!!");   }

/*20. Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater
number of 5 and 10 is 10.").*/

var fnum = +prompt("Enter First Number");
var snum = +prompt("Enter Second Number");
if(fnum > snum){    alert("The greater number of "+fnum+" and "+snum+" is "+fnum);  }
else if(fnum < snum){    alert("The greater number of "+fnum+" and "+snum+" is "+snum);  }
else if(fnum == snum){    alert("Both Numbers are Equal");  }

/*21. The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of
hello world in different languages)*/

var langCode = prompt("Enter language code like fr for French, de for Dutch, en for English");
if(langCode === "en"){  alert("Hello World"); }
else if(langCode === "fr"){  alert("Bonjour le monde"); }
else if(langCode === "de"){  alert("Hallo Wereld"); }

//22. Write a program to take input a number & tell whether it’s a positive or negative number.

var ponumber = +prompt("Enter Number to check positive or negative");
if(ponumber > 0){   alert("Its a Positive Number"); }
else if(ponumber < 0){   alert("Its a Negative Number"); }

/*23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1 dog".
Run the program for a few different inputs and show the result to make sure it works.*/

var no = +prompt("Enter Number");
var noun = prompt("Enter Noun");
if(no>1){   alert(no+" "+noun+"s"); }
if(no<=1){   alert(no+" "+noun); }