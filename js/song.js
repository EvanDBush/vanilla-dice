// ------------------------------- Song Lyrics Generator ---------------------------
let ice = "ice";
let bay = "ba";
let bee = "by";


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
    "If there was a problem, yo, I'll solve it Check out the hook while my DJ revolves it",
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

console.log(songLyrics.length);

var lineRandom = Math.floor(Math.random() * songLyrics.length);

function refreshlyrics () {

    document.getElementById("display-box").innerHTML= (songLyrics[lineRandom] + " . " + chorus).toString().toUpperCase();
};

refreshlyrics();



