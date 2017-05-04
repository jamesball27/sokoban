class Display {
  constructor(board) {
    const canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.board = board;
    this.tileSize = 50;

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

    if (this.board.won()) {
      this.ctx.fillStyle = 'yellow';
      this.ctx.fillRect(0, 0, 100, 100);
    }
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
}

export default Display;
