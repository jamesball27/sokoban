class Tile {
  constructor(type, pos) {
    this.type = type;
    this.pos = pos;
    this.attribute = this.pushable() || this.traversable();
    // this.sprite = this.setSprite();
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

  // setSprite() {
  //   switch(this.type) {
  //     case 'wall':
  //       return { x: 384, y: 448};
  //     case 'characterOnGoal':
  //     case 'character':
  //       return { x: 0, y: 256};
  //     case 'box':
  //       return { x: 384, y: 0};
  //     case 'boxOnGoal':
  //       return { x: 512, y: 0};
  //     case 'goal':
  //       return { x: 768, y: 192};
  //   }
  // }
}

export default Tile;
