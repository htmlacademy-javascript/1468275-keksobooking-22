/* global L:readonly */
import { addOffers } from './data.js';
import { createCard } from './popup.js';
import { activateForm, setAdds } from './form.js';

const cardOffers = addOffers();

const CENTER_MAP = {
  lat: 35.68950,
  lng: 139.69200,
};

const SCALE = 10;

const MainIcon = {
  WIDTH: 52,
  HEIGHT: 52,
};

const Icon = {
  WIDTH: 40,
  HEIGHT: 40,
};

const initMap = (points) => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activateForm();
      setAdds(CENTER_MAP);
    })
    .setView(CENTER_MAP, SCALE);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreet.org/copiryght">OpenStreeetMap</a> contibutors | Icons made by <a href="https://www.freepic.com" title="Freepic">Freepic</a> from <a href="https://www.flaticon.com/" title="Flatcon">www.flatcon.com</a>',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '/img/main-pin.svg',
    iconSize: [MainIcon.WIDTH, MainIcon.HEIGHT],
    iconAnchor: [MainIcon.WIDTH / 2, MainIcon.HEIGHT],
  });

  const mainMarker = L.marker(
    CENTER_MAP,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainMarker.on('moveend', (evt) => {
    setAdds(evt.target.getLatLng());
  });

  mainMarker.addTo(map);

  points.forEach((point) => {
    const {lat, lng} = point;

    const icon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [Icon.WIDTH, Icon.HEIGHT],
      iconAnchor: [Icon.WIDTH / 2, Icon.HEIGHT],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        createCard(cardOffers[point]),
      );
  });

  return map;
};


export {initMap};
