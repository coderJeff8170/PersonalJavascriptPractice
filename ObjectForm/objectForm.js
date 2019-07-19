//object form

let playerArray = [];

class Player {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
}

function addPlayer() {
    var x = document.getElementById("myText").value;
    playerArray.push(x);
    console.log(playerArray);
  }

function done(array) {
    var playerScoreArray = [];
    for (i=0; i<array.length; i++) {
        playerScoreArray[i] = new Player(array[i], 0);
        //playerScoreArray.push(player[i]);
        console.log(playerScoreArray[i]);
    }
    //go to game screen, random player, loop through players each round
    //starting with random player
    //Modal with player's name between each round.
}

