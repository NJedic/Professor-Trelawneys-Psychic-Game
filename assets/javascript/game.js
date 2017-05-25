//Variables
//============================

//This array holds all of the potential letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//We start our game with the wins counter at zero
var wins = 0;

//We start our game with the losses counter at zero
var losses = 0;

//We start our game with 9 guesses
var guessesRemaining = 9;

//This empty array will hold our guessed letters
var lettersArray = [];


//Functions
//============================

//Function to reset the game when you run out of guesses
function reset(){
	losses++;
	lettersArray = [];
	guessesRemaining = 9;
}


//Main Game
//============================

//Function is run whenever the user presses a key
document.onkeyup = function(event) {

	// //determines which key was pressed
	var userGuess = event.key;

	//Computer randomly chooses a letter from the "letters" Array
	var chosenLetter = letters[Math.floor(Math.random() * letters.length)];
	
	
	//If there are still guesses remaining...
	if(guessesRemaining >=0){

		//If the user guessed letter matches the randomly generated letter
		if (userGuess === chosenLetter){
			//Alert the user they are a wonderful psychic and should keep going
			alert("Ooooo you got it! Professor Trelawney can sense a kindred spirit! We might have a seer on our hands!")
			//Wins gets updated +1
			wins++;
			//Guesses Remaining stays the same
			guessesRemaining = 9;
			//The guessed lettersArray remains empty
			lettersArray = [];
		}

		//If the user guessed letter does not match the randomly generated letter
		else if (userGuess != chosenLetter){
			//Remaining guesses -1
			guessesRemaining--;
			//letter gets pushed into our empty array
			lettersArray.push(userGuess);
		}

		//If there are no more remaining guesses
		if (guessesRemaining === 0){
			//Alert the user as to how disappointing they are as a psychic and how they should be ashamed of themselves
			alert("Professor Trelawney is very disappointed. Try Again!");
			//Call the game reset function
			reset();
		}
	}


//Variable that defines how letters are displayed in the letters array!
var allTheGuesses = " ";
	//for loop that runs through all the letters
 	for (i = 0; i < lettersArray.length; i++) {
		if ( allTheGuesses != " " ) {
			allTheGuesses = allTheGuesses  + " , " + lettersArray[i]; } 
		else 
			{ allTheGuesses = lettersArray[i]; }

	 }

//concatenating what will be written to the DOM 
var html =
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses left: " + guessesRemaining + "</p>" +
"<p>Your guesses so far: " + allTheGuesses + "</p>";

//Writes everything to the DOM when the game begins!
document.querySelector("#gamePlay").innerHTML = html;

} 

	


