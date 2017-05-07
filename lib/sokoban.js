import Game from './game';
import LEVELS from '../assets/levels';

document.addEventListener('DOMContentLoaded', () => {
  const welcomeModal = document.getElementById('welcome-modal');
  welcomeModal.addEventListener('click', (e) => {
    e.preventDefault();
    welcomeModal.className = 'hidden';
  });

  new Game(LEVELS);
});
