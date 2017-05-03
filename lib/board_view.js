class BoardView {
  constructor(map) {
    const canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.map = map;
    this.tileSize = 50;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.map.forEach((row, i) => {
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

export default BoardView;
