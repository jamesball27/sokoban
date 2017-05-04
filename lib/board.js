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

  move(direction) {
    const oldPos = this.map.characterPos();
    const newPos = [];
    oldPos.forEach((coord, i) => {
      newPos.push(coord + this.moveDeltas[direction][i]);
    });

    this.handleMove(oldPos, newPos, direction);

  }

  validMove(pos) {
    if (this.map.getPos(pos).attribute === 'traversable') {
      return true;
    }

    return false;
  }

  handleMove(oldPos, newPos, direction) {
    const oldTile = this.map.getPos(oldPos);
    const newTile = this.map.getPos(newPos);

    switch(newTile.attribute) {
      case null:
        break;
      case 'traversable':
        this.moveCharacter(oldPos, newPos);
        break;
      case 'pushable':
        this.pushBox(oldPos, newPos, direction);
        break;
    }

  }

  pushBox(characterPos, boxPos, direction) {
    const nextPos = [];
    boxPos.forEach((coord, i) => {
      nextPos.push(coord + this.moveDeltas[direction][i]);
    });

    if (this.validMove(nextPos)) {
      this.moveCharacter(characterPos, boxPos);

      if (this.map.getPos(nextPos).type === 'goal') {
        this.map.setPos(nextPos, 'boxOnGoal');
      } else {
        this.map.setPos(nextPos, 'box');
      }
    }
  }

  moveCharacter(oldPos, newPos) {

    if (this.map.getPos(oldPos).type === 'characterOnGoal') {
      this.map.setPos(oldPos, 'goal');
    } else {
      this.map.setPos(oldPos, 'empty');
    }

    if (this.map.getPos(newPos).type === 'goal') {
      this.map.setPos(newPos, 'characterOnGoal');
    } else if (this.map.getPos(newPos).type === 'boxOnGoal') {
      this.map.setPos(newPos, 'characterOnGoal');
    } else {
      this.map.setPos(newPos, 'character');
    }
  }

  // {
  //   [0, 0]: 'character',
  //   [0, 1]: 'box',
  //   [0, 2]: 'empty'
  // }
  curryPos(startPos, startAttr, numArgs) {
    const args = [];
    args.push({ pos: startPos, attribute: startAttr });

    const _curry = (nextPos, nextAttr) => {
      args.push({ pos: nextPos, attribute: nextAttr });
      if (args.length === numArgs) {
        // do something here to make the move happen
      } else {
        return _curry;
      }
    };

    return _curry;
  }

  hanldeMove(movesArray) {
    if (movesArray.length === 2) {
      if (movesArray[1].attribute === 'traversable') {
        
      }
    }
  }
}

export default Board;
