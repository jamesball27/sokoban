class Tile {
  constructor(type, pos) {
    this.type = type;
    this.pos = pos;
    this.traversable = this.traversable();
    this.pushable = this.pushable();
  }

  pushable() {
    return this.type === 'box' || this.type === 'boxOnGoal';
  }

  traversable() {
    return this.type === 'empty' || this.type === 'goal';
  }
}

export default Tile;
