const pokemon = require('pokemon');

function pokemonPrint() {
    let randomPokemon = pokemon.random();
    console.log(`Today's lucky Pokemon is coming from the printer file ${randomPokemon}`);
}

function pokemonNameFromNumber(targetNumber) {
    let result = pokemon.getName(targetNumber);
    return result;
}

module.exports = {
    pokemonPrint,
    pokemonNameFromNumber
}