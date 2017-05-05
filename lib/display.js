class Display {
  constructor(board) {
    this.board = board;
    this.tileSize = 48;

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.board.map.tileGrid[0].length * this.tileSize;
    this.canvas.height = this.board.map.tileGrid.length * this.tileSize;

    this.loadSpriteSheet();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener('keydown', this.handleKeyDown);
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
    this.sprites.src = './assets/sokoban_tilesheet_copy.png';
    this.sprites.onload = () => {
      this.draw();
    };
  }

  setSprite(tileType) {
    switch(tileType) {
      case 'wall':
        return { x: 288, y: 336};
      case 'characterOnGoal':
      case 'character':
        return { x: 0, y: 192};
      case 'box':
        return { x: 288, y: 0};
      case 'boxOnGoal':
        return { x: 384, y: 0};
      case 'goal':
        return { x: 576, y: 144};
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
    this.handleWin();
  }

  handleWin() {
    if (this.board.won()) {
      debugger
      if (this.completedAll()) {
        const completedModal = document.getElementById('completed-all');
        completedModal.className = 'active';
        return;
      }

      this.showModal();
      this.updateCompletedLi();

      clearInterval(window.timer);
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  populateLevelSelector(levels, changeLevel) {
    const levelSelector = document.getElementById('levels');
    const currentLevel = this.currentLevel;

    Object.keys(levels).forEach((index) => {
      const li = document.createElement('li');
      li.innerHTML = 'Level ' + index;
      li.id = 'level-' + index;
      li.value = index;

      if (index === '0') {
        li.className = 'selected';
      }

      levelSelector.appendChild(li);
    });

    levelSelector.addEventListener('click', changeLevel);
  }

  updateSelectedLevel(element) {
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
      if (li.value !== element.value) {
        li.classList.remove('selected');
      }
    });

    element.classList.add('selected');
  }

  displayMoveCount() {
    const counter = document.getElementById('move-counter');
    if (this.board.moveCount < 10) {
      counter.innerHTML = `0${this.board.moveCount}`;
    } else {
      counter.innerHTML = this.board.moveCount;
    }
  }

  displayTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const minString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    this.timer = document.getElementById('timer');
    this.timer.innerHTML = `${minString}:${secString}`;
  }

  showModal() {
    const winModal = document.getElementById('win-modal');
    winModal.className = 'modal active';
  }

  closeModal() {
    const winModal = document.getElementById('win-modal');
    winModal.classList.remove('active');
  }

  updateCompletedLi() {
    const currentLi = document.getElementById(`level-${this.currentLevel}`);
    currentLi.className = 'completed';

    while (currentLi.hasChildNodes()) {
      currentLi.removeChild(currentLi.lastChild);
    }

    const timeSpan = document.createElement('span');
    const moveSpan = document.createElement('span');
    timeSpan.innerHTML += `Time: ${this.timer.innerHTML}`;
    moveSpan.innerHTML += `Moves: ${this.board.moveCount}`;

    currentLi.appendChild(timeSpan);
    currentLi.appendChild(moveSpan);
  }

  completedAll() {
    const lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
      if (!lis[i].classList.contains('completed')) {
        return false;
      }
    }
    return true;
  }
}

export default Display;
