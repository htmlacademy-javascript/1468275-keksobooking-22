import {getRandomNumber, getRandomArrayElelement, shuffleArray} from './util.js';

const OFFERS_COUNT = 10;

const Avatar = {
  MIN: 1,
  MAX: 8,
};

const Guests = {
  MIN: 1,
  MAX: 5,
};

const Price = {
  MIN: 100,
  MAX: 10000,
};

const Rooms = {
  MIN: 1,
  MAX: 5,
};

const OFFERS = [];

const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const apartamentTypes = Object.keys(TYPES);

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const addOffers = () => {
  for (let i = 0; i < OFFERS_COUNT; i++) {
    OFFERS.push({
      author: {
        avatar: 'img/avatars/user0' + getRandomNumber(Avatar.MIN, Avatar.MAX) + '.png',
      },
      offer: {
        title: 'Какой-то заголовок.',
        adress: getRandomNumber(35.65000, 35.70000, 5) + ', ' + getRandomNumber(139.70000, 139.80000, 5),
        price: getRandomNumber(Price.MIN, Price.MAX),
        type: getRandomArrayElelement(apartamentTypes),
        rooms: getRandomNumber(Rooms.MIN, Rooms.MAX).toFixed(),
        guests: getRandomNumber(Guests.MIN, Guests.MAX),
        checkin: getRandomArrayElelement(CHECKINS),
        checkout: getRandomArrayElelement(CHECKOUTS),
        features: shuffleArray(FEATURES).slice(0, getRandomNumber(1, FEATURES.length)),
        description: 'Какое-то описание.',
        photos: shuffleArray(PHOTOS, getRandomNumber(1, PHOTOS.length)),
      },
      location: {
        x: getRandomNumber(35.65000, 35.70000, 5),
        y: getRandomNumber(139.70000, 139.80000, 5),
      },
    });
  }
  return OFFERS;
};

export {addOffers, OFFERS_COUNT, TYPES};
