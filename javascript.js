function rollDie1() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var image = document.querySelector('.die1 img');
    switch(dice1) {
        case 1:
            image.src = "/images/dice1.png";
            break;
        case 2:
            image.src = "/images/dice2.png";
            break;
        case 3:
            image.src = "/images/dice3.png";
            break;
        case 4:
            image.src = "/images/dice4.png";
            break;
        case 5:
            image.src = "/images/dice5.png";
            break;
        case 6:
            image.src = "/images/dice6.png";
            break;
    }

    return dice1; // Return the dice value for comparison
}

function rollDie2() {
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var image = document.querySelector('.die2 img');
    switch(dice2) {
        case 1:
            image.src = "/images/dice1.png";
            break;
        case 2:
            image.src = "/images/dice2.png";
            break;
        case 3:
            image.src = "/images/dice3.png";
            break;
        case 4:
            image.src = "/images/dice4.png";
            break;
        case 5:
            image.src = "/images/dice5.png";
            break;
        case 6:
            image.src = "/images/dice6.png";
            break;
    }

    return dice2; // Return the dice value for comparison
}

function updateWinnerText() {
    var dice1 = rollDie1();
    var dice2 = rollDie2();

    if (dice1 > dice2) {
        document.getElementById('txt').innerHTML = "Player One Won!";
    } else if (dice1 < dice2) {
        document.getElementById('txt').innerHTML = "Player Two Won!"; 
    } else {
        document.getElementById('txt').innerHTML = "It's a Draw!";
    }
}

window.onload(updateWinnerText()+rollDie1()+rollDie2());