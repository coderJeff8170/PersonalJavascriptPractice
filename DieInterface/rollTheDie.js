//random die roll function called every time button is pushed
//and show a corresponding face in the html for each roll.
var dieArray = ['one.png','two.png','three.png','four.png','five.png','six.png'];
function rollDie() {
    let roll =
    (Math.floor(Math.random() * 6));
    document.getElementById("die").src = dieArray[roll]; 
}
//yay!
//ok, now do six with one roll.