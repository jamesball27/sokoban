# Sokoban!
Sokoban is a classic Japanese puzzle game. The rules are simple: the player pushes boxes around a maze-like game board with the goal of placing all of the boxes on designated storage spaces.

[Sokoban Live!](https://jamesball.dev/sokoban)

## Playing the Game

Users can use the arrow keys or WASD to move the character around the game board. There are only two rules to the game:

1. Crates may only be pushed from behind.
2. You may only push one crate at a time.

If a player ever gets stuck on a level, there is a helpful reset button just below the game board to restart the level from its initial state.

Levels can be chosen from the list next to the game board. When a player completes a level, they will be prompted to either continue on to the next level or to select a different level from the list.

## Technologies & Implementation

This game was built using the following technologies:

* JavaScript (ES6)
* HTML5 Canvas API
* CSS3

There is a standardized notation for Sokoban levels that allows for easy distribution of puzzles. Sample Sokoban text file:

```
#################     #: wall
#########     @##     @: character
######### $#$ ###     $: box
######### $  $###     .: goal
##########$ $ ###     *: box on goal
######### $ # ###     +: character on goal
#....  ## $  $  #
##...    $  $   #
#....  ##########
#################
```
In this implementation, the board is stored as a 2d array of strings taken from these text notations. These strings are then parsed into `Tile` objects upon initialization of the game board. Having the grid composed of `Tile` objects allows for easy attribute access when handling move logic:

```javascript
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
```

To display the tiles in a fun and user-friendly way, images were pulled from a Sokoban sprite sheet (courtesy of Kenney.nl on opengameart.org) and drawn in the browser using the HTML5 Canvas API.

```javascript
draw() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.board.map.tileGrid.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (tile.type !== 'empty') {
        this.drawTile(tile, j, i);
      }
    });
  });
  this.displayMoveCount();
}

drawTile(tile, x, y) {
  const sprite = this.setSprite(tile.type);
  this.ctx.drawImage(
    this.sprites,
    sprite.x, sprite.y, this.tileSize, this.tileSize,
    x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize
  );
}
```

DOM manipulation and interaction was achieved using vanilla JavaScript methods. For example, when a player completes a level, its element in the level selector list is updated to reflect these changes:

```javascript
updateCompletedLi() {
  const currentLi = document.getElementById(`level-${this.currentLevel}`);
  currentLi.className = 'completed';

  while (currentLi.hasChildNodes()) {
    currentLi.removeChild(currentLi.lastChild);
  }

  currentLi.innerHTML = 'Level ' + this.currentLevel;
  const timeSpan = document.createElement('span');
  const moveSpan = document.createElement('span');
  timeSpan.innerHTML = `Time: ${this.timer.innerHTML}`;
  moveSpan.innerHTML = `Moves: ${this.board.moveCount}`;

  currentLi.appendChild(timeSpan);
  currentLi.appendChild(moveSpan);
}
```

## Future Directions
* Allow users to save their progress and pick up where they left off at a later time
* Implement a move history so a user can undo or redo a move
* Add a leaderboard to keep track of top performances
