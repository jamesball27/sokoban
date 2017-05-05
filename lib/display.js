class Display {
  constructor(board) {
    this.board = board;
    this.tileSize = 64;

    // this.canvasDiv = document.getElementById('canvas-div');
    // const canvas = document.createElement('canvas');
    // canvas.id = 'canvas';
    // this.canvasDiv.appendChild(canvas);

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.board.map.tileGrid[0].length * this.tileSize;
    this.canvas.height = this.board.map.tileGrid.length * this.tileSize;

    this.loadSpriteSheet();

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.board.map.tileGrid.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (tile.type !== 'empty') {
          this.drawTile(tile, j, i);
        }
      });
    });

    this.displayMoveCount();
    this.handleWin();
  }

  drawTile(tile, x, y) {
    const sprite = this.setSprite(tile.type);
      this.ctx.drawImage(
        this.sprites,
        sprite.x, sprite.y, this.tileSize, this.tileSize,
        x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize
      );
  }

  loadSpriteSheet() {
    this.sprites = new Image();
    this.sprites.src = './assets/sokoban_tilesheet.png';
    this.sprites.onload = () => {
      this.draw();
    };
  }

  setSprite(tileType) {
    switch(tileType) {
      case 'wall':
        return { x: 384, y: 448};
      case 'characterOnGoal':
      case 'character':
        return { x: 0, y: 256};
      case 'box':
        return { x: 384, y: 0};
      case 'boxOnGoal':
        return { x: 512, y: 0};
      case 'goal':
        return { x: 768, y: 192};
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
      default:
        return;
    }

    this.draw();
  }

  handleWin() {
    if (this.board.won()) {
      // debugger
      const winModal = document.getElementById('win-modal');
      winModal.className = '';
      // this.canvas.className = 'hidden';
      // this.canvas.remove();
      clearInterval(window.timer);
    }
  }

  clearWin() {
    const winModal = document.getElementById('win-modal');
    winModal.className = 'hidden';
  }

  populateLevelSelector(levels, changeLevel) {
    const levelSelector = document.getElementById('levels');
    Object.keys(levels).forEach((index) => {
      const option = document.createElement('option');
      option.text = 'Level ' + index;
      option.value = index;
      levelSelector.add(option);
    });

    levelSelector.addEventListener('change', changeLevel);
  }

  displayMoveCount() {
    const counter = document.getElementById('move-counter');
    counter.innerHTML = this.board.moveCount;
  }

  displayTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const minString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    const timer = document.getElementById('timer');
    timer.innerHTML = `${minString}:${secString}`;
  }
}

export default Display;
