/// target the p target
var messageElement =  document.getElementById("winnerMessage");
/// target the square element
var squareElementsHTMLCollection = document.getElementsByClassName('boxes');

var showCrossFirst = true;

var squareElementsArray = [...squareElementsHTMLCollection];

squareElementsArray.forEach(box => box.addEventListener("click", registerMove));

var crossMoves = [];

var naughtMoves = [];

function registerMove(){
  // this section is for crosses
   if (showCrossFirst && this.innerHTML === "") {

     this.innerHTML="X"

     var idValue = this.getAttribute("id");

     crossMoves.push(idValue);

     showCrossFirst = false;

   }
   // this section is for naughts
   else if (!showCrossFirst && this.innerHTML === "") {

     this.innerHTML="O"

     var idValue = this.getAttribute("id");

     naughtMoves.push(idValue);

     showCrossFirst = true;

   }

   messageElement.innerHTML = checkScore();
}

function checkScore(){
  var arrayOfScoreCombinations = [
    ["0","1","2"], ["3","4","5"], ["6","7","8"],
    ["0","3","6"], ["1","4","7"], ["2","5","8"],
    ["2","4","6"], ["0","4","8"]
  ];

  //go throuh each combination and check whether each member is present in the array

  var logMessage = arrayOfScoreCombinations.some(combination => combination.every(number => crossMoves.includes(number))) ? "crossWins" :
  arrayOfScoreCombinations.some(combination => combination.every(number => naughtMoves.includes(number))) ?
  "naughtsWins" : "";

   return logMessage;

}
