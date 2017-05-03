import Board from './board';
import Display from './display';
import Game from './game';

// # Wall
// @ Player
// $ Box
// * Box on goal square
// . Goal square

// make map an object with methods? or a class?
const map = [
  ['#','#','#','#','#','#','#'],
  ['#','.','@',' ','#',' ','#'],
  ['#','$','*',' ','$',' ','#'],
  ['#',' ',' ',' ','$',' ','#'],
  ['#',' ','.','.',' ',' ','#'],
  ['#',' ',' ','*',' ',' ','#'],
  ['#','#','#','#','#','#','#']
];

document.addEventListener('DOMContentLoaded', () => {
  const board = new Board(map);
  const display = new Display(board);
  const game = new Game(board, display);
  game.play();
});
