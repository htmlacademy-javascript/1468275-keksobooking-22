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

let offers = [];

let types = ['palace', 'flat', 'house', 'bungalow'];

let checkins = ['12:00', '13:00', '14:00'];

let checkouts = ['12:00', '13:00', '14:00'];

let features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

let photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

export {OFFERS_COUNT, Avatar, Guests, Price, Rooms, offers, types, checkins, checkouts, features, photos};
