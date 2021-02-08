const SIMILAR_OBJECT_COUNT = 10;

const Avatar = {
  MIN: 1,
  MAX: 8,
};

const Guest = {
  MIN: 1,
  MAX: 5,
};

const Price = {
  MIN: 100,
  MAX: 10000,
};

const Room = {
  MIN: 1,
  MAX: 5,
};

const getRandomNumber = (min, max, floatNum = 0) => {
  if (max <= min || (min < 0 || max < 0)) {
    return -1;
  }

  return floatNum === 0 ? Math.floor(Math.random() * (max - min + 1)) + min : +((Math.random() * (max - min) + min).toFixed(floatNum));
};

let types = ['palace', 'flat', 'house', 'bungalow'];

let checkins = ['12:00', '13:00', '14:00'];

let checkouts = ['12:00', '13:00', '14:00'];

let features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

let photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

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

const createSomeObject = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(Avatar.MIN, Avatar.MAX) + '.png',
    },
    offer: {
      title: 'Какой-то заголовок.',
      adress: getRandomNumber(35.65000, 35.70000, 5) + ', ' + getRandomNumber(139.70000, 139.80000, 5),
      price: getRandomNumber(Price.MIN, Price.MAX),
      type: getRandomArrayElelement(types),
      rooms: getRandomNumber(Room.MIN, Room.MAX),
      guests: getRandomNumber(Guest.MIN, Guest.MAX),
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
  };
};

const similarSomeObjects = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(() => createSomeObject());

console.log(similarSomeObjects); // использую только для проверки правильности решения в ходе разработки
