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
//  GAMEBOARD UPDATES CELL WITH NEW ARRAY INFORMATION FROM EVENT
// GAMEBOARD SENDS NEW LAYOUT TO LOGIC
// LOGIC CHECKS IF WIN CONDITION MET, OR IF ALL SQUARES USED (DRAW)
// IF NOT MET THEN CHANGE PLAYER
// SEND INFORMATION BACK TO GAMEBOARD TO ALLOW UPDATE OF SCREEN INFORMATION

// GAME 

// ANONYMOUS IIFE
const display = (() => {
    
    // GAMEBOARD ARRAY AND TURN COUNT -------------------------------------------------------------------

    const gameboard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]

    let turn = 1;
    let gameOver = false;

    // RENDERS, CLEARS, AND ADDS LISTENERS TO GAMEBOARD-----------------------------------------------------

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

    const clear = () => {
        const board = document.querySelector('.board');
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
    }

    const setListeners = () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', clickHappens);
        });
    }

    // FUNCTIONS TRIGGERS ON CLICK--------------------------------------------------------------------------

    const clickHappens = event => {
        if (gameOver) return;
        if (event.target.textContent !== '') return;
        // NEEDS CONDITIONAL TO SEPERATE CLICK EVENT FROM COMPUTER INPUT
        updateBoard(event);
        updateCell(event);
        checkIfWin();
        turn++;
        // computerPlay();
    }

    const updateBoard = event => {
        if (turn % 2 === 1) {
            gameboard[event.target.dataset.index] = player1.getMarker();
        } else if (turn % 2 === 0) {
            gameboard[event.target.dataset.index] = player2.getMarker(); 
        } else {
            console.log('ERROR');
        }
        // console.log(gameboard);
        console.log(turn);
    }

    const updateCell = event => {
        event.target.textContent = gameboard[event.target.dataset.index];
    }

    // WIN CONDITION FUNCTION ------------------------------------------------------------------

    const checkIfWin = () => {
        const wins = {
            firstRow: [0, 1, 2],
            secondRow: [3, 4, 5],
            thirdRow: [6, 7, 8], 
            firstColumn: [0, 3, 6],
            secondColumn: [1, 4, 7],
            thirdColumn: [2, 5, 8],
            downRight: [0, 4, 8],
            downLeft: [2, 4, 6]
        }
        let marker = '';

        if (turn % 2  === 1) {
            marker = player1.getMarker();
        } else if (turn % 2 === 0) {
            marker = player2.getMarker();
        } else {
            console.log('ERROR');
        }

        for (const prop in wins) {
            if (gameboard[wins[prop][0]] === marker &&
                gameboard[wins[prop][1]] === marker &&
                gameboard[wins[prop][2]] === marker) {
                    console.log(`${marker} wins!`);
                    gameOver = true;
                    break;
            }
        }

        if (turn === 9) console.log('Draw?');
    }

    // COMPUTER PLAY --------------------------------------------------------------------------------
    
    const computerPlay = () => {
        const compChoice = 1;
        updateBoard(compChoice);
        console.log(gameboard);
    }

    // PUBLIC FUNCTION TO SHOW GAMEBOARD ARRAY SAFELY------------------------------------------------

    const showGameboard = () => {
        return gameboard;
    }

    // INITIALIZE GAME BOARD AND RETURN PUBLIC INFORMATION (IF ANY)------------------------------------

    render();
    setListeners();

    return {showGameboard};

})();

// PLAYER CONSTRUCTOR AND INITIALIZED PLAYERS-----------------------------------------------------------

const Player = function(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
}

const player1 = new Player('player1', 'X');
const player2 = new Player('player2', 'O');

//--------------------------------------------------------------------------------------------------------

// GOING TO USE INTERNAL FUNCTION TO GET WORKING AND MOVE OUTSIDE IF NEEDED AFTER MORE RESEARCH

// const gameLogic = ()=> {
//     console.log('test');
//     let board = gameboard.showGameboard();
//     console.log(board);
//     // let gameboard = []
//     // console.log(gameboard);
//     // return function getGameboard(gameboard){
//     //     const board = gameboard;
//     // }
//     // PLAYER1 STARTS
//     // CLICK EVENT LISTENERS TO SEE CHOICE
//     // SLEEP ON IT
// };
