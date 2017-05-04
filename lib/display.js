class Display {
  constructor(board) {
    const canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.board = board;
    this.tileSize = 50;

    this.addKeyEvents();
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

      this.draw();
    });
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
      case 'wall': // wall
        return 'black';
      case 'characterOnGoal':
      case 'character': // character
        return 'red';
      case 'box': // box
        return 'yellow';
      case 'boxOnGoal': // box on goal square
        return 'green';
      case 'goal': // goal square
        return 'pink';
    }
  }
}

export default Display;
