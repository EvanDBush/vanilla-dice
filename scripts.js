
// Array of Random NUmbers
let randomArray = [];
var myRoll = Math.floor(Math.random() *6) + 1;

//assigns dice SVGs to Array of Random Numbers
function rollDice () {
    let randomArray = [];
    var rollScore = 0;

for (let i=0; i < 6; i++) {
    
    var myRoll = Math.floor(Math.random() *6) + 1;
    
    randomArray.push(myRoll);
    // randomArray.push(Math.floor(Math.random() *6) + 1)
    
    
    document.querySelector('.face' + i).setAttribute("src","img/small-dice/face" + randomArray [i] + ".svg");
    // console.log(totalNumber);
}
    randomArray.sort();

    // if (randomArray[0]) = 1 {
    //     rollScore += 100;

    //};

    // document.querySelector(`#player${j + 1}`).p.innertext = `${rollscore}`; 

console.log(randomArray);
console.log(rollScore);

};

//Adds Player Names to Score grid

function addPlayers () {

    const totalPlayers = parseInt(prompt('How many players are there? (1-8)'));

for (let j=0; j < totalPlayers; j++) {

    let playerName = prompt('Enter a name for Player' + (j+1));
    
    console.log(playerName, typeof playerName);
    
    document.querySelector(`#player${j + 1}`).innerHTML = playerName;

}; 

for (let j= 8; j > totalPlayers; j= j-1) {
    document.querySelector(`#item-${j}`).style.display = "none";
};
};

// highlights dice on click
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





