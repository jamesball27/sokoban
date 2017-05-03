import BoardView from './board_view';


// # Wall
// @ Player
// $ Box
// * Box on goal square
// . Goal square

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
  const board = new BoardView(map);
  board.draw();
});
