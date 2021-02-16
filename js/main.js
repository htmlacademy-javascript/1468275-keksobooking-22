import {createCards} from './popup.js';
import {addOffers} from './data.js';

const map = document.querySelector('.map__canvas');
const adverts = addOffers();
const cardsMarkup = createCards(adverts);

map.appendChild(cardsMarkup);
