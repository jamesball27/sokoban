import Board from './board';
import Display from './display';
import Game from './game';
import Map from './map';

// # Wall
// @ Player
// $ Box
// * Box on goal square
// . Goal square
// + Character on goal square

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
