const getRandomInteger = (min, max) => {
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

  if (max <= min) {
    return 'Максимальное число меньше минимального или равно ему!';
  }
  if (min < 0 || max < 0) {
    return 'Одно из чисел отрицательное!';
  }

  return randomInt;
};

getRandomInteger();

const getRandomNumber = (min, max, floatNum) => {
  let randomNum = Math.random() * (max - min + 1) + min;

  if (max <= min) {
    return 'Максимальное число меньше минимального или равно ему!';
  }
  if (min < 0 || max < 0) {
    return 'Одно из чисел отрицательное!';
  }

  return randomNum.toFixed(floatNum);
};

getRandomNumber();
