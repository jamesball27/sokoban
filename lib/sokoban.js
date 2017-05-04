import Board from './board';
import Display from './display';
import Game from './game';
import Map from './map';
import { level0, level1, level2, level3, level4, level5 } from '../assets/levels';


const grid = level5;

document.addEventListener('DOMContentLoaded', () => {
  const map = new Map(grid);
  const board = new Board(map);
  const display = new Display(board);
});
