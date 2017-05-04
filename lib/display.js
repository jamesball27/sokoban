class Display {
  constructor(board) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.board = board;
    this.tileSize = 50;

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.board.map.grid.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (tile.type !== 'empty') {
          this.drawTile(tile.type, j, i);
        }
      });
    });

    this.handleWin();
  }

  drawTile(tileType, x, y) {
    this.ctx.fillStyle = this.setFillStyle(tileType);
    this.ctx.fillRect(
      x * this.tileSize,
      y * this.tileSize,
      this.tileSize,
      this.tileSize
    );
  }

  setFillStyle(tileType) {
    switch(tileType) {
      case 'wall':
        return 'black';
      case 'characterOnGoal':
      case 'character':
        return 'red';
      case 'box':
        return 'yellow';
      case 'boxOnGoal':
        return 'green';
      case 'goal':
        return 'lightblue';
    }
  }

  handleKeyDown(e) {
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

    this.draw();
  }

  handleWin() {
    if (this.board.won()) {
      const winModal = document.getElementById('win-modal');
      winModal.className = "";
      // this.canvas.className = 'hidden';
    }
  }
}

export default Display;
