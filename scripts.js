
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
    
    
    document.querySelector('.face' + i).setAttribute("src","img/small-dice/dice" + randomArray [i] + ".svg");
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
const dice1 = document.getElementById("uno");
const dice2 = document.getElementById("dos");
const dice3 = document.getElementById("tres");
const dice4 = document.getElementById("quattro");
const dice5 = document.getElementById("cinco");
const dice6 = document.getElementById("seis");

function clickHighlight() {

    if (document.getElementById("uno").className === "dice") {
        document.getElementById("uno").setAttribute("class","highlight"); 
    
    } else {document.getElementById("uno").setAttribute("class", "dice");
};
};





