const MAP_NOJS_CLASS = 'contacts__map--nojs';
const mapContainerElement = document.querySelector('#map');

const initMap = () => {
  if (mapContainerElement) {
    mapContainerElement.classList.remove(MAP_NOJS_CLASS);
  }
};


export {initMap};
