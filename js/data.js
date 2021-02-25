import { getRandomNumber, getRandomArrayElelement, shuffleArray } from './util.js';

const APARTAMENT_PRICE = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const OFFERS_COUNT = 10;

const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const Avatar = {
  MIN: 1,
  MAX: 8,
};

const Coordinates = {
  MIN_X: 35.65000,
  MAX_X: 35.70000,
  MIN_Y: 139.70000,
  MAX_Y: 139.80000,
};

const Guests = {
  MIN: 1,
  MAX: 3,
};

const Price = {
  MIN: 100,
  MAX: 10000,
};

const Rooms = {
  MIN: 1,
  MAX: 3,
};

const offers = [];

const apartamentTypes = Object.keys(TYPES);

const addOffers = () => {
  for (let i = 0; i < OFFERS_COUNT; i++) {
    offers.push({
      author: {
        avatar: `img/avatars/user0${getRandomNumber(Avatar.MIN, Avatar.MAX)}.png`,
      },
      offer: {
        title: 'Какой-то заголовок.',
        adress: `${getRandomNumber(Coordinates.MIN_X, Coordinates.MAX_X, 5)}, ${getRandomNumber(Coordinates.MIN_Y,Coordinates.MAX_Y, 5)}`,
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
        x: getRandomNumber(Coordinates.MIN_X, Coordinates.MAX_X, 5),
        y: getRandomNumber(Coordinates.MIN_Y,Coordinates.MAX_Y, 5),
      },
    });
  }
  return offers;
};

export { addOffers, TYPES, APARTAMENT_PRICE, Coordinates };
