var randomArray = [];

function rollDice () {
    var randomArray = [] 
for (let i=0; i < 6; i++) {

    randomArray.push(Math.floor(Math.random() *6) + 1)

    document.querySelector('.face' + i).setAttribute("src","img/small-dice/dice" + randomArray [i] + ".svg");
}
};


function holdDice (dice, highlight) {
    var dice = document.getElementById('seis');
    
};


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
