import {
  disableScrolling,
  enableScrolling
} from '../utils/scroll-lock';
import {
  stopTransitiononResize
} from './stop-transition-resize';
import {
  closeNavMenu
} from './init-nav-menu';

const mainBlock = document.querySelector('.main-block');
const content = document.querySelector('.main-block__column');

const onEscPress = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && content.classList.contains('main-block__column--show')) {
    evt.preventDefault();
    removeContent();
  }
};

const removeContent = () => {
  if (content.classList.contains('main-block__column--show')) {
    mainBlock.style.pointerEvents = 'none';
    content.classList.remove('main-block__column--show');
    enableScrolling();

    document.removeEventListener('keydown', onEscPress);
    content.addEventListener('transitionend', () => {
      mainBlock.style.removeProperty('pointer-events');
    });
  }
};

const onClick = (evt) => {
  if (evt.target.closest('.main-block')) {
    closeNavMenu();
    evt.preventDefault();
    if (content.classList.contains('main-block__column--show')) {
      removeContent();
    } else {
      mainBlock.style.pointerEvents = 'none';
      content.classList.add('main-block__column--show');
      disableScrolling();

      document.addEventListener('keydown', onEscPress);
      content.addEventListener('transitionend', () => {
        mainBlock.style.removeProperty('pointer-events');
      });
    }
  }
};

const showContent = () => {
  if (content) {
    document.body.addEventListener('click', onClick);

    stopTransitiononResize(content);
  }
};

export {
  removeContent,
  showContent
};
