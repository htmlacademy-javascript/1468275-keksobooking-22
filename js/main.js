const getRandomInteger = (min, max) => {
  if (max <= min || (min < 0 || max < 0)) {
    return -1;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger(3, 8);

const getRandomNumber = (min, max, floatNum) => {
  if (max <= min || (min < 0 || max < 0)) {
    return -1;
  }

  return (Math.random() * (max - min) + min).toFixed(floatNum);
};

getRandomNumber(1.1, 1.9, 4);
