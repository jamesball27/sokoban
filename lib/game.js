import Display from './display';
import Map from './map.js';
import Board from './board.js';

class Game {
  constructor(levels) {
    this.levels = levels;
    this.reset(0);
    this.display.populateLevelSelector(levels, this.changeLevel.bind(this));
  }

  reset(level) {
    const map = new Map(this.levels[level]);
    const board = new Board(map);
    const display = new Display(board);
    this.display = display;
  }

  changeLevel(e) {
    e.preventDefault();
    this.reset(e.target.value);
  }

}

export default Game;
