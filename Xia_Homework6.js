
//1.
var firstScript = 1;
var secondScript = 2;

function addition (){
	return firstScript + secondScript;
}

console.log(addition());

firstScript = "String Script";
secondScript ="Second String Script";

console.log(addition());



//2. 
var firstSetAnimal = ["dog","cat","hamster"];
var secondSetAnimal = ["elephant", "lion", "rhino"];
var arrayOfAnimals = [firstSetAnimal, secondSetAnimal];

function outPut(){
	for(var i = 0; i < 1; i++) {
		var input = arrayOfAnimals[i];
		outPut2(input);
	}
}

function outPut2 (input){
	for (var i = 0; i < 2; i++){
		var holder = input[i];
		console.log(holder);
	}
}

outPut();

//3.

function checkPrompt(){
	var holderForPrompt = prompt("type something crazy", "Type away");
	var checker = holderForPrompt.length;

	if( checker < 100){
		alert("It is less than 100");

	}else {
		alert("It is this long: " + checker)
	}

}

//4.Ran the code

//5.

function checkIfSameVariable (){
	var holderForPrompt = prompt("Type something in", "Type something or \"Lakers\" ");
	var matchingVariable = "Lakers";

	if (holderForPrompt === matchingVariable){
		alert("It is the same");

	}else {
		alert("It is not the same");
	
	}

}

//6.

var name = prompt("Please enter a name");

function checker(name){
	console.log(name);

}

checker(name);



//7.

function testRun(){
	console.log("Please Print this.");
}

testRun();

//8.
function  multiDoors(){
	var entry = prompt("what do you want", "Cat, Dog, Sheep")
		switch(entry){
			case 'Cat': alert("The boo boo");
			break;
			case 'Dog' : alert("The no go");
			break; 
			case 'Sheep': alert("The what");
			break;
			default:alert("Well at least your tried");
		}
}
multiDoors();


// I can also do it in the html combined way if that's what you wanted

// Js:
// function multiDoors(){
// var entry= document.getElementById("testing").value;

// switch (entry){....
 

// HTML: 

// <body>
// <input type="text" name="" id= "testing">
// <div onclick= "multiDoors()">button </div>
// <script type="text/javascript" src= "helpful.js" ></script>
// </body>














}





