'use strict';

(function makeBoard () {
    const board = document.querySelector('#board');
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            const div = document.createElement('div');
            const divId = 'board' + parseInt(i) + parseInt(j);
            div.setAttribute('id', divId);
            div.textContent = divId;
            //div.setAttribute('style', `border-style: solid;`);
            board.appendChild(div);
        }
    }
})();