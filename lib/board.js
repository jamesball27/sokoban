class Board {
  constructor(map) {
    this.map = map;
    this.moveDeltas = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
    };

    this.characterPos = this.getCharacterPos();

  }

  getCharacterPos() {
    for (let i = 0; i < this.map.length; i++) {
      const row = this.map[i];
      const characterIndex = row.indexOf('@');
      if (characterIndex !== -1) {
        return [i, characterIndex];
      }
    }
  }

  moveCharacter(direction) {
    const oldPos = this.characterPos;
    const newPos = [];
    this.characterPos.forEach((coord, i) => {
      newPos.push(coord + this.moveDeltas[direction][i]);
    });

    this.map[oldPos[0]][oldPos[1]] = ' ';
    this.map[newPos[0]][newPos[1]] = '@';

    this.characterPos = newPos;
  }
}

export default Board;
