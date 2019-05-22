
    let score = 0;

    function myFunction() {
        var x = document.getElementById("myText").value;
        score = score + 10;
        document.getElementById("playerName").innerHTML = `Player 1: ${x}`;
        document.getElementById("myScore").innerHTML = `Score: ${score}`;
        alert('you get 10 points!');
    }