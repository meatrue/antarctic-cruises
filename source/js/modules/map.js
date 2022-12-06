const PIN_ICON_PATH = './img/svg/address-marker.svg';

const mapContainerElement = document.querySelector('#map');
const mapImageElement = document.querySelector('#map img');


const setMap = () => {
  if (mapImageElement) {
    mapImageElement.remove();
  }

  const center = [59.938430492248656, 30.32316041534418];

  const myMap = new ymaps.Map(mapContainerElement, { // eslint-disable-line

    center,
    zoom: 15,
  });

  /* stylelint-disable-next-line */
  const placemark = new ymaps.Placemark(center, {}, { // eslint-disable-line
    iconLayout: 'default#image',
    iconImageHref: PIN_ICON_PATH,
    iconImageSize: [18, 22],
    iconImageOffset: [-22, 24],
  });

  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.behaviors.disable(['scrollZoom']);

  myMap.geoObjects.add(placemark);
};


const initMap = () => {
  if (mapContainerElement) {
    ymaps.ready(setMap); // eslint-disable-line
  }
};


export {initMap};
