import Board from './board';
import Display from './display';
import Game from './game';
import Map from './map';

// # Wall
// @ Player
// $ Box
// * Box on goal square
// . Goal square

// make map an object with methods? or a class?
const grid = [
  ['#','#','#','#','#','#','#'],
  ['#','.','@',' ','#',' ','#'],
  ['#','$','*',' ','$',' ','#'],
  ['#',' ',' ',' ','$',' ','#'],
  ['#',' ','.','.',' ',' ','#'],
  ['#',' ',' ','*',' ',' ','#'],
  ['#','#','#','#','#','#','#']
];

document.addEventListener('DOMContentLoaded', () => {
  const map = new Map(grid);
  const board = new Board(map);
  const display = new Display(board);
  const game = new Game(board, display);
  game.play();
});
