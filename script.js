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

// WILL USE BELOW FOR PATTERN *********************************
// CLICK EVENT SENT TO GAMEBOARD
// GAMEBOARD ARRAY UPDATES WITH CHOICE
// GAMEBOARD SENDS NEW LAYOUT TO LOGIC
// LOGIC CHECKS IF WIN CONDITION MET, OR IF ALL SQUARES USED (DRAW)
// IF NOT MET THEN CHANGE PLAYER
// SEND INFORMATION BACK TO GAMEBOARD TO ALLOW UPDATE OF SCREEN INFORMATION

// GAME 

// ANONYMOUS IFFE
const gameboard = (() => {
    
    // GAMEBOARD ARRAY
    const gameboard = [
        'X', 'X', 'X',
        'X', 'X', 'X',
        'X', 'X', 'X'
    ]

    let turn = 1;

    // RENDERS GAMEBOARD ARRAY TO SCREEN
    const render = () => {
        clear();
        const board = document.querySelector('.board');
        let i = 0;
        gameboard.forEach(cell => {
            const choice = document.createElement('div');
            choice.textContent = cell;
            choice.setAttribute('class', 'cell');
            choice.setAttribute('data-index', i);
            board.appendChild(choice);
            i++
        })
    }

    // CLEARS CURRENT GAMEBOARD
    const clear = () => {
        const board = document.querySelector('.board');
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
    }

    const setListeners = () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', placeMarker);
        });
    }

    const placeMarker = event => {
        // NEEDS CONDITIONAL LOGIC TO ENSURE CANNOT PLACE IN OCCUPIED CELL
        if (turn % 2 === 1) {
            gameboard[event.target.dataset.index] = player1.getMarker();
        } else if (turn % 2 === 0) {
            gameboard[event.target.dataset.index] = player2.getMarker();
        } else {
            console.log('ERROR');
        }
        turn++;
        // console.log(gameboard);
        console.log(turn);
        updateCell(event);
    }

    const updateCell = event => {
        event.target.textContent = gameboard[event.target.dataset.index];
    }

    render();
    setListeners();

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