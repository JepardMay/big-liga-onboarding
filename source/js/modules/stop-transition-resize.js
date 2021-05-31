const stopTransitiononResize = (el) => {
  let resizeTimer;

  window.addEventListener('resize', () => {
    el.style.transition = 'none';
    el.style.animation = 'none';
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      el.style.removeProperty('transition');
      el.style.removeProperty('animation');
    }, 400);
  });
};

export {stopTransitiononResize};
