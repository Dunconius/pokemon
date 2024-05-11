require('dotenv').config();
const { CustomFancyError } = require('./cutsomerror');
const pokemonPrintFile = require("./pokemonPrint");
const {pokemonNameFromNumber} = require('./pokemonPrint')

var prompt = require('prompt-sync')({sigint: true});
//
// get input from the user.
//

function app() {

    let userWantsToExit = false;

    do {
        
        let n = parseFloat(prompt("What number of pokemon do you want to see?"));
        
        if (Number.isNaN(n)) {
            // throw new Error("User did not enter a number!!!");
            throw new CustomFancyError("Custom error for NaN!")
        }

        try {
            let pokemonName = pokemonNameFromNumber(n);
            console.log(`Your Pokemon is ${pokemonName}! How exciting!`);
            
        } catch (error) {
            console.log('Try a number between 1 - 1025');
        } finally {
            let userInputToExit = prompt("Would you like to try again?");
    
            if (userInputToExit == "y") {
                userWantsToExit = false;
            } else {
                userWantsToExit = true;
            }
        }
        
        
        // console.log('You entered: ' + n);


    } while (userWantsToExit == false);
}

try {
    app();
} catch (error) {
    console.log('Gracefully shutting down...');
    console.log(error.message);
    console.log(JSON.stringify(error));
}

// console.log("Terminal app is running");

// console.log(process.env.ENVIRONMENT_MESSAGE);

// pokemonPrintFile.pokemonPrint();

console.log("Bye! Terminal app finished");