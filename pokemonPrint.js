function pokemonPrint() {
    const pokemon = require('pokemon');

    let randomPokemon = pokemon.random();
    console.log(`Today's lucky Pokemon is coming from the printer file ${randomPokemon}`);
}

module.exports = {
    pokemonPrint
}