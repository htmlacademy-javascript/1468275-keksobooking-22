import { APARTAMENT_PRICE } from './data.js';

const DECIMAL_PLACES = 5;

const adForm = document.querySelector('.ad-form');

const mapFilters = document.querySelector('.map__filters');

const addressElement = adForm.querySelector('#address');

const mapFiltersFieldsets = mapFilters.querySelectorAll('.map__filter');

const mapFiltersFeatures = mapFilters.querySelector('.map__features');

const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');

const adFormHeader = adForm.querySelector('.ad-form-header');

const apartamentTypeElement = adForm.querySelector('#type');

const apartamentPriceElement = adForm.querySelector('#price');

const timeInElement = adForm.querySelector('#timein');

const timeOutElement = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

mapFilters.classList.add('.map__filters--disabled');

adForm.classList.add('ad-form--disabled');

addressElement.readOnly = true;

adFormFieldsets.forEach((element) => {
  element.disabled = true;
});

mapFiltersFieldsets.forEach((element) => {
  element.disabled = true;
});

mapFiltersFeatures.disabled = true;

adFormHeader.disabled = true;

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

roomNumber.addEventListener('change', () => {
  capacity.value = roomNumber.value;
});

const setAdds = (coordinates) => {
  addressElement.value = `${coordinates.lat.toFixed(DECIMAL_PLACES)}, ${coordinates.lng.toFixed(DECIMAL_PLACES)}`;
}

const activateForm = () => {
  mapFilters.classList.remove('.map__filters--disabled');

  adForm.classList.remove('ad-form--disabled');

  adFormFieldsets.forEach((element) => {
    element.disabled = false;
  });

  mapFiltersFieldsets.forEach((element) => {
    element.disabled = false;
  });

  mapFiltersFeatures.disabled = false;

  adFormHeader.disabled = false;
};

export { activateForm, setAdds };
