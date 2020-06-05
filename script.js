// GAMEBOARD, PLAYERS, LOGIC
// ALL INSIDE IIFE AS ONLY NEED SINGLE INSTANCE OF GAME
// ONE INSTANCE OF GAME BOARD SO MODULE
// MULTIPLE INSTANCES OF PLAYERS SO FACTORY
// ONE INSTANCE OF LOGIC SO MODULE

// GAME 

console.log('game');
// ANONYMOUS IFFE
const gameboard = (() => {
    console.log('gameboard');
    const gameboard = [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
    ]
})()

const Player = function(name) {
    console.log('player');
    const getName = () => name;
    return {getName};
}

const logic = (() => {
    console.log('logic');
    // some logic goes here
})()