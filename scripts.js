
// ---------------------------- Array of Random NUmbers --------------------------------------------
let randomArray = [];
var myRoll = Math.floor(Math.random() *6) + 1;
var rollScore = 0;

const totalPlayers = parseInt(prompt('How many players? (1-8)'));




// ---------------------------- Create player object to keep score? ---------------------------------
let gamePlayers = {
    playerName: player1,
    rollScore: 0,
    totalScore: 0,
    heldDice: [],
    //roll history?

}

// ----------------------------- Adds Player Names to Score grid -----------------------------------------------

function addPlayers () {

    let totalPlayers = parseInt(prompt('How many players? (1-8)'));

for (let j=0; j < totalPlayers; j++) {

    let playerName = prompt('Enter a name for Player' + (j+1));
    
    console.log(playerName, typeof playerName);
    
    document.querySelector(`#player${j + 1}`).innerHTML = playerName;

}; 

for (let j= 8; j > totalPlayers; j= j-1) {
    document.querySelector(`#item-${j}`).style.display = "none";
};
};



// ----------------------------- Assigns dice SVGs to Array of Random Numbers ------------------------------------


function rollDice () {
    let randomArray = [];

for (let i=0; i < 6; i++) {
    
    var myRoll = Math.floor(Math.random() *6) + 1;
    
    randomArray.push(myRoll);
    
        if (document.getElementById("dice"+ (i+1)).className === "dice") {
    
    document.querySelector('.face' + i).setAttribute("src","img/small-dice/face" + randomArray [i] + ".svg");
    }
};
    randomArray.sort();

    
    if (randomArray[0] === 1) {
        rollScore += 100;
};

console.log(randomArray);
console.log(rollScore);

};

// ---------------------------- Trying to set up a way to hold dice from roll dice function, while keeping their position/image. --------------------
let heldDice = [
    [randomArray[0], true],
    [randomArray[1], true],
    [randomArray[2], true],
    [randomArray[3], true],
    [randomArray[4], true],
    [randomArray[5], true],
];


// ------------------------------ Highlights dice on click -----------------------------------------
const dice1 = "dice1";
const dice2 = "dice2";
const dice3 = "dice3";
const dice4 = "dice4";
const dice5 = "dice5";
const dice6 = "dice6";


function clickHighlight(dice1) {

    if (document.getElementById(dice1).className === "dice") {
        document.getElementById(dice1).setAttribute("class","highlight"); 
    
    } else {document.getElementById(dice1).setAttribute("class", "dice");
};
};

// ------------------------------ creates highlighter reset button --------------------------------------------

document.getElementById("resetbtn").addEventListener("click", resetDice());

function resetDice() {

    for (let i=0; i < 6; i++) {
    
        if (document.getElementById("dice"+ (i+1)).className === "highlight") {
        
            document.querySelector(".highlight").setAttribute("class", "dice")
        };
    };
};

// ------------------------------- Submits score to player ----------------------





let j = 1;

console.log("this is the starting J  (1)" + j)

function submitScore() {

    const playerElement = document.getElementById("item-" + j);
    const pointsElement = document.getElementById("p" + j + "-points");
    
    let enteredScore = parseInt(document.getElementById("score-input").value);
    
    if (j < totalPlayers) {

    let nextPlayer = document.getElementById("item-" + (j+1));
    
    pointsElement.innerHTML = enteredScore + parseInt(pointsElement.innerHTML);
    playerElement.setAttribute("class", "inert");
    nextPlayer.setAttribute("class", "active");
    j = j + 1;
    
    console.log("nextPlayer is +1 J=" + j);
    console.log(nextPlayer);
    }

    else {  
        
        j === totalPlayers;
        console.log("total should be (8)" + j);
        
        
        pointsElement.innerHTML = enteredScore + parseInt(pointsElement.innerHTML);
        playerElement.setAttribute("class", "inert");
        
        j = 1;
        
        let nextPlayer = document.getElementById("item-" + j);
        nextPlayer.setAttribute("class", "active");
        ;
        console.log("should be (1) after j reached" + j);
        console.log("after total player equal to J" + nextPlayer);
};

    document.getElementById("score-input").value = 0;

};
    

