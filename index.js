require('dotenv').config();
const pokemonPrintFile = require("./pokemonPrint");

var prompt = require('prompt-sync')({sigint: true});
//
// get input from the user.
//

let userWantsToExit = false;

do {
    
    let n = parseFloat(prompt("What number of pokemon do you want to see?"));
    console.log('Tou entered: ' + n);

    let userInputToExit = prompt("Would you like to try again?");

    if (userInputToExit == "y") {
        userWantsToExit = false;
    } else {
        userWantsToExit = true;
    }

} while (userWantsToExit == false);



// console.log("Terminal app is running");

// console.log(process.env.ENVIRONMENT_MESSAGE);

// pokemonPrintFile.pokemonPrint();

console.log("Bye! Terminal app finished");