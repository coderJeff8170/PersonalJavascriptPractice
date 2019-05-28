//six random dice roll function called every time button is pushed
//and show a corresponding face in the html for each dice/roll.
var dieArray = ['one.png','two.png','three.png','four.png','five.png','six.png'];
var rollValues = [];
var points = 0;

function rollDice() {
    for(i=0; i<=5; i++) {
    let roll = (Math.floor(Math.random() * 6));
    document.getElementById(`die${[i]}`).src = dieArray[roll];
    rollValues.push(roll);
    }

    //tally points
    //if all dice are same, points = 1000
    //- maybe use .filter? yup! you can filter 1s, 3s, 5s, see how many are in there
    //take Michael's advice and write this stuff on paper.

    //if no points, next player, assign farkle (if player gets three farkles in a row, -1000 points)

    //if there are three of a kind, 
    console.log(rollValues);
    console.log(points);
}

//fuck yeah!
//now, you're gonna have to return an array of values from the loops.
//yes!!
//now, you're gonna tally the initial score and temporarily disble roll button..
//to tally, (read the arrays chapter again....?)




//then ask if they want to keep it as is, or keep certain dice and roll again
//if they want to keep it as is, next player and tally score
//if they want to keep going, click keep dice and roll again


