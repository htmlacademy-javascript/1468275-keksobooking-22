const APARTAMENT_PRICE = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const apartamentTypeElement = document.querySelector('.house-type');
const apartamentPriceElement = document.querySelector('.house-price');
const timeInElement = document.querySelector('.timein');
const timeOutElement = document.querySelector('.timeout');

const changeMinPrice = () => {
  const type = apartamentTypeElement.value;
  apartamentPriceElement.placeholder = APARTAMENT_PRICE[type];
  apartamentPriceElement.min = APARTAMENT_PRICE[type];
};

document.addEventListener('DOMContentLoaded', changeMinPrice);

apartamentTypeElement.addEventListener('change', changeMinPrice);
timeInElement.addEventListener('change', () => {
  timeOutElement.value = timeInElement.value;
});
timeOutElement.addEventListener('change', () => {
  timeInElement.value = timeOutElement.value;
});
