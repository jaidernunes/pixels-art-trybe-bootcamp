/* eslint-disable no-param-reassign */
function paintBox() {
  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = colorize();
  color[2].style.backgroundColor = colorize();
  color[3].style.backgroundColor = colorize();
  color[0].addEventListener('click', clickPalette);
  color[1].addEventListener('click', clickPalette);
  color[2].addEventListener('click', clickPalette);
  color[3].addEventListener('click', clickPalette);
}
paintBox();

function clickPalette (event) {
    const color = document.getElementsByClassName('color');
    color[0].className = 'color';
    color[1].className = 'color';
    color[2].className = 'color';
    color[3].className = 'color';
    // const color = document.getElementsByClassName('color');
    // for (let i = 0; i < color.lenght; i += 0) {
    //     color[i].className = 'color';
    //     console.log(color[i])
    // } NAO SEI PQ NAO FUNCIONOU @_@
    event.target.className = 'color selected';
}

function applyColor (event) {
    let selectedColor = document.getElementsByClassName('selected')[0];
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
}
function pixelAddListener () {
    let pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', applyColor);
}
}
// 9 - Crie um botão que retorne a cor do quadro para a cor inicial.
// Sua página deve ter um botão que, ao ser clicado, deixe todos os pixels do quadro com a cor branca

// O que será testado:

// O botão deve possuir o ID clear-board;

// O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

// O botão deve possuir o texto Limpar;

// O botão ao ser clicado, deve deixar todos os pixels do quadro preenchidos de branco.

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
function clearBoard () {
    let pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
}
}

// 10 - Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels.
// // A página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels

function createPixels (number) {
    const boardSize = (42 * number) + 'px';
    const pixel = document.getElementsByClassName('pixel');
    while(pixel.length > 0){
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
}
createPixels (5);

pixelAddListener()

// const inputButton = document.getElementById('generate-board');
// inputButton.addEventListener('click', getPixelsInput);
function getPixelsInput () {
    let pixelsInput = document.getElementById('board-size').value;
    if (pixelsInput < 5) {
        pixelsInput = 5;
    }
    if (pixelsInput > 50) {
        pixelsInput = 50;
    }
    if (pixelsInput !== true) {
        alert('Board inválido!');
    }
    createPixels (pixelsInput);
    console.log(pixelsInput);
}

// 12 - Crie uma função para gerar as cores aleatoriamente, com exceção da cor preta, ao carregar a página.
function colorize() {

    var
     r = ('0'+(Math.random()*255|0).toString(16)).slice(-2),
     g = ('0'+(Math.random()*255|0).toString(16)).slice(-2),
     b = ('0'+(Math.random()*255|0).toString(16)).slice(-2);
    return '#' +r+g+b;
   } // Créditos dessa função random RGB: https://stackoverflow.com/questions/43333119/random-color-for-tr