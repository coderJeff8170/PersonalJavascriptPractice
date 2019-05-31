let currentHand = [1, 5, 1, 3, 5, 3];
let crntPnts = 0;

//put hand in order, to check for pairs
let sortHand = currentHand.sort(function(a, b){return a-b});

//evaluate rolled dice after each turn unless player farkles

//function to check for a straight and add points if true.
function evalStraight(hand){
    for(i=0; i<hand.length-1; i++) {
        if (hand[i] != hand[i+1]) {
            return false;
        }
    }
    crntPnts = crntPnts + 1000;
    return true;
}
//function to evaluate hand for points
function evalHand(hand) {
    let ones = hand.filter(x => x === 1);
    let twos = hand.filter(x => x === 2);
    let threes = hand.filter(x => x === 3);
    let fours = hand.filter(x => x === 4);
    let fives = hand.filter(x => x === 5);
    let sixes = hand.filter(x => x === 6);

    if (hand[0] === hand[1] && hand[2] === hand[3] && hand[4] === hand[5]) {
        crntPnts = crntPnts + 500;
        return;
    }

    if (ones.length === 3) {
        crntPnts = crntPnts + 1000;
    } else {
        crntPnts = crntPnts + (ones.length * 100);
    }
    if (twos.length === 3) {
        crntPnts = crntPnts + 200;
    }
    if (threes.length === 3) {
        crntPnts = crntPnts + 300;
    }
    if (fours.length === 3) {
        crntPnts = crntPnts + 400;
    }
    if (fives.length === 3) {
        crntPnts = crntPnts + 500;
    } else {
        crntPnts = crntPnts + (fives.length * 50);
    }
    if (sixes.length === 3) {
        crntPnts = crntPnts + 600;
    }
}
//check for a straight and add points if true. If false, evaluate hand for points;
evalStraight(sortHand) ? true : evalHand(sortHand);

console.log(crntPnts);
