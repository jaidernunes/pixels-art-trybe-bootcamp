/* eslint-disable no-param-reassign */
createPixels(5);
function paintBox() {
    const colorArray = [
        ['lightblue', 'blue', 'darkblue'],
        ['lightgreen', 'green', 'darkgreen'],
        ['pink', 'red', 'darkred'],
        ['red', 'blue', 'orange'],
        ['yellow', 'blue', 'green'],
        ['orange', 'yellow', 'red'],
        ['green', 'orange', 'brown'],
        ['purple', 'red', 'pink'],
        ['green', 'orange', 'yellow'],
        ['blue', 'darkblue', 'brown'],
        ['red', 'blue', 'green'],
        ['blue', 'yellow', 'red'],
        ['pink', 'orange', 'brown'],
        ['orange', 'red', 'pink'],
        ['gray', 'orange', 'yellow'],
        ['yellow', 'darkblue', 'brown'],
    ];
    let randomIndex = (Math.floor(Math.random() * 15));
    const color = document.getElementsByClassName('color');
    color[0].style.backgroundColor = 'black';
    color[1].style.backgroundColor = colorArray[randomIndex][0];
    color[2].style.backgroundColor = colorArray[randomIndex][1];
    color[3].style.backgroundColor = colorArray[randomIndex][2];
    color[0].addEventListener('click', clickPalette);
    color[1].addEventListener('click', clickPalette);
    color[2].addEventListener('click', clickPalette);
    color[3].addEventListener('click', clickPalette);
}
paintBox();
// DEFINIR FOTOS DE PERSONAGENS PARA FAZER PIXEL ART COM 4 cores

function clickPalette(event) {
    const color = document.getElementsByClassName('color');
    color[0].className = 'color';
    color[1].className = 'color';
    color[2].className = 'color';
    color[3].className = 'color';
    event.target.className = 'color selected';
}

function applyColor(event) {
    let selectedColor = document.getElementsByClassName('selected')[0];
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
}
function pixelAddListener() {
    let pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].addEventListener('click', applyColor);
    }
}

// 9 - Crie um botão que retorne a cor do quadro para a cor inicial.
// Sua página deve ter um botão que, ao ser clicado, deixe todos os pixels do quadro com a cor branca
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
function clearBoard() {
    let pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
    }
}

// 10 - Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels.
// // A página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels
function createPixels(number) {
    const boardSize = (42 * number) + 'px';
    const pixel = document.getElementsByClassName('pixel');
    while (pixel.length > 0) {
        pixel[0].parentNode.removeChild(pixel[0]);
    }
    for (i = 0; i < (number * number); i += 1) {
        const pixelBoard = document.getElementById('pixel-board');
        const createPixel = document.createElement('div');
        createPixel.className = 'pixel';
        pixelBoard.appendChild(createPixel);
        pixelBoard.style.width = (42 * number) + 'px';
        pixelBoard.style.height = (42 * number) + 'px';// [DUVIDA] PQ NAO FUNCIONA SE EU COLOCAR  WIDTH E HEIGHT FORA DO FOR?
    }
    pixelAddListener()
}

function getPixelsInput() {
    let pixelsInput = document.getElementById('board-size');
    if (pixelsInput.value < 5 && pixelsInput.value > 0) {
        pixelsInput.value = 5;
    }
    if (pixelsInput.value > 50) {
        pixelsInput.value = 50;
    }
    if (pixelsInput.value.length == 0) {
        alert('Board inválido!');
    }
    createPixels(pixelsInput.value);
}

// 12 - Crie uma função para gerar as cores aleatoriamente, com exceção da cor preta, ao carregar a página.
// function colorize() {

//     var
//      r = ('0'+(Math.random()*255|0).toString(16)).slice(-2),
//      g = ('0'+(Math.random()*255|0).toString(16)).slice(-2),
//      b = ('0'+(Math.random()*255|0).toString(16)).slice(-2);
//     return '#' +r+g+b;
//    } // Créditos dessa função random RGB: https://stackoverflow.com/questions/43333119/random-color-for-tr
// Decidi incorporar um array de arrays com paletas de cores pré definidas e randomizar o index.
