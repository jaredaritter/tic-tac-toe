// GAMEBOARD, PLAYERS, LOGIC
// ALL INSIDE IIFE AS ONLY NEED SINGLE INSTANCE OF GAME
// ONE INSTANCE OF GAME BOARD SO MODULE
// MULTIPLE INSTANCES OF PLAYERS SO FACTORY
// ONE INSTANCE OF LOGIC SO MODULE

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

    const clear = () => {
        const board = document.querySelector('.board');
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
    }

    render();

    return {render};

})()

const Player = function(name) {
    const getName = () => name;
    return {getName};
}

const logic = (() => {
    // some logic goes here
})()