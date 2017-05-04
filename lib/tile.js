class Tile {
  constructor(type, pos) {
    this.type = type;
    this.pos = pos;
    this.attribute = this.pushable() || this.traversable();
  }

  pushable() {
    if (this.type === 'box' || this.type === 'boxOnGoal') {
      return 'pushable';
    }

    return null;
  }

  traversable() {
    if (this.type === 'empty' || this.type === 'goal') {
      return 'traversable';
    }

    return null;
  }
}

export default Tile;
