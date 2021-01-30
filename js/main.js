const getRandomInteger = (min, max) => {
  if (max <= min || (min < 0 || max < 0)) {
    return -1;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger();

const getRandomNumber = (min, max, floatNum) => {
  if (max <= min || (min < 0 || max < 0)) {
    return -1;
  }

  return (Math.random() * (max - min + 1) + min).toFixed(floatNum);
};

getRandomNumber();
