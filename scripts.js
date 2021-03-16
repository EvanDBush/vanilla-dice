
// ---------------------------- Array of Random NUmbers --------------------------------------------
let randomArray = [];
var myRoll = Math.floor(Math.random() *6) + 1;

// ---------------------------- Create player object to keep score? ---------------------------------
let gamePlayers = {
    playerName: player1,
    rollScore: 0,
    totalScore: 0,
    heldDice: [],
    //roll history?

}

// ---------------------------- Trying to set up a way to hold dice from roll dice function, while keeping their position/image. --------------------
let heldDice = [
    [randomArray[0], true],
    [randomArray[1], true],
    [randomArray[2], true],
    [randomArray[3], true],
    [randomArray[4], true],
    [randomArray[5], true],
];

// -------------------------------- Adds Player Names to Score grid -----------------------------------------------

function addPlayers () {

    const totalPlayers = parseInt(prompt('How many players? (1-8)'));

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

    var rollScore = 0;

for (let i=0; i < 6; i++) {
    
    var myRoll = Math.floor(Math.random() *6) + 1;
    
    randomArray.push(myRoll);
    
    // 
    
    
    document.querySelector('.face' + i).setAttribute("src","img/small-dice/face" + randomArray [i] + ".svg");
    // console.log(totalNumber);
}
    randomArray.sort();

    if (randomArray[0] = 1) {
        rollScore += 100;
};

    document.querySelector(`#item-${j + 1}`).p.innertext = `${rollscore}`; 

console.log(randomArray);
console.log(rollScore);

};



// ------------------------------ highlights dice on click -----------------------------------------
const dice1 = "uno";
const dice2 = "dos";
const dice3 = "tres";
const dice4 = "quattro";
const dice5 = "cinco";
const dice6 = "seis";


function clickHighlight(dice1) {

    if (document.getElementById(dice1).className === "dice") {
        document.getElementById(dice1).setAttribute("class","highlight"); 
    
    } else {document.getElementById(dice1).setAttribute("class", "dice");
};
};





