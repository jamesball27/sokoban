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
    clearInterval(window.timer);
    this.startTimer();
    const map = new Map(this.levels[level]);
    const board = new Board(map);
    this.display = new Display(board);
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

  startTimer() {
    this.time = 0;
    window.timer = setInterval(() => {
      this.display.displayTime(this.time);
      this.time += 1;
    }, 1000);
  }

}

export default Game;
