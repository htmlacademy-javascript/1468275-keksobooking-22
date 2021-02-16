import {types} from './data.js';
import {numDecline} from './util.js';

const templatePopup = document.querySelector('#card').content.querySelector('.popup');

const createCards = (arr) => {
  const cardListFragment = document.createDocumentFragment();

  arr.forEach(({ author, offer }) => {
    const offerElement = templatePopup.cloneNode(true);
    const featureListElement = offerElement.querySelector('.popup__features');
    const photoListElement = offerElement.querySelector('.popup__photos');

    offerElement.querySelector('.popup__avatar').src = author.avatar;
    offerElement.querySelector('.popup__title').textContent = offer.title;
    offerElement.querySelector('.popup__description').textContent = offer.description;
    offerElement.querySelector('.popup__text--address').textContent = offer.adress;
    offerElement.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
    offerElement.querySelector('.popup__type').textContent = types[offer.type];
    offerElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' ' + numDecline((offer.rooms), ['комната', 'комнаты', 'комнат']) + ' ' + offer.guests + ' ' + numDecline((offer.guests), ['гость', 'гостя', 'гостей']);
    offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', ' + 'выезд до ' + offer.checkout;

    featureListElement.innerHTML = '';
    for (let i = 0; i < offer.features.length; i++) {
      const feature = document.createElement('li');
      const featureClass = 'popup__feature--' + offer.features[i];
      feature.classList.add('popup__feature', featureClass);
      featureListElement.appendChild(feature);
    }

    photoListElement.innerHTML = '';
    for (let i = 0; i < offer.photos.length; i++) {
      const photoElement = templatePopup.querySelector('.popup__photo').cloneNode(true);
      photoElement.src = offer.photos[i];
      photoListElement.appendChild(photoElement);
    }
    cardListFragment.appendChild(offerElement);
  });

  return cardListFragment;
}
// mapCanvas.insertAdjacentElement
export {createCards};
