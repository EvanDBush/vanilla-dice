let randomArray = [];

function rollDice () {
    let randomArray = [] 
for (let i=0; i < 6; i++) {

    randomArray.push(Math.floor(Math.random() *6) + 1)

    document.querySelector('.face' + i).setAttribute("src","img/small-dice/dice" + randomArray [i] + ".svg");
}

console.log(randomArray);

};

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
