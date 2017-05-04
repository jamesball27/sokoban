class Board {
  constructor(map) {
    this.map = map;
    this.moveDeltas = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
    };

    this.getTile = this.map.getTile.bind(this.map);
    this.setTile = this.map.setTile.bind(this.map);
    this.getTileType = this.map.getTileType.bind(this.map);
  }

  move(direction) {
    const currentPos = this.map.characterPos();
    const nextPos = this.findNextPos(currentPos, direction);
    this.handleMove(currentPos, nextPos, direction);
  }

  handleMove(currentPos, nextPos, direction) {
    const nextTile = this.getTile(nextPos);
    switch(nextTile.attribute) {
      case null:
        break;
      case 'traversable':
        this.moveCharacter(currentPos, nextPos);
        break;
      case 'pushable':
        this.pushBox(currentPos, nextPos, direction);
        break;
    }
  }

  moveCharacter(currentPos, nextPos) {
    this.resetCurrentPos(currentPos);
    this.setNextCharacterPos(nextPos);
  }

  pushBox(characterPos, boxPos, direction) {
    const nextBoxPos = this.findNextPos(boxPos, direction);

    if (this.getTile(nextBoxPos).attribute === 'traversable') {
      this.moveCharacter(characterPos, boxPos);
      this.setNextBoxPos(nextBoxPos);
    }
  }

  findNextPos(currentPos, direction) {
    const nextPos = [];
    currentPos.forEach((coord, i) => {
      nextPos.push(coord + this.moveDeltas[direction][i]);
    });
    return nextPos;
  }

  resetCurrentPos(pos) {
    if (this.getTileType(pos) === 'characterOnGoal') {
      this.setTile(pos, 'goal');
    } else {
      this.setTile(pos, 'empty');
    }
  }

  setNextCharacterPos(pos) {
    const tileType = this.getTileType(pos);
    if (tileType === 'goal' || tileType === 'boxOnGoal') {
      this.setTile(pos, 'characterOnGoal');
    } else {
      this.setTile(pos, 'character');
    }
  }

  setNextBoxPos(pos) {
    if (this.getTileType(pos) === 'goal') {
      this.setTile(pos, 'boxOnGoal');
    } else {
      this.setTile(pos, 'box');
    }
  }
}

export default Board;
