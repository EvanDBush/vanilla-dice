
//  Array of Random NUmbers --------------------------------------------
let randomArray = [];
var myRoll = Math.floor(Math.random() *6) + 1;
var rollScore = 0;
const totalPlayers = parseInt(prompt('How many players? (1-8)'));

// Adds Player Names to Score grid ---------------------------------------

function addPlayers () {
    
let totalPlayers = parseInt(prompt('How many players? (1-8)'));
    for (let i=0; i < totalPlayers; i++) {
    let playerName = prompt('Enter a name for Player' + (i+1));
    document.querySelector(`#player${i + 1}`).innerHTML = playerName;
    }; 
    for (let i= 8; i > totalPlayers; i= i-1) {
    document.querySelector(`#item-${i}`).style.display = "none";
    };
};


//  Assigns dice SVGs to Array of Random Numbers ------------------------------------


function rollDice () {

    let randomArray = [];
    for (let i=0; i < 6; i++) {
    var myRoll = Math.floor(Math.random() *6) + 1;
    randomArray.push(myRoll);
        if (document.getElementById("dice"+ (i+1)).className === "dice") {
    
    document.querySelector('.face' + i).setAttribute("src","img/small-dice/face" + randomArray [i] + ".svg");
        };
    };
randomArray.sort();
    if (randomArray[0] === 1) {
        rollScore += 100;
    };
};

// Highlights dice on click -----------------------------------------
const diceOne = "dice1";
const diceTwo = "dice2";
const diceThree = "dice3";
const diceFour = "dice4";
const diceFive = "dice5";
const diceSix = "dice6";

function clickHighlight(diceOne) {
    if (document.getElementById(diceOne).className === "dice") {
        document.getElementById(diceOne).setAttribute("class","highlight"); 
    } else {document.getElementById(diceOne).setAttribute("class", "dice");
    };
};

// Submits score to player ----------------------
let i = 1;

function submitScore() {
    
    const playerElement = document.getElementById("item-" + i);
    const pointsElement = document.getElementById("p" + i + "-points");
    let enteredScore = parseInt(document.getElementById("score-input").value);
        if (i < totalPlayers) {
    let nextPlayer = document.getElementById("item-" + (i+1));
    pointsElement.innerHTML = enteredScore + parseInt(pointsElement.innerHTML);
    playerElement.setAttribute("class", "inert-player");
    nextPlayer.setAttribute("class", "active-player");
    i = i + 1;
        } else {  
        
        i === totalPlayers;
        console.log("total should be (8)" + i);
        pointsElement.innerHTML = enteredScore + parseInt(pointsElement.innerHTML);
        playerElement.setAttribute("class", "inert-player");
        
        i = 1;
        let nextPlayer = document.getElementById("item-" + i);
        nextPlayer.setAttribute("class", "active");
};  
    document.getElementById("score-input").value = 0;
};

let chorus = 
[
"Ice, Ice Baby",
"Vanilla Ice, Ice Baby",
"Vanilla Ice, Ice Baby",
"Vanilla Ice, Ice Baby",
"Vanilla"
]

let songLyrics = 
[
    "Ice, ice baby",
    "Alright stop, collaborate and listen, Ice is back with my brand new invention",
    "Something grabs a hold of me tightly, Flow like a harpoon daily and nightly",
    "Will it ever stop? Yo, I don't know. Turn off the lights, and I'll glow",
    "To the extreme, I rock a mic like a vandal. Light up a stage and wax a chump like a candle",
    "Dance, go rush to the speaker that booms. I'm killing your brain like a poisonous mushroom",
    "Deadly, when I play a dope melody, Anything less than the best is a felony",
    "Love it or leave it, you better gangway. You better hit bull's eye, the kid don't play",
    "If there was a problem, yo, I'll solve it. Check out the hook while my DJ revolves it",
    "Vanilla Ice, ice baby",
    "Now that the party is jumping. With the bass kicked in, and the Vegas are pumping",
    "Quick to the point, to the point, no faking, Cooking MCs like a pound of bacon",
    "Burning them, if you ain't quick and nimble. I go crazy when I hear a cymbal",
    "And a hi-hat with a souped up tempo, I'm on a roll, it's time to go solo",
    "Rollin' in my 5.0, With my rag-top down so my hair can blow",
    'The girlies on standby, waving just to say "Hi" "Did you stop?" "No, I just drove by"',
    "Kept on, pursuing to the next stop I busted a left, and I'm heading to the next block",
    "The block was dead, yo So I continued to A1A Beachfront Avenue",
    "Girls were hot wearing less than bikinis Rockman lovers driving Lamborghinis",
    "Jealous, 'cause I'm out getting mine Shay with a gauge, and Vanilla with a nine",
    "Ready for the chumps on the wall The chumps acting ill because they're full of eight ball",
    "Gunshots rang out like a bell I grabbed my nine, all I heard were shells",
    "Falling on the concrete real fast Jumped in my car, slammed on the gas",
    "Bumper to bumper, the avenue's packed I'm trying to get away before the jackers jack",
    "Police on the scene, you know what I mean They passed me up, confronted all the dope fiends",
    "Take heed cause I'm a lyrical poet Miami's on the scene, just in case you didn't know it",
    "My town, that created all the bass sound nough to shake and kick holes in the ground",
    "'Cause my style's like a chemical spill Feasible rhymes that you can vision and feel",
    "Conducted and formed, this is a hell of a concept We make it hype, and you want to step",
    "With this, Shay plays on the fade Slice like a ninja, cut like a razor blade",
    'So fast, other DJs say "Damn!" If my rhyme was a drug, Id sell it by the gram',
    "Keep my composure, when it's time to get loose Magnetized by the mic while I kick my juice",
    "If there was a problem, yo, I'll solve it Check out the hook while my DJ revolves it",
    "Yo man, let's get out of here Word to your mother",
    "Ice, ice baby, too cold Ice, Ice Baby, too Cold, too Cold Ice, Ice Baby, too Cold,", 
    "too Cold Ice, Ice baby, too cold, too cold"
];

var lineRandom = Math.floor(Math.random() * songLyrics.length);

function refreshlyrics () {

    document.getElementById("display-box").innerHTML= (songLyrics[lineRandom] + " . " + chorus).toString().toUpperCase();
};

refreshlyrics();

// ------------------------------ creates highlighter reset button --------------------------------------------

// document.getElementById("resetbtn").addEventListener("click", resetDice());
// document.querySelector(".item-g").addEventListener("click", refreshlyrics());

function resetDice() {
    
    for (let i=0; i < 6; i++) {
        if (document.getElementById("dice"+ (i+1)).className === "highlight") {
            document.querySelector(".highlight").setAttribute("class", "dice")
        };
    };
};

// --------------------- Hide RuleBox -----------------------------------

let ruleBox = document.getElementById("rule-box");
let ruleButton = document.getElementById("rule-button")

ruleButton.addEventListener("click", () => {
    if (ruleBox.className === "hide") {
        ruleBox.setAttribute("class", "show");
    } else {
        ruleBox.setAttribute("class", "hide")} 
});
