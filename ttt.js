let boardDB = (function() {
    let boardState = [['', '', ''], ['', '', ''], ['', '', '']];
    let winCondition = false;
    let winner = '';
    
    function resetBoardState () {
        boardState = [['', '', ''], ['', '', ''], ['', '', '']];
        winCondition = false;
        winner = '';
    }

    function setWinner (winningPlayer) {
        winner = winningPlayer;
        winCondition = true;
        console.log('winner ', winner)
        console.log('winCondition ', winCondition)
    }

    function updateState (i, j) {
        console.log(winCondition)
        // update the boardState array
        if (boardState[i][j] !== '' || winCondition === true) {
            return
        }
        let currentTurnChar = ''
        let turnsPassed = boardState.flat().filter(elem => elem !== '').length;
        if (turnsPassed % 2 === 0) {
            currentTurnChar = 'X';
        }
        else {
            currentTurnChar = 'O';
        }
        boardState[i][j] = currentTurnChar;
        console.log(boardState)

        // update the div text based on boardState array
        const updateDiv = document.getElementById('board' + String(i) + String(j));
        updateDiv.textContent = boardDB.boardState[i][j];
    
        function getUniqueNonBlankValuesFromArray (arr) {
            let counts = {};
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== '') {
                    counts[arr[i]] = 1 + (counts[arr[i]] || 0);
                }
            }
            console.log('counts ', counts)
            return counts
        }

        // check if win condition is met
        for (let row=0; row<3; row++) {
            const arr = boardState[row];
            let counts = getUniqueNonBlankValuesFromArray(arr);
            if (Math.max(... Object.values(counts)) === 3) {
                console.log(boardState[row][0] + ' won');
                setWinner(boardState[row][0]);
            }
        }
        for (let col=0; col<3; col++) {
            const arr = [boardState[0][col], boardState[1][col], boardState[2][col]];
            let counts = getUniqueNonBlankValuesFromArray(arr);
            if (Math.max(... Object.values(counts)) === 3) {
                console.log(boardState[0][col] + ' won')
                setWinner(boardState[0][col]);
            }
        }
        let diagTopLBotR = [boardState[0][0], boardState[1][1], boardState[2][2]];
        let diagTopRBotL = [boardState[0][2], boardState[1][1], boardState[2][0]];
        if (Math.max(... Object.values(getUniqueNonBlankValuesFromArray(diagTopLBotR))) === 3) {
            console.log(boardState[0][0] + ' won')
            setWinner(boardState[0][0]);
        }
        if (Math.max(... Object.values(getUniqueNonBlankValuesFromArray(diagTopRBotL))) === 3) {
            console.log(boardState[0][2] + ' won')
            setWinner(boardState[0][2]);
        }
    }
    
    return {
        boardState,
        updateState,
        resetBoardState
    }
})();

function makeBoard () {
    const board = document.querySelector('#board');
    board.textContent = '' // clear all DOM subnodes for when we reset the board 
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            const div = document.createElement('div');
            const divId = 'board' + parseInt(i) + parseInt(j);
            div.setAttribute('id', divId);
            div.textContent = '';
            div.addEventListener('click', function(event) {
                console.log(divId);
                boardDB.updateState(parseInt(i),parseInt(j));
            })
            board.appendChild(div);
        }
    }
};

makeBoard()
document.getElementById('reset-button').addEventListener('click', function(event) {
    console.log('hi');
    makeBoard();
    boardDB.resetBoardState();
})

console.log(boardDB.boardState)