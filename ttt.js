'use strict';

(function makeBoard () {
    console.log('hi');
    const div = document.createElement('div');
    const container = document.querySelector('#board');
    div.textContent = 'test';
    div.setAttribute('id', 'test');
    container.appendChild(div)

})();
