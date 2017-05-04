import Display from './display';

class Game {
  constructor(board) {
    this.board = board;
    this.display = new Display(this.board);
    this.addKeyEvents();
    this.display.draw();
  }

  play() {
    this.display.draw();
  }

  addKeyEvents() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();

      switch (e.key) {
        case 'a':
        case 'ArrowLeft':
          this.board.move('left');
          break;
        case 's':
        case 'ArrowDown':
          this.board.move('down');
          break;
        case 'd':
        case 'ArrowRight':
          this.board.move('right');
          break;
        case 'w':
        case 'ArrowUp':
          this.board.move('up');
          break;
      }

      this.display.draw();
    });
  }
}

export default Game;
