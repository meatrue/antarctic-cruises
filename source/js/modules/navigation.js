const NAV_CONTAINER_ELEMENT_CLASS = 'header';
const NAV_ELEMENT_NOJS_CLASS = 'header--navigation-nojs';
const NAV_TOGGLE_ELEMENT_CLASS = 'header__navigation-toggle';
const NAV_OPENED_CLASS = 'header--navigation-opened';
const NAV_CLOSED_CLASS = 'header--navigation-closed';
const BODY_NAV_OPENED_CLASS = 'navigation-opened';
const NAV_CLASS = 'navigation';
const NAV_LINK_CLASS = 'navigation__link';
const MOBILE_NAV_BREAKPOINT = '767px';


const bodyElement = document.body;
const navigationContainerElement = document.querySelector(`.${NAV_CONTAINER_ELEMENT_CLASS}`);
const navigationElement = document.querySelector(`.${NAV_CLASS}`);


const toggleMenu = () => {
  if (navigationContainerElement.classList.contains(NAV_CLOSED_CLASS)) {
    navigationContainerElement.classList.remove(NAV_CLOSED_CLASS);
    navigationContainerElement.classList.add(NAV_OPENED_CLASS);
    bodyElement.classList.add(BODY_NAV_OPENED_CLASS);
  } else {
    navigationContainerElement.classList.remove(NAV_OPENED_CLASS);
    navigationContainerElement.classList.add(NAV_CLOSED_CLASS);
    bodyElement.classList.remove(BODY_NAV_OPENED_CLASS);
  }
};


const onNavContainerClick = (e) => {
  const target = e.target;

  if (target.classList.contains(NAV_LINK_CLASS)
    || target.classList.contains(NAV_TOGGLE_ELEMENT_CLASS)
    || target.classList.contains(NAV_CONTAINER_ELEMENT_CLASS)) {
    toggleMenu();
  }
};


const setNavigation = () => {
  if (!navigationContainerElement || !navigationElement) {
    return;
  }

  navigationContainerElement.classList.remove(NAV_ELEMENT_NOJS_CLASS);
  navigationContainerElement.classList.add(NAV_CLOSED_CLASS);

  navigationContainerElement.addEventListener('click', onNavContainerClick);
};


const initNavigation = () => {
  const breakpoint = window.matchMedia(`(max-width:${MOBILE_NAV_BREAKPOINT})`);

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      setNavigation();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};


export {initNavigation};
