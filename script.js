let order = [];
let clickedOrder = [];
let score = 0;

// 0: green, 1: red, 2: yellow and 3: blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

// create random color order
const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order.push(colorOrder);
    clickedOrder = [];

    for(let i in order) {
        let elementcolor = createColorElement(order[i]);
        lightColor(elementcolor, Number(i) + 1);
    }
}

// lights the next color
const lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

// checks if the clicked buttons are the same of the generated game order
const checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.lenght) {
        alert(`Pontuação: ${score} \nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

// function for user click
const click = (color) => {
    clickedOrder.push(color);
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })

    checkOrder()
}

const createColorElement = () => {}