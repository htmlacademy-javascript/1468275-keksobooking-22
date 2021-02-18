import './form.js';
import {createCard} from './popup.js';
import {addOffers} from './data.js';


const map = document.querySelector('.map__canvas');
const cardOffers = addOffers();
const cardsMarkup = createCard(cardOffers[0]);

map.appendChild(cardsMarkup);
