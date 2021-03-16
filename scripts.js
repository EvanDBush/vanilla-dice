let randomArray = [];
var myRoll = Math.floor(Math.random() *6) + 1;

const dice1 = document.getElementById("uno");
const dice2 = document.getElementById("dos");
const dice3 = document.getElementById("tres");
const dice4 = document.getElementById("quattro");
const dice5 = document.getElementById("cinco");
const dice6 = document.getElementById("seis");

function clickHighlight(element) {

    console.log(element);

    if (element.className === "dice") {
        element.setAttribute("class","highlight"); 
    };

    else {
        element.setAttribute("class", "dice");
};
};


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







// function invertToggle () {

//     let normalClass = document.querySelector("#normal");
//     let invertColor = normalClass.setAttribute("id", "#inverted");
//     let restoreColor = invertedClass.setAttribute("id", "#normal");    


//     if document.getElementById() = (normalClass) {
//         invertColor;
//     };



//     if (null) {
//         restoreColor;
//     };

    
    
// };


// function holdDice (dice, highlight) {
//     let dice = document.getElementById('seis');
    
// };


// let score = 0;

// randomarray.forEach(element => {
//     if [i] = 1 {
//         score += 100
//     };

//     if [i] = 5 {
//         score += 50
//     };

//     console.log(score)
// }); 




// attmpt 3
// var highlight = document.querySelector('.highlight');
// var dice = document.querySelector('.dice');

// function hold (dice, highlight) {
//     if (dice) {
//         dice = dice.setAttribute("class", "highlight");
//     };
//     if (highlight) {
//         highlight = highlight.setAttribute("class", "dice");
//     };
// };


// attempt 2
// const a= document.querySelector(".dice");
// const b= document.querySelector(".hold");

// function hold(a,b) {
//    for document.querySelector(".dice") {
//         setAttribute("class", "hold");
//     }
// }


// attempt 1

// function toggle (a,b) {
//     const a= document.querySelector(.dice")
//     const b= document.querySelector(.hold)
//     if a = b;
//     if b = a;
// }
