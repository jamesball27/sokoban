class Board {
  constructor(map) {
    this.map = map;
    this.moveDeltas = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
    };

  }

  moveCharacter(direction) {
    const oldPos = this.map.characterPos();
    const newPos = [];
    oldPos.forEach((coord, i) => {
      newPos.push(coord + this.moveDeltas[direction][i]);
    });

    if (this.validMove(newPos)) {
      this.map.setPos(oldPos[0], oldPos[1], 'empty');
      this.map.setPos(newPos[0], newPos[1], 'character');
    }
  }

  validMove(pos) {
    if (this.map.getPos(pos[0], pos[1]).type === 'wall') {
      return false;
    }

    return true;
  }
}

export default Board;
