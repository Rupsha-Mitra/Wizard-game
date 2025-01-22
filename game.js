//canvas board
let canvas;
let board;

let tileWidth = 200;
let tileHeight = 400;

let boardWidth = tileWidth * 8;
let boardHeight = tileHeight * 2;

//tile 


//document.getElementById("start-game").addEventListener("click", startGame);
window.onload = function() { 
    canvas = document.getElementById("board");
    canvas.width = boardWidth;
    canvas.height = boardHeight;

    board = canvas.getContext("2d");
};
/*function startGame() {
    canvas = document.getElementById("board");
    canvas.width = boardWidth;
    canvas.height = boardHeight;

    board = canvas.getContext('2d');
    board.fillStyle = 'black';
    board.fillRect(0, 0, boardWidth, boardHeight);
}*/