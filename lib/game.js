import Display from './display';
import Map from './map.js';
import Board from './board.js';

class Game {
  constructor(levels) {
    this.levels = levels;
    this.currentLevel = 0;
    this.resetGame(this.currentLevel);

    this.display.populateLevelSelector(levels, this.changeLevel.bind(this));
    this.addLevelResetListener();
  }

  resetGame(level) {
    const map = new Map(this.levels[level]);
    const board = new Board(map);
    const display = new Display(board);
    this.display = display;
  }

  changeLevel(e) {
    e.preventDefault();
    this.currentLevel = e.target.value;
    this.resetGame(this.currentLevel);
  }

  addLevelResetListener() {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.resetGame(this.currentLevel);
    });
  }
}

export default Game;
