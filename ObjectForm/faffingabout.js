let myArray = [];
let myObjectArray = [];
let myArray2 = ['Jeff', 'Sophia', 'Jennifer'];

class Player {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    /* set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set score(score) {
        this._score = score;
    }

    get score() {
        return this._score;
    } */
    //set score to zero?
}

/* const firstPlayer = new Player('jeff', 0);
console.log(firstPlayer);//works */

function done(array) {
    var myObjectArray = [];
    for (i=0; i<array.length; i++) {
        myObjectArray[i] = new Player(array[i], 0);
        //myObjectArray.push(player[i]);
    }
    //myObjectArray[2].score = 150;
    console.log(myObjectArray);
}

//done(myArray2);


//soooo how to make this work:
/* function done(array) {
    array.forEach(function(element) {
        let x = new Player(element, 0);
        myObjectArray.push(x);
      });
console.log(array);
console.log(array[0].score);
} */