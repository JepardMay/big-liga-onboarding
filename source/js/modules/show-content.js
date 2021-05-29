import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const content = document.querySelector('.main-block__column');
const blockBtn = document.querySelector('.main-block__btn');

const showContent = () => {
  const onEscPress = (evt) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey && content.classList.contains('main-block__column--show')) {
      evt.preventDefault();
      removeContent();
    }
  };

  const removeContent = () => {
    blockBtn.style.pointerEvents = 'none';
    content.classList.remove('main-block__column--show');
    enableScrolling();

    document.removeEventListener('keydown', onEscPress);
    content.addEventListener('transitionend', () => {
      blockBtn.style.removeProperty('pointer-events');
    });
  };

  if (content && blockBtn) {
    blockBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (content.classList.contains('main-block__column--show')) {
        removeContent();
      } else {
        blockBtn.style.pointerEvents = 'none';
        content.classList.add('main-block__column--show');
        disableScrolling();

        document.addEventListener('keydown', onEscPress);
        content.addEventListener('transitionend', () => {
          blockBtn.style.removeProperty('pointer-events');
        });
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        removeContent();
      }
    }, false);
  }
};

export {showContent};
