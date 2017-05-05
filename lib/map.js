import Tile from './tile';

class Map {
  constructor(grid) {
    this.grid = grid;
    this.tileGrid = [];

    this.boxOnGoalCount = 0;
    this.goalCount = 0;
    this.populate();
  }

  getTile(pos) {
    return this.tileGrid[pos[0]][pos[1]];
  }

  setTile(pos, type) {
    this.tileGrid[pos[0]][pos[1]] = new Tile(type, pos);
  }

  getTileType(pos) {
    return this.getTile(pos).type;
  }

  populate() {
    this.grid.forEach((row, i) => {
      this.tileGrid.push(row.slice(0));
      row.forEach((tileString, j) => {
        this.setTile([i, j], this.parseTileString(tileString));
      });
    });
  }

  parseTileString(tileString) {
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
    for (let i = 0; i < this.tileGrid.length; i++) {
      const row = this.tileGrid[i];
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
