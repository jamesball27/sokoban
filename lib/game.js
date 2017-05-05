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
    this.addNextLevelListener();
  }

  resetGame(level) {
    clearInterval(window.timer);
    this.startTimer();
    const map = new Map(this.levels[level]);
    const board = new Board(map);
    this.display = new Display(board);
    this.display.currentLevel = this.currentLevel;
  }

  changeLevel(e) {
    e.preventDefault();
    this.currentLevel = e.target.value;
    this.display.updateSelectedLevel(e.target);
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
    window.time = 0;
    window.timer = setInterval(() => {
      this.display.displayTime(window.time);
      window.time += 1;
    }, 1000);
  }

  addNextLevelListener() {
    const nextLevel = document.getElementById('next-level');
    nextLevel.addEventListener('click', (e) => {
      e.preventDefault();
      const li = document.getElementById(`level-${this.currentLevel + 1}`);
      this.display.updateSelectedLevel(li);
      this.currentLevel += 1;
      this.resetGame(this.currentLevel);
      this.display.closeModal();
    });
  }
}

export default Game;
