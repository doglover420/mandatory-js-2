let board = Array.from(Array(9).keys());
const player1 = 'X';
const player2 = 'O';
const items = document.querySelectorAll('.flex-item');
const playerWon = document.querySelector(".playerWon");
const playerWonText = document.querySelector(".playerWon h2");
let playerTurn = true;
let player1Score = 0;
let player2Score = 0;
let foundWinner = false;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

startGame();

function startGame() {
  for (var i = 0; i < items.length; i++) {
   items[i].addEventListener('click', turnClick)
  }
}

function checkWinner() {
  winCombos.forEach((combo) => {
    if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] ) {
        if(board[combo[0]] === 'X') {
            player1Score++;
            document.querySelector('#p1Points h2').innerText = player1Score;
            playerWon.classList.remove('hidden');
            playerWonText.innerText = 'Player 1 Won!';
            
        }else if(board[combo[0]] === 'O') {
            player2Score++;
            document.querySelector('#p2Points h2').innerText = player2Score;
            playerWon.classList.remove('hidden');
            playerWonText.innerText = 'Player 2 Won!';
        } foundWinner = true;
    }
      let count = 0;
      for (var i = 0; i < board.length; i++) {
        if(board[i] === 'O' || board[i] === 'X') {
              count++;
        }
      }
      if (count === 9) {
        playerWon.classList.remove('hidden');
        playerWonText.innerText = "It's a tie!";
      }
   });
} 

function turnClick(item) {
  if(foundWinner){
    return;
  }
  turn(item.target.id)
}

function turn(itemId) {
  const i = parseInt(itemId);
  itemId = document.getElementById(itemId);
  if (itemId.innerText === '') {
    if (playerTurn) {
      playerTurn = playerTurn ? false : true;
      board[i] = player1;
      itemId.innerText = player1;
  }
  else {
    playerTurn = playerTurn ? false : true;
    board[i] = player2;
    itemId.innerText = player2;
    }
  }
  checkWinner();
}

function restartGame() {
  foundWinner = false;
  playerWon.classList.add('hidden');
  playerWonText.innerText = '';
  board = Array.from(Array(9).keys());
  for (var i = 0; i < items.length; i++) {
    items[i].innerText = '';
   }
}