import Tile from './tile';

class Map {
  constructor(grid) {
    this.grid = grid;

    this.populate();
  }

  getPos(pos) {
    return this.grid[pos[0]][pos[1]];
  }

  setPos(pos, type) {
    this.grid[pos[0]][pos[1]] = new Tile(type, pos);
  }

  populate() {
    this.grid.forEach((row, i) => {
      row.forEach((tileString, j) => {
        this.setPos([i, j], this.getTileType(tileString));
      });
    });
  }

  getTileType(tileString) {
    switch(tileString) {
      case '#':
        return 'wall';
      case '@':
        return 'character';
      case '$':
        return 'box';
      case '*':
        return 'boxOnGoal';
      case '.':
        return 'goal';
      case '+':
        return 'characterOnGoal';
      case ' ':
        return 'empty';
    }
  }

  characterPos() {
    for (let i = 0; i < this.grid.length; i++) {
      const row = this.grid[i];
      const characterIndex = row.findIndex((tile) => {
        return tile.type === 'character' || tile.type === 'characterOnGoal';
      });
      if (characterIndex !== -1) {
        return [i, characterIndex];
      }
    }
  }
}

export default Map;
