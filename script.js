let order = [];
let clickedOrder = [];
let score = 0;

// 0: green, 1: red, 2: yellow and 3: blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order.push(colorOrder);
    clickedOrder = [];

    for(let i in order) {
        let elementcolor
    }
}