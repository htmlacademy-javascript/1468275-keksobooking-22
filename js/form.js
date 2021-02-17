const APARTAMENT_PRICE = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const adForm = document.querySelector('.ad-form');

const apartamentTypeElement = adForm.querySelector('#type');
const apartamentPriceElement = adForm.querySelector('#price');
const timeInElement = adForm.querySelector('#timein');
const timeOutElement = adForm.querySelector('#timeout');

const changeMinPrice = () => {
  const type = apartamentTypeElement.value;
  apartamentPriceElement.placeholder = APARTAMENT_PRICE[type];
  apartamentPriceElement.min = APARTAMENT_PRICE[type];
};

changeMinPrice();

apartamentTypeElement.addEventListener('change', changeMinPrice);
timeInElement.addEventListener('change', () => {
  timeOutElement.value = timeInElement.value;
});
timeOutElement.addEventListener('change', () => {
  timeInElement.value = timeOutElement.value;
});
