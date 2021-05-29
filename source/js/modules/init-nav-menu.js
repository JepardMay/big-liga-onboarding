import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const navMenu = document.querySelector('.main-nav__wrapper');
const navMenuBtn = document.querySelector('.main-nav__toggle');

const initNavMenu = () => {
  const onEscPress = (evt) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey && navMenu.classList.contains('main-nav__wrapper--open')) {
      evt.preventDefault();
      closeNavMenu();
    }
  };

  const closeNavMenu = () => {
    navMenuBtn.style.pointerEvents = 'none';
    navMenuBtn.classList.remove('main-nav__toggle--open');
    navMenu.classList.remove('main-nav__wrapper--open');
    enableScrolling();

    document.removeEventListener('keydown', onEscPress);
    navMenu.addEventListener('transitionend', () => {
      navMenuBtn.style.removeProperty('pointer-events');
    });
  };

  if (navMenu && navMenuBtn) {
    navMenuBtn.addEventListener('click', (evt) => {
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
    });
  }
};

export {initNavMenu};
