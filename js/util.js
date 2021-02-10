import {OFFERS_COUNT, Avatar, Guests, Price, Rooms, offers, types, checkins, checkouts, features, photos} from './variables.js';

const getRandomNumber = (min, max, floatNum = 0) => {
  if (max <= min || (min < 0 || max < 0)) {
    return -1;
  }

  return floatNum === 0 ? Math.floor(Math.random() * (max - min + 1)) + min : +((Math.random() * (max - min) + min).toFixed(floatNum));
};

const getRandomArrayElelement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const addOffers = () => {
  for (let i = 0; i < OFFERS_COUNT; i++) {
    offers.push({
      author: {
        avatar: 'img/avatars/user0' + getRandomNumber(Avatar.MIN, Avatar.MAX) + '.png',
      },
      offer: {
        title: 'Какой-то заголовок.',
        adress: getRandomNumber(35.65000, 35.70000, 5) + ', ' + getRandomNumber(139.70000, 139.80000, 5),
        price: getRandomNumber(Price.MIN, Price.MAX),
        type: getRandomArrayElelement(types),
        rooms: getRandomNumber(Rooms.MIN, Rooms.MAX),
        guests: getRandomNumber(Guests.MIN, Guests.MAX),
        checkin: getRandomArrayElelement(checkins),
        checkout: getRandomArrayElelement(checkouts),
        features: shuffleArray(features).slice(0, getRandomNumber(1, features.length)),
        description: 'Какое-то описание.',
        photos: getRandomArrayElelement(photos),
      },
      location: {
        x: getRandomNumber(35.65000, 35.70000, 5),
        y: getRandomNumber(139.70000, 139.80000, 5),
      },
    });
  }
  return offers;
};

export {addOffers};
