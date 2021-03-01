import { APARTAMENT_PRICE } from './data.js';

const DECIMAL_PLACES = 5;
const MAX_PRICE = 1000000;

const RoomsCapacity = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const TitleLength = {
  MIN: 30,
  MAX: 100,
};

const adForm = document.querySelector('.ad-form');

const adFormTitle = adForm.querySelector('#title');

const mapFilters = document.querySelector('.map__filters');

const addressElement = adForm.querySelector('#address');

const filtersFieldsets = document.querySelectorAll('fieldset, select.map__filter')

const apartamentTypeElement = adForm.querySelector('#type');

const apartamentPriceElement = adForm.querySelector('#price');

const timeInElement = adForm.querySelector('#timein');

const timeOutElement = adForm.querySelector('#timeout');

const roomNumber = adForm.querySelector('#room_number');

const capacity = adForm.querySelector('#capacity');

adFormTitle.addEventListener('input', (evt) => {
  const valueLength = evt.target.value.length;
  if (valueLength < TitleLength.MIN) {
    evt.target.setCustomValidity(`Введите ещё ${TitleLength.MIN - valueLength} симв.`)
  } else if (valueLength > TitleLength.MAX) {
    evt.target.setCustomValidity(`Удалите лишние ${valueLength - TitleLength.MAX} симв.`)
  } else {
    evt.target.setCustomValidity('');
  }

  adFormTitle.reportValidity();
});

apartamentPriceElement.addEventListener('input', (evt) => {
  const valuePrice = evt.target.value;
  if (valuePrice > MAX_PRICE) {
    evt.target.setCustomValidity(`Цена за ночь не должна превышать ${MAX_PRICE} руб.`);
  } else {
    evt.target.setCustomValidity('');
  }

  evt.target.reportValidity();
});


const toggleActivateForm = () => {
  mapFilters.classList.toggle('.map__filters--disabled');
  adForm.classList.toggle('ad-form--disabled');

  filtersFieldsets.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

toggleActivateForm();

const changeMinPrice = () => {
  const type = apartamentTypeElement.value;
  apartamentPriceElement.placeholder = APARTAMENT_PRICE[type];
  apartamentPriceElement.min = APARTAMENT_PRICE[type];
};

changeMinPrice();

apartamentTypeElement.addEventListener('change', changeMinPrice);

timeInElement.addEventListener('change', (evt) => {
  timeOutElement.value = evt.target.value;
});

timeOutElement.addEventListener('change', (evt) => {
  timeInElement.value = evt.target.value;
});

const onChangeRoomNumber = () => {
  if (capacity.options.length > 0) {
    [].forEach.call(capacity.options, (item) => {
      item.selected = (RoomsCapacity[roomNumber.value][0] === item.value) ? true : false;
      item.disabled = (RoomsCapacity[roomNumber.value].indexOf(item.value) >= 0) ? false : true;
    });
  }
};

onChangeRoomNumber();

roomNumber.addEventListener('change', onChangeRoomNumber);


const setAdds = (coordinates) => {
  addressElement.value = `${coordinates.lat.toFixed(DECIMAL_PLACES)}, ${coordinates.lng.toFixed(DECIMAL_PLACES)}`;
};

export { toggleActivateForm, setAdds };
