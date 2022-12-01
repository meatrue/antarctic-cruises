const NAV_CONTAINER_ELEMENT_CLASS = 'header';
const NAV_ELEMENT_NOJS_CLASS = 'header--navigation-nojs';
const NAV_TOGGLE_ELEMENT_CLASS = 'header__navigation-toggle';
const NAV_OPENED_CLASS = 'header--navigation-opened';
const NAV_CLOSED_CLASS = 'header--navigation-closed';


const navigationContainerElement = document.querySelector(`.${NAV_CONTAINER_ELEMENT_CLASS}`);
const navigationToggleElement = navigationContainerElement.querySelector(`.${NAV_TOGGLE_ELEMENT_CLASS}`);


const toggleMenu = () => {
  if (navigationContainerElement.classList.contains(NAV_CLOSED_CLASS)) {
    navigationContainerElement.classList.remove(NAV_CLOSED_CLASS);
    navigationContainerElement.classList.add(NAV_OPENED_CLASS);
  } else {
    navigationContainerElement.classList.remove(NAV_OPENED_CLASS);
    navigationContainerElement.classList.add(NAV_CLOSED_CLASS);
  }
};


const initNavigation = () => {
  navigationContainerElement.classList.remove(NAV_ELEMENT_NOJS_CLASS);
  navigationContainerElement.classList.add(NAV_CLOSED_CLASS);

  navigationToggleElement.addEventListener('click', toggleMenu);
};

export {initNavigation};
