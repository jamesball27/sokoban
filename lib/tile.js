class Tile {
  constructor(type, pos) {
    this.type = type;
    this.pos = pos;
    this.traversable = this.type !== 'wall';
    this.moveable = this.type === 'box';
  }

}

export default Tile;
