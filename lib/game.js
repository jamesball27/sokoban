class Game {
  constructor(board, display) {
    this.board = board;
    this.display = display;

    this.won = false;
  }

  play() {
    this.display.draw();
  }
}

export default Game;
