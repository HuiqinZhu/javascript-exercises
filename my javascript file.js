//if there is an error in javascript, it will never be shown the result starting from that part
 
 //create local storage
 var save = document.getElementById("save");
 var btn = document.getElementById("btn");
 btn.addEventListener("click", function(){    //addEventListener("operationName without on", function(){});
	 localStorage.information = save.value;    //localStorage.informationname = .value;
 }
 );
 document.write(localStorage.information + "<br>");  //document.write(localStorage.informationname + "<br/>");
 //save in the website and it will show up when refreshed again
 
 //create setTimeOut and setInterval function
 function time(){
	 alert("3 seconds passed");
 }
 function time1(){
	 alert("2 seconds passed again")
 }
 
 
 //create for each loop
 
 var books = {
     author : "Margaret Mitchell",    
     category : "survival, growth, independence and love",
     pages : 1024,
     is_meaningful : true,  //be careful about , or ;
     is_famous : true,
	 characters : [
	 {name : "Scalete",    //always remember to add quotation marks
	  gender : "female" ,
	  birthday : new Date("October 5, 1900")  //new Date(" ")
	 }, 
	 {name : "Red",       // { : , : ,}objects
	  gender : "male"   // [{}, {}] array of objects
	 }
	 ]
 };
 var animals = ["cats", "dogs", "lions", "humans"];  
 animals.forEach(function(animal){              //need to add parameter in function inside the forEach loop, whatever the element name is
	 document.write(animal + "<br>");
 })
 books.characters.forEach(function(element){
	 document.write(element.name + "<br>");      //element name can be used many times
	 document.write(element.gender + "<br><br>");  //forEach loop need to executed by a group of things that is at equal ranking
 }     // "<br/>" can be used technically
 )
 
 
 
 //create nested for loops and 2 dimension array
 var Number = [
 [0,2, 3,3],
 [4,5,6],
 [9,10]
 ];
 
 for(var o=0;o< Number.length; o++){
	 for(var p=0; p< Number[o].length; p++){
		 document.write(Number[0][p]);
	 }
	 document.write("<br/>");  //either "<br>" or "<br/>" is ok
 }
 
 
 for(var m = 0; m < 3; m++){
	 for(var n = 0; n < 4; n++){
	 document.write("m = " + m + "  n = " + n); 
	 document.write("<br>") //the another loop inside the main loop will show every situation in ech situation of the main loop 
	 }
	 
 }
 
 
 
 
 
 //create a multiple choice quiz   //we can store all kinds of contents in an array in the same time
 var questions = [
 {question : "What color are apples?\na.red\nb.yellow\nc.blue",   //array of objects
   answer : "a"
 },
 {question: "What color are bananas?\na.red\nb.yellow\nc.blue",
   answer : "b"
 }
 ]
 
       //define a variable such as soore or result to return
/*
 var score = 0;   //score shouldn't be inside the for loop, because the score will be set to the default each time the loop returns
 for(var l =0; l < questions.length; l++){    
	              
	 var response = window.prompt(questions[l].question);     //array can use index
	 if(response == questions[l].answer){
		 alert("Correct!");
		 score++;
	 }else{
		 alert("Wrong");
	 }
 }
 alert("You got a score of " + score + "/" + questions.length + " !");  //alert is very convenient, doesn't need to be printed out on the screen
 */
 
 
 //for loop 
 for(var k = 1; k < 10; k+=2){  //remember to define a new variable in a foo loop and use ; 
	 document.write(k);
 }
 
 var friends = ["Jane", "Jack", "Rose"]
 for(var h = 0; h < friends.length; h++){
	document.write("<br/>" + friends[h] + "<br/>");   //we can use for loop to get accessn to every element of an array
 }
 
 
 //create a guess game using while loop
 var password = "apple";
 var guess = "";    //just mention var guess is also ok
 var guessCount = 0;
 var guessLimit = 3;   //remember to add var when creating a new variable
 // while(guess != password && guessCount < guessLimit){
//	 guess = window.prompt("Enter your guess");
//	 guessCount++;
 //} 
 // if(guess == password){
//	 alert("you win!");   //alert is good 
// }else{
//	 alert("Guess no more than 3 times!");
// }
 
 
 
 
 
 
 i = 2;
 while(i <=100){
	 document.write(i + "<br/>");  //<br/>
	 i*=3;
 }
 
 j = 10;
 do{
	 document.write(j + "<br/>");
 }while(j>10)               //while loop and do while loop is different in sequece
 
 
 
 var myBook = {
     author : "Margaret Mitchell",    
     category : "survival, growth, independence and love",
     pages : 1024,
     is_meaningful : true,  //be careful about , or ;
     is_famous : true,
	 characters : [
	 {name : "Scalete",    //always remember to add quotation marks
	  gender : "female" ,
	  birthday : new Date("October 5, 1900")  //new Date(" ")
	 }, 
	 {name : "Red",       // { : , : ,}objects
	  gender : "male"   // [{}, {}] array of objects  array []  object{}  different from java
	 }
	 ]
 };
 document.write(myBook.author);
 document.write(myBook.characters[0].name);
 document.write(myBook.characters[0].birthday);
 
//create an object
var room = {                //attribute don't need quotation marks, but content need, except number and true/false 
	place : "Tokyo",
	is_beautiful : true,
	price : 30000,
	with_airconditioner : true,
	printIsGood : function(){
		if(this.is_beautiful = true && this.price <= 30000){  
			document.write("IS GOOD");
		}else{
			document.write("NOT THAT GOOD");    //already print it out in this function so not document.write again and remember tp give a ()
		}
	}   
};
 //this means the current content
//we can even call the current method and create a function inside an object
// be careful about the number of curly braces
room.place = "Toronto";   //we can update/modify content of object
document.write(room.place);   //calling the object's attribute/method
document.write(room.with_airconditioner);
room.printIsGood();   //take a rest and refresh the brain in time //when there is a function in method, use ()


function getDayName(dayNum){       //add parameter of function inside the parenthesis
	var day;              //write variable to print in and print out first. Just mention the variable type and the variable name
	switch(dayNum){   //use switch function inside another function that can return variable or return just inside the switch function
		case 1:
		day = "Monday";
		break;             //break everytime 
		case 2:
		day ="Tuesday";
		break;
		case 3:
		day ="Wednesday";
		break;
		case 4:
		day = "Thursday";   //more convenient than if function when there is the same parameter and different values
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day = "Saturday";
		break;
		case 7:
		day = "Sunday";
		break;
		default:            //add default setting in case the parameter is not valid
		day = "Day doesn't exist. Your "+ dayNum + "is not a valid day."
		break;
	}
	return day;
}
document.write("<div>"+ getDayName(7) + "</div>");   //format rule should be with <>



function max(n1, n2, n3){
	if(n1 > n2 && n1 > n3){
		return n1;          //remember to return things or document.write things inside the function
	}else if(n2 >n1 && n2> n3){
		return n2;
	}else{
		return n3
	}
}
document.write(max(3, 6, 7)); //remember to use document.write when only returning it inside the function and remember to mention the function

if("user" == "users"){
	document.write(true);
}else{
	document.write("<p>" + false + "</p>");  //format rule can only used inside the parenthesis
}


var isHuman = true;
var isConfident = true;
if(isHuman && isConfident){
	document.write("You are a confident human being");
}else if(isHuman && !isConfident){
	document.write("Be confident, and you can achieve everything");
}else if(!isHuman && !isConfident){
	document.write("You are not human being, but you can be a confident and beautiful being");
}else{
	document.write("You are not a human being, but you are a confident being" );  //be careful about the quotation marks
}


var button = document.getElementById("button");   //be careful abot correct spelling
var message = document.getElementById("message");
var textbox = document.getElementById("textbox");
button.addEventListener("click", function(){       //create list by document.createElement("li")   the quotation marks are necessary
    var newMessage = document.createElement("li");   //apend li in ul    make a list so that the printed out content wiil not be cleared up
	newMessage.innerHTML = textbox.value;   // .innerHTML =  .value;  
	//the difference between innerHTML and value???
	message.appendChild(newMessage);    // .appendChild(variablename);   ul is a container
	textbox.value = " ";      //clear up the content againi
});


var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
	this.style="box-shadow: 4px 4px 4px grey";  //box-shadow  means shadow around the image  3 sizes and color
	image.width = 450;
});
image.addEventListener("mouseout", function(){  //idName.addEventListener("operationName", function(){ this.content=  });
	this.style="";
	image.width = 300;   //this and idName both works
} );


//implement function in HTML whether calling function in HTML or getElementById and make function in js

function mouseover(element){    //means we can change content of element
	element.innerHTML = "check me or not";  
}

function mouseout(element){
	element.innerHTML = "Click me";
}

function handleClick(){   //make a set of mouseover and mouseout, so that it will return back to the original setting with mouseout
	alert("you checked me");
}


var search = document.getElementById("search");  //getElementById 
search.innerHTML = "Search it in Zhihu";  // innerHTML
search.style.color = "blue";
search.style = "backgroundColor:orange";
search.href = "https://www.zhihu.com";
search.target = "_blank";
var movie = document.getElementById("movie");
movie.src = "Beauty and the Beast.mp4";


function sayhi(){
	document.write("<p>hello user</p>");
}
sayhi();  //call method and execute it

function thank(name){
	document.write("<p>thank you, " + name + " </p>");  //can use HTML style rules inside"" in javascript
}
thank("Mike");   // must call the method and then it will be printed out  //string must be surounded with quotation marks
function add(num5, num6){
	return num5*num6;     //must use rerurn button to return the result of function
}
document.write(add(7,8));
var addNumber= add(9, 10);   //we can always conbime function and variable 
document.write("<p>" + addNumber+ "</p>"); //rule of html in " "


var fruit = new Array("apple", "banana", "orange");  //array is also represented as var, very convenient in javascript. 
var country =["China", "Canada", "UK", "USA"]; //var ... = [, , , ]   or  var ... = new Array(" , , ")
document.write(fruit);     // array is the 6th type of variable in javascript
document.write(country);   // able to put all kinds of variables in the same array. very convenient in javascript!!!
country[3] = "France";    // be able to change and print out each value of things in array 
document.write(country[0]);
document.write(country[3]);
var nature = "sky, soil, rock, water, air, tree, animal, life, 0, 1";
nature = nature.split(",")   //be able to catch variables among dilineators and create a new array! Just use the delineator method.
document.write(nature);
var plants = "tree!flower!grass!"
document.write(plants.split("!"));


var num1 = 2.3;
var num2 =3;
document.write(2 * 3.2);
document.write((num2 - num1) / 5);
document.write(9%2); //% means take remainder
document.write(Math.abs(-2.9));   //mention the class Math
document.write(Math.round(num1));
document.write(Math.round(Math.random()*20))
document.write(Math.max(9, 10));
document.write(Math.min(10, num1));
document.write(Math.pow(num2, 4));  // max, min, pow, sqrt, round, random, abs    and all these conbimed
document.write(Math.sqrt(36));  //call mathematic methods by Math.  very similiar to java  

// var num3 = window.prompt("add a number you want to add up: ");
// var num4 = window.prompt("add another number you want to add up: ");
//num3 = parseInt(num3);
//num4 = parseFloat(num4);   //everything user input will be considered as a string, so we should use parseInt or parseFloat 
// document.write(num3 + num4);      //parseInt and parseFloat



// var major = window.prompt("hey, what kind of skills will you learn a lot this year?");  //very easy way to get input. Just use window.prompt
// document.write("Hello, you will learn " + major + " a lot and very well this year!" );



var sentence = "Strings are fun";
var adj = "are cool";
document.write(sentence.length);
document.write(sentence.charAt(0));
document.write(sentence.indexOf("a"));
document.write(sentence.lastIndexOf("e"));
document.write(sentence.lastIndexOf("E")); //when the character is not there, it prints out -1   substring(, )
document.write(sentence.substring(0, 1)); //not include character in the last number
document.write(sentence.substring(sentence.indexOf("S"), sentence.indexOf(" "))); // conbine different methods to extract substrings
// use comments to check where is the error
// the number of parenthesis is very important especially when using multiple methods
// use " " when refering to the string of blank part  the difference between "" and " "
document.write(sentence.substring(sentence.indexOf("f"), sentence.length)); //to extract the last word/ the first word
document.write(sentence.toLowerCase()); //toLowerCase()
document.write(sentence.toUpperCase());
document.write(sentence + adj); // to concatenate different strings
document.write(sentence.includes("A"));
document.write(sentence.endsWith('fun'));
//includes in javascript, and contains in java!!!


var name = 'Hope';
document.write(name);
var GPA =3.8;
document.write(GPA);
var phrase=" to be or not to be";
document.write(phrase);
var is_female = true;   //whether is_female or isFemale is ok in javascript
document.write(is_female);
document.write("my link from Javasript is ok"); 
 //we can use any rules in HTML in document.write(""), in the "". Javasript is built to work with HTML
//document here means HTML document





//alert("It is working and can link up to multiple HTML files");






// remember to use ' ' in  "  ". Or it will make the program confused
//i the .js file, we can use any rules in programing language
//alert is what we see before really being shown the content of website
//always use ; in Javasript, just like what we do in Java

//"" or ' ' is both ok for Javasript

//number doesn't need  quotation marks//null means no value //undefined

var name1 = 'Koto';     
var GPA = 3.8;      
var weight = 90;       
var isFemaleemale = true;   //boolean value is true/false, without upper case!!!!!
var American_friend = null;  
var description = undefined;  
document.write( name);
// 5 kinds of variable: String, int or double/float, boolean, null, undefined. But all of them use the variable type/container name of var.
// variable can be changed anytime, just mention the name of variable

name1 = "Hope";
GPA = 3.9;   //not mention the variable tyoe name when changing the value, because we have defined the type before
document.write(name + "<p>has a GPA of</p>" + GPA );
