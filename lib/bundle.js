/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// # Wall
// @ Player
// $ Box
// * Box on goal square
// . Goal square
// + Character on goal square

var LEVELS = {
  0: [['#', '#', '#', '#', '#', '#', '#'], ['#', '.', '@', ' ', '#', ' ', '#'], ['#', '$', '*', ' ', '$', ' ', '#'], ['#', ' ', ' ', ' ', '$', ' ', '#'], ['#', ' ', '.', '.', ' ', ' ', '#'], ['#', ' ', ' ', '*', ' ', ' ', '#'], ['#', '#', '#', '#', '#', '#', '#']],
  1: [['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '$', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', ' ', ' ', '$', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', ' ', ' ', '$', ' ', '$', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', ' ', '#', ' ', '#', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', '#', ' ', '#', '#', ' ', '#', '#', '#', '#', '#', ' ', ' ', '.', '.', '#'], ['#', ' ', '$', ' ', ' ', '$', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '.', '.', '#'], ['#', '#', '#', '#', '#', ' ', '#', '#', '#', ' ', '#', '@', '#', '#', ' ', ' ', '.', '.', '#'], ['#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']],
  2: [['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '.', '.', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#', '#', '#'], ['#', '.', '.', ' ', ' ', '#', ' ', '$', ' ', ' ', '$', ' ', ' ', '#'], ['#', '.', '.', ' ', ' ', '#', '$', '#', '#', '#', '#', ' ', ' ', '#'], ['#', '.', '.', ' ', ' ', ' ', ' ', '@', ' ', '#', '#', ' ', ' ', '#'], ['#', '.', '.', ' ', ' ', '#', ' ', '#', ' ', ' ', '$', ' ', '#', '#'], ['#', '#', '#', '#', '#', '#', ' ', '#', '#', '$', ' ', '$', ' ', '#'], ['#', '#', '#', ' ', '$', ' ', ' ', '$', ' ', '$', ' ', '$', ' ', '#'], ['#', '#', '#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']],
  3: [['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', ' ', '@', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '$', '#', '$', ' ', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '$', ' ', ' ', '$', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '$', ' ', '$', ' ', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '$', ' ', '#', ' ', '#', '#', '#'], ['#', '.', '.', '.', '.', ' ', ' ', '#', '#', ' ', '$', ' ', ' ', '$', ' ', ' ', '#'], ['#', '#', '.', '.', '.', ' ', ' ', ' ', ' ', '$', ' ', ' ', '$', ' ', ' ', ' ', '#'], ['#', '.', '.', '.', '.', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']],
  4: [['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '.', '.', '.', '.', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '.', '.', '.', '.', '#'], ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', '$', ' ', '$', ' ', ' ', ' ', '.', '.', '.', '.', '#'], ['#', ' ', '$', '$', '$', '#', '$', ' ', ' ', '$', ' ', '#', ' ', ' ', '.', '.', '.', '.', '#'], ['#', ' ', ' ', '$', ' ', ' ', ' ', ' ', ' ', '$', ' ', '#', ' ', ' ', '.', '.', '.', '.', '#'], ['#', ' ', '$', '$', ' ', '#', '$', ' ', '$', ' ', '$', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', '$', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', ' ', ' ', '$', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', '$', '$', '#', '$', '$', ' ', ' ', '@', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']],
  5: [['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', ' ', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#', '$', '#', '#', ' ', ' ', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', ' ', '$', ' ', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#', '#', '#', ' ', ' ', ' ', '#'], ['#', '.', '.', '.', '.', ' ', ' ', '#', '#', ' ', '$', ' ', ' ', '$', '#', '#', '#'], ['#', '.', '.', '.', '.', ' ', ' ', ' ', ' ', '$', ' ', '$', '$', ' ', '#', '#', '#'], ['#', '.', '.', '.', '.', ' ', ' ', '#', '#', '$', ' ', ' ', '$', ' ', '@', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '$', ' ', ' ', '#', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '$', ' ', '$', ' ', ' ', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#', '#', ' ', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', '#', '#'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']]
};

exports.default = LEVELS;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _display = __webpack_require__(3);

var _display2 = _interopRequireDefault(_display);

var _map = __webpack_require__(4);

var _map2 = _interopRequireDefault(_map);

var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(levels) {
    _classCallCheck(this, Game);

    this.levels = levels;
    this.currentLevel = 0;
    this.resetGame(this.currentLevel);

    this.display.populateLevelSelector(levels, this.changeLevel.bind(this));
    this.addLevelResetListener();
    this.addNextLevelListener();
  }

  _createClass(Game, [{
    key: 'resetGame',
    value: function resetGame(level) {
      clearInterval(window.timer);
      this.startTimer();
      var map = new _map2.default(this.levels[level]);
      var board = new _board2.default(map);
      this.display = new _display2.default(board);
      this.display.currentLevel = this.currentLevel;
    }
  }, {
    key: 'changeLevel',
    value: function changeLevel(e) {
      e.preventDefault();
      this.currentLevel = e.target.value;
      this.display.updateSelectedLevel(e.target);
      this.resetGame(this.currentLevel);
    }
  }, {
    key: 'addNextLevelListener',
    value: function addNextLevelListener() {
      var _this = this;

      var nextLevel = document.getElementById('next-level');
      nextLevel.addEventListener('click', function (e) {
        e.preventDefault();
        var li = document.getElementById('level-' + (_this.currentLevel + 1));
        _this.display.updateSelectedLevel(li);
        _this.currentLevel += 1;
        _this.resetGame(_this.currentLevel);
        _this.display.closeModal();
      });

      var chooseLevel = document.getElementById('choose-level');
      chooseLevel.addEventListener('click', function (e) {
        e.preventDefault();
        _this.display.closeModal();
      });
    }
  }, {
    key: 'addLevelResetListener',
    value: function addLevelResetListener() {
      var _this2 = this;

      var resetButton = document.getElementById('reset');
      resetButton.addEventListener('click', function (e) {
        e.preventDefault();
        _this2.resetGame(_this2.currentLevel);
      });
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      var _this3 = this;

      window.time = 0;
      window.timer = setInterval(function () {
        _this3.display.displayTime(window.time);
        window.time += 1;
      }, 1000);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(map) {
    _classCallCheck(this, Board);

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
    this.moveCount = 0;
  }

  _createClass(Board, [{
    key: 'move',
    value: function move(direction) {
      var currentPos = this.map.characterPos();
      var nextPos = this.findNextPos(currentPos, direction);
      this.handleMove(currentPos, nextPos, direction);
    }
  }, {
    key: 'handleMove',
    value: function handleMove(currentPos, nextPos, direction) {
      var nextTile = this.getTile(nextPos);
      switch (nextTile.attribute) {
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
  }, {
    key: 'moveCharacter',
    value: function moveCharacter(currentPos, nextPos) {
      this.resetCurrentPos(currentPos);
      this.setNextCharacterPos(nextPos);
      this.moveCount += 1;
    }
  }, {
    key: 'pushBox',
    value: function pushBox(characterPos, boxPos, direction) {
      var nextBoxPos = this.findNextPos(boxPos, direction);

      if (this.getTile(nextBoxPos).attribute === 'traversable') {
        this.moveCharacter(characterPos, boxPos);
        this.setNextBoxPos(nextBoxPos);
      }
    }
  }, {
    key: 'findNextPos',
    value: function findNextPos(currentPos, direction) {
      var _this = this;

      var nextPos = [];
      currentPos.forEach(function (coord, i) {
        nextPos.push(coord + _this.moveDeltas[direction][i]);
      });
      return nextPos;
    }
  }, {
    key: 'resetCurrentPos',
    value: function resetCurrentPos(pos) {
      if (this.getTileType(pos) === 'characterOnGoal') {
        this.setTile(pos, 'goal');
      } else {
        this.setTile(pos, 'empty');
      }
    }
  }, {
    key: 'setNextCharacterPos',
    value: function setNextCharacterPos(pos) {
      var tileType = this.getTileType(pos);
      if (tileType === 'goal' || tileType === 'boxOnGoal') {
        this.setTile(pos, 'characterOnGoal');
      } else {
        this.setTile(pos, 'character');
      }
    }
  }, {
    key: 'setNextBoxPos',
    value: function setNextBoxPos(pos) {
      if (this.getTileType(pos) === 'goal') {
        this.setTile(pos, 'boxOnGoal');
      } else {
        this.setTile(pos, 'box');
      }
    }
  }, {
    key: 'won',
    value: function won() {
      var flattened = this.map.tileGrid.reduce(function (acc, el) {
        return acc.concat(el);
      }, []);
      return !flattened.some(function (tile) {
        return tile.type === 'box';
      });
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Display = function () {
  function Display(board) {
    _classCallCheck(this, Display);

    this.board = board;
    this.tileSize = 48;

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.board.map.tileGrid[0].length * this.tileSize;
    this.canvas.height = this.board.map.tileGrid.length * this.tileSize;

    this.loadSpriteSheet();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  _createClass(Display, [{
    key: 'draw',
    value: function draw() {
      var _this = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.board.map.tileGrid.forEach(function (row, i) {
        row.forEach(function (tile, j) {
          if (tile.type !== 'empty') {
            _this.drawTile(tile, j, i);
          }
        });
      });
      this.displayMoveCount();
    }
  }, {
    key: 'drawTile',
    value: function drawTile(tile, x, y) {
      var sprite = this.setSprite(tile.type);
      this.ctx.drawImage(this.sprites, sprite.x, sprite.y, this.tileSize, this.tileSize, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
    }
  }, {
    key: 'loadSpriteSheet',
    value: function loadSpriteSheet() {
      var _this2 = this;

      this.sprites = new Image();
      this.sprites.src = './assets/sokoban_tilesheet_copy.png';
      this.sprites.onload = function () {
        _this2.draw();
      };
    }
  }, {
    key: 'setSprite',
    value: function setSprite(tileType) {
      switch (tileType) {
        case 'wall':
          return { x: 288, y: 336 };
        case 'characterOnGoal':
        case 'character':
          return { x: 0, y: 192 };
        case 'box':
          return { x: 288, y: 0 };
        case 'boxOnGoal':
          return { x: 384, y: 0 };
        case 'goal':
          return { x: 576, y: 144 };
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      e.preventDefault();

      switch (e.key) {
        case 'a':
        case 'ArrowLeft':
          this.board.move('left');
          break;
        case 's':
        case 'ArrowDown':
          this.board.move('down');
          break;
        case 'd':
        case 'ArrowRight':
          this.board.move('right');
          break;
        case 'w':
        case 'ArrowUp':
          this.board.move('up');
          break;
        default:
          return;
      }

      this.draw();
      this.handleWin();
    }
  }, {
    key: 'handleWin',
    value: function handleWin() {
      if (this.board.won()) {
        if (this.completedAll()) {
          var completedModal = document.getElementById('completed-all');
          completedModal.className = 'active';
          return;
        }

        this.showModal();
        this.updateCompletedLi();

        clearInterval(window.timer);
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }, {
    key: 'populateLevelSelector',
    value: function populateLevelSelector(levels, changeLevel) {
      var levelSelector = document.getElementById('levels');
      var currentLevel = this.currentLevel;

      Object.keys(levels).forEach(function (index) {
        var li = document.createElement('li');
        li.innerHTML = 'Level ' + index;
        li.id = 'level-' + index;
        li.value = index;

        if (index === '0') {
          li.className = 'selected';
        }

        levelSelector.appendChild(li);
        li.addEventListener('click', changeLevel);
      });
    }
  }, {
    key: 'updateSelectedLevel',
    value: function updateSelectedLevel(element) {
      var lis = document.querySelectorAll('li');
      lis.forEach(function (li) {
        if (li.value !== element.value) {
          li.classList.remove('selected');
        }
      });

      element.classList.add('selected');
    }
  }, {
    key: 'updateCompletedLi',
    value: function updateCompletedLi() {
      var currentLi = document.getElementById('level-' + this.currentLevel);
      currentLi.className = 'completed';

      while (currentLi.hasChildNodes()) {
        currentLi.removeChild(currentLi.lastChild);
      }

      currentLi.innerHTML = 'Level ' + this.currentLevel;
      var timeSpan = document.createElement('span');
      var moveSpan = document.createElement('span');
      timeSpan.innerHTML = 'Time: ' + this.timer.innerHTML;
      moveSpan.innerHTML = 'Moves: ' + this.board.moveCount;

      currentLi.appendChild(timeSpan);
      currentLi.appendChild(moveSpan);
    }
  }, {
    key: 'completedAll',
    value: function completedAll() {
      var lis = document.querySelectorAll('li');
      for (var i = 0; i < lis.length; i++) {
        if (!lis[i].classList.contains('completed')) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'displayMoveCount',
    value: function displayMoveCount() {
      var counter = document.getElementById('move-counter');
      if (this.board.moveCount < 10) {
        counter.innerHTML = '0' + this.board.moveCount;
      } else {
        counter.innerHTML = this.board.moveCount;
      }
    }
  }, {
    key: 'displayTime',
    value: function displayTime(time) {
      var minutes = Math.floor(time / 60);
      var seconds = Math.floor(time % 60);
      var minString = minutes < 10 ? '0' + minutes : '' + minutes;
      var secString = seconds < 10 ? '0' + seconds : '' + seconds;

      this.timer = document.getElementById('timer');
      this.timer.innerHTML = minString + ':' + secString;
    }
  }, {
    key: 'showModal',
    value: function showModal() {
      if (this.currentLevel === 5) {
        var nextLevel = document.getElementById('next-level');
        nextLevel.classList.add('hidden');
      }

      var winModal = document.getElementById('win-modal');
      winModal.className = 'active';
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      var nextLevel = document.getElementById('next-level');
      nextLevel.classList.remove('hidden');

      var winModal = document.getElementById('win-modal');
      winModal.className = 'hidden';
    }
  }]);

  return Display;
}();

exports.default = Display;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tile = __webpack_require__(6);

var _tile2 = _interopRequireDefault(_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
  function Map(grid) {
    _classCallCheck(this, Map);

    this.grid = grid;
    this.tileGrid = [];

    this.boxOnGoalCount = 0;
    this.goalCount = 0;
    this.populate();
  }

  _createClass(Map, [{
    key: 'getTile',
    value: function getTile(pos) {
      return this.tileGrid[pos[0]][pos[1]];
    }
  }, {
    key: 'setTile',
    value: function setTile(pos, type) {
      this.tileGrid[pos[0]][pos[1]] = new _tile2.default(type, pos);
    }
  }, {
    key: 'getTileType',
    value: function getTileType(pos) {
      return this.getTile(pos).type;
    }
  }, {
    key: 'populate',
    value: function populate() {
      var _this = this;

      this.grid.forEach(function (row, i) {
        _this.tileGrid.push(row.slice(0));
        row.forEach(function (tileString, j) {
          _this.setTile([i, j], _this.parseTileString(tileString));
        });
      });
    }
  }, {
    key: 'parseTileString',
    value: function parseTileString(tileString) {
      switch (tileString) {
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
  }, {
    key: 'characterPos',
    value: function characterPos() {
      for (var i = 0; i < this.tileGrid.length; i++) {
        var row = this.tileGrid[i];
        var characterIndex = row.findIndex(function (tile) {
          return tile.type === 'character' || tile.type === 'characterOnGoal';
        });
        if (characterIndex !== -1) {
          return [i, characterIndex];
        }
      }
    }
  }]);

  return Map;
}();

exports.default = Map;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _levels = __webpack_require__(0);

var _levels2 = _interopRequireDefault(_levels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var welcomeModal = document.getElementById('welcome-modal');
  welcomeModal.addEventListener('click', function (e) {
    e.preventDefault();
    welcomeModal.className = 'hidden';
  });

  new _game2.default(_levels2.default);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function () {
  function Tile(type, pos) {
    _classCallCheck(this, Tile);

    this.type = type;
    this.pos = pos;
    this.attribute = this.pushable() || this.traversable();
  }

  _createClass(Tile, [{
    key: 'pushable',
    value: function pushable() {
      if (this.type === 'box' || this.type === 'boxOnGoal') {
        return 'pushable';
      }

      return null;
    }
  }, {
    key: 'traversable',
    value: function traversable() {
      if (this.type === 'empty' || this.type === 'goal') {
        return 'traversable';
      }

      return null;
    }
  }]);

  return Tile;
}();

exports.default = Tile;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map