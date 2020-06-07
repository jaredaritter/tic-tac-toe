"use strict";
// GAMEBOARD, PLAYERS, LOGIC
// ALL INSIDE IIFE AS ONLY NEED SINGLE INSTANCE OF GAME
// ONE INSTANCE OF GAME BOARD SO MODULE
// MULTIPLE INSTANCES OF PLAYERS SO FACTORY
// ONE INSTANCE OF LOGIC SO MODULE

// HAVE CLICK EVENTS CHANGE GAMEBOARD
// GAMEBOARD CHANGES RE-RENDER THE PAGE
// GAMEBOARD NOTIFIES LOGIC OF CHANGE? 
// DOESN'T SEEM LIKE GOOD PATTERN

// CLICK EVENT SENDS CHOICE TO LOGIC
// LOGIC NOTIFIES GAMEBOARD OF PROPER MARKER AND LOCATION
//  GAMEBOARD RE-RENDERS PAGE
//  GAMEBOARD SENDS NEW BOARD BACK TO LOGIC TO EVALUATE FOR WIN?
// LOGIC CHANGES PLAYER
// LOGIC CHECKS IF WIN CONDITION HAS BEEN MET
//  IF WIN CONDITION MET IT STOPS GAME AND NOTIFIES PLAYER

// GAME 

// ANONYMOUS IFFE
const gameboard = (() => {
    
    // GAMEBOARD ARRAY
    const gameboard = [
        'X', 'X', 'X',
        'X', 'X', 'X',
        'X', 'X', 'X'
    ]

    // RENDERS GAMEBOARD ARRAY TO SCREEN
    const render = () => {
        clear();
        const board = document.querySelector('.board');
        gameboard.forEach(cell => {
            const choice = document.createElement('div');
            choice.textContent = cell;
            choice.setAttribute('class', 'cell');
            board.appendChild(choice);
        })
    }

    // CLEARS CURRENT GAMEBOARD
    const clear = () => {
        const board = document.querySelector('.board');
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
    }

    render();

    return {render};

})();

const Player = function(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
}

const gameLogic = (() => {
    // PLAYER1 STARTS
    // CLICK EVENT LISTENERS TO SEE CHOICE
    // SLEEP ON IT
})()

const player1 = new Player('player1', 'X');
const player2 = new Player('player2', 'O');