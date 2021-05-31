import {
  disableScrolling,
  enableScrolling
} from '../utils/scroll-lock';
import {
  stopTransitiononResize
} from './stop-transition-resize';
import {
  removeContent
} from './show-content';

const navMenu = document.querySelector('.main-nav__wrapper');
const navMenuBtn = document.querySelector('.main-nav__toggle');

const onEscPress = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && navMenu.classList.contains('main-nav__wrapper--open')) {
    evt.preventDefault();
    closeNavMenu();
  }
};

const closeNavMenu = () => {
  if (navMenu.classList.contains('main-nav__wrapper--open')) {
    navMenuBtn.style.pointerEvents = 'none';
    navMenuBtn.classList.remove('main-nav__toggle--open');
    navMenu.classList.remove('main-nav__wrapper--open');
    enableScrolling();

    document.removeEventListener('keydown', onEscPress);
    navMenu.addEventListener('transitionend', () => {
      navMenuBtn.style.removeProperty('pointer-events');
    });
  }
};

const onClick = (evt) => {
  removeContent();
  evt.preventDefault();
  if (navMenuBtn.classList.contains('main-nav__toggle--open')) {
    closeNavMenu();
  } else {
    navMenuBtn.style.pointerEvents = 'none';
    navMenuBtn.classList.add('main-nav__toggle--open');
    navMenu.classList.add('main-nav__wrapper--open');
    disableScrolling();

    document.addEventListener('keydown', onEscPress);
    navMenu.addEventListener('transitionend', () => {
      navMenuBtn.style.removeProperty('pointer-events');
    });
  }
};

const initNavMenu = () => {
  if (navMenu && navMenuBtn) {
    navMenuBtn.addEventListener('click', onClick);

    stopTransitiononResize(navMenu);
  }
};

export {
  closeNavMenu,
  initNavMenu
};
