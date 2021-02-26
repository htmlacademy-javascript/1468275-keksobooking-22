import { APARTAMENT_PRICE } from './data.js';

const DECIMAL_PLACES = 5;
const MAX_PRICE = 1000000;

const TitleLength = {
  MIN: 30,
  MAX: 100,
};

const adForm = document.querySelector('.ad-form');

const adFormTitle = adForm.querySelector('#title');

const mapFilters = document.querySelector('.map__filters');

const addressElement = adForm.querySelector('#address');

const filtersFieldsets = document.querySelectorAll('fieldset, select.map__filter')

const mapFiltersFeatures = mapFilters.querySelector('.map__features');

const adFormHeader = adForm.querySelector('.ad-form-header');

const apartamentTypeElement = adForm.querySelector('#type');

const apartamentPriceElement = adForm.querySelector('#price');

const timeInElement = adForm.querySelector('#timein');

const timeOutElement = adForm.querySelector('#timeout');

const roomNumber = adForm.querySelector('#room_number');

const capacity = adForm.querySelector('#capacity');

adFormTitle.addEventListener('input', (evt) => {
  const valueLength = evt.target.value.length;
  if (valueLength < TitleLength.MIN) {
    adFormTitle.setCustomValidity(`Введите ещё ${TitleLength.MIN - valueLength} симв.`)
  } else if (valueLength > TitleLength.MAX) {
    adFormTitle.setCustomValidity(`Удалите лишние ${valueLength - TitleLength.MAX} симв.`)
  } else {
    adFormTitle.setCustomValidity('');
  }

  adFormTitle.reportValidity();
});

apartamentPriceElement.addEventListener('input', (evt) => {
  const valuePrice = evt.target.value;
  if (valuePrice > MAX_PRICE) {
    apartamentPriceElement.setCustomValidity(`Цена за ночь не должна превышать ${MAX_PRICE} руб.`);
  } else {
    apartamentPriceElement.setCustomValidity('');
  }

  apartamentPriceElement.reportValidity();
});


const deactivateForm = () => {
  mapFilters.classList.add('.map__filters--disabled');

  adForm.classList.add('ad-form--disabled');

  addressElement.readOnly = true;

  filtersFieldsets.forEach((element) => {
    element.disabled = !element.disabled;
  });

  mapFiltersFeatures.disabled = true;

  adFormHeader.disabled = true;
};

deactivateForm();

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

  filtersFieldsets.forEach((element) => {
    element.disabled = false;
  });

  mapFiltersFeatures.disabled = false;

  adFormHeader.disabled = false;
};

export { activateForm, setAdds };
