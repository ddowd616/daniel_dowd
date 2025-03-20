const pokemon = require("pokemon");

console.log(pokemon.random());

const  pokeDex = [];
let min = 10;
let max = 100;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//for each pokemon - name and attack
//pokemon = {name:value, attack:value}
for (let i = 0;i<5;i++){
    let pokemonCharacter = {name:pokemon.random(),
    attack: getRndInteger(min,max)}
    pokeDex[i] = pokemonCharacter;
}
console.log(pokeDex);

//for each pokemon, create a random attack number between 10 - 100

//need a container to hold pokemon

//for each pokemon - name and attack
//pokemon = {name:value, attack:value}

//we need to update each pokemon with new attack

// attacks need to be random - research Math methods