import Game from './game';
import { LEVELS } from '../assets/levels';

document.addEventListener('DOMContentLoaded', () => {
  const levels = LEVELS;
  new Game(levels);
});
