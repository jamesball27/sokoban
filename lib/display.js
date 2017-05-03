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
        case 'A':
        case 'ArrowLeft':
          this.board.moveCharacter('left');
          break;
        case 'S':
        case 'ArrowDown':
          this.board.moveCharacter('down');
          break;
        case 'D':
        case 'ArrowRight':
          this.board.moveCharacter('right');
          break;
        case 'W':
        case 'ArrowUp':
          this.board.moveCharacter('up');
          break;
      }

      this.draw();
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.board.map.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (tile !== ' ') {
          this.drawTile(tile, j, i);
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
      case '#': // wall
        return 'black';
      case '@': // character
        return 'red';
      case '$': // box
        return 'yellow';
      case '*': // box on goal square
        return 'green';
      case '.': // goal square
        return 'pink';
    }
  }
}

export default Display;
