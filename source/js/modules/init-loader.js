import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const loader = document.querySelector('.loader-display');
const loaderBtn = document.querySelector('.loader-display__btn');

const initLoader = () => {
  const onEnterPress = (evt) => {
    const isEnterKey = evt.key === 'Enter';

    if (isEnterKey && loader.classList.contains('loader-display--show')) {
      evt.preventDefault();
      closeLoader();
    }
  };

  const closeLoader = () => {
    loader.classList.remove('loader-display--show');
    enableScrolling();

    document.removeEventListener('keydown', onEnterPress);
  };

  if (loader && loaderBtn) {
    loaderBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeLoader();
    });
  }

  window.onload = () => {
    if (!loader.classList.contains('loader-display--show')) {
      loader.classList.add('loader-display--show');
    }
    disableScrolling();

    document.addEventListener('keydown', onEnterPress);
  };
};

export {initLoader};
