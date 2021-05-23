'use strict';

(function makeBoard () {
    const board = document.querySelector('#board');
    board.setAttribute('style', `display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 5px; gird-template-rows: repeat(3, 1fr);`);
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            const div = document.createElement('div');
            const divId = 'board' + parseInt(i) + parseInt(j);
            div.setAttribute('id', divId);
            div.textContent = divId;
            div.setAttribute('style', `
            border-style: solid;
            justify-content: center;
            align-content: center;
            `);
            board.appendChild(div);
        }
    }
})();