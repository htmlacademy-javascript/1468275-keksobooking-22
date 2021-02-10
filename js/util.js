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
};

export {getRandomNumber, getRandomArrayElelement, shuffleArray};
