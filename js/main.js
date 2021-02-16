import {createCard} from './popup.js';
import {addOffers} from './data.js';

const map = document.querySelector('.map__canvas');
const adverts = addOffers();
const cardsMarkup = createCard(adverts[0]);

map.appendChild(cardsMarkup);
