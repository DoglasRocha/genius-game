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
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
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
    }, number + 100)
}

// checks if the clicked buttons are the same of the generated game order
const checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score} \nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

// function for user click
const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

// functions that returns the color
const createColorElement = (color_number) => {

    let numbers_and_colors = {0: green,
                              1: red,
                              2: yellow,
                              3: blue};

    return numbers_and_colors[color_number]
}

// function for game next level
const nextLevel = () => {
    score++;
    shuffleOrder();
}

// function for game over
const gameOver = () => {
    alert(`Pontuação: ${score} \nVocê perdeu o jogo!!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// function that inits the game
const playGame = () => {
    score = 0;
    alert('Bem vindo Gênius. Iniciando novo jogo...');
    nextLevel();
}
 // click on colors events
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// game init
playGame();