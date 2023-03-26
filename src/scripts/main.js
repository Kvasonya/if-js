//-----Guests homes loves
const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const hotelsSlider = () => {
  const slider = document.getElementById('js-hotels-slider');

  data.slice(0, 4).forEach((item) => {
    const slide = document.createElement('div');
    slide.classList.add('.hotels-preferred__slider-content', 'slider__content');

    slider.appendChild(slide);

    const linkImg = document.createElement('a');
    linkImg.setAttribute('href', '#');
    linkImg.classList.add('hotels-preferred__slider-content_link');

    const img = document.createElement('img');
    img.setAttribute('src', `${item.imageUrl}`);
    img.setAttribute('alt', `${item.name}, ${item.city}, ${item.country}`);
    img.classList.add(
      'hotels-preferred__slider-content_img',
      'slider__content_img',
    );

    linkImg.prepend(img);

    const hotelName = document.createElement('a');
    hotelName.setAttribute('href', '#');
    hotelName.classList.add(
      'hotels-preferred__slider-content_link',
      'link',
      'slider__content_link',
      'slider__content_link-main',
    );

    const hotelNameText = document.createTextNode(`${item.name}`);
    hotelName.prepend(hotelNameText);

    const hotelLocation = document.createElement('a');
    hotelLocation.setAttribute('href', '#');
    hotelLocation.classList.add(
      'hotels-preferred__slider-content_link',
      'link',
      'slider__content_link',
      'slider__content_link-secondary',
    );

    const hotelLocationText = document.createTextNode(
      `${item.city}, ${item.country}`,
    );
    hotelLocation.prepend(hotelLocationText);

    slide.prepend(linkImg, hotelName, hotelLocation);
    slider.appendChild(slide);
  });
};

hotelsSlider();

//------Top-section Search-form

const searchGroup = document.querySelectorAll(
  '.top-section__form-group:nth-child(-n+3)',
);

for (const group of searchGroup) {
  group.addEventListener('click', function () {
    group.classList.toggle('top-section__form-group_active');
  });
} //-----как убрать? и почему "прыгает"

const guests = document.getElementById('js-guests-in-form');
const guestsFilter = document.getElementById('js-guests-filter');

const showFilter = () => {
  guestsFilter.parentElement.classList.remove('_hidden');
};

guests.addEventListener('click', showFilter);

class Counter {
  constructor({ inpFilterID, inpFormID, btnMnsID, btnPlsID, minVal, maxVal }) {
    this.inputFilter = document.getElementById(inpFilterID);
    this.inputInForm = document.getElementById(inpFormID);
    this.btnMns = document.getElementById(btnMnsID);
    this.btnPls = document.getElementById(btnPlsID);
    this.minVal = minVal;
    this.maxVal = maxVal;
  }

  startCount() {
    const inputInForm = this.inputInForm;
    const inputFilter = this.inputFilter;
    const minus = this.btnMns;
    const plus = this.btnPls;
    const min = this.minVal;
    const max = this.maxVal;

    const btnUnavailable = (btn) => {
      btn.setAttribute('disable', '');
      btn.classList.remove('filter__button_available');
      btn.classList.add('filter__button_unavailable');
    };

    const btnAvailable = (btn) => {
      btn.removeAttribute('disable');
      btn.classList.remove('filter__button_unavailable');
      btn.classList.add('filter__button_available');
    };

    minus.addEventListener('click', () => {
      inputFilter.value--;
      inputFilter.setAttribute('value', inputFilter.value);

      if (inputFilter.value > min) {
        btnAvailable(plus);
      } else {
        inputFilter.value = min;
        inputFilter.setAttribute('value', min);
        btnUnavailable(minus);
      }
    });

    plus.addEventListener('click', () => {
      inputFilter.value++;
      inputFilter.setAttribute('value', inputFilter.value);

      if (inputFilter.value < max) {
        // inputFilter.setAttribute('value', inputFilter.value);
        btnAvailable(plus);
        btnAvailable(minus);
      } else {
        inputFilter.value = max;

        inputFilter.setAttribute('value', max);
        btnUnavailable(plus);
        btnAvailable(minus);
      }
    });

    inputInForm.value = inputFilter.value; //-----почему не работает? на каком-то этапе работало :\
  }
}

const adultsTotal = new Counter({
  inpFilterID: 'js-adults-filter',
  inpFormID: 'adults',
  btnMnsID: 'js-btn-adults-mns',
  btnPlsID: 'js-btn-adults-pls',
  minVal: 1,
  maxVal: 30,
});
const childTotal = new Counter({
  inpFilterID: 'js-child-filter',
  inpFormID: 'children',
  btnMnsID: 'js-btn-child-mns',
  btnPlsID: 'js-btn-child-pls',
  minVal: 0,
  maxVal: 10,
});
const roomsTotal = new Counter({
  inpFilterID: 'js-rooms-filter',
  inpFormID: 'rooms',
  btnMnsID: 'js-btn-rooms-mns',
  btnPlsID: 'js-btn-rooms-pls',
  minVal: 1,
  maxVal: 30,
});

adultsTotal.startCount();
childTotal.startCount();
roomsTotal.startCount();

const createChildAge = () => {
  const inputFilter = document.getElementById('js-child-filter');
  const minus = document.getElementById('js-btn-child-mns');
  const plus = document.getElementById('js-btn-child-pls');

  const mainCont = document.querySelector('.filter__children');
  const childCont = document.querySelector('.filter__children-container');

  plus.addEventListener('click', () => {
    mainCont.parentElement.classList.remove('_hidden');

    const childValue = Number(inputFilter.getAttribute('value'));

    childCont.innerHTML = '';
    for (let i = 1; i <= childValue; i += 1) {
      childCont.appendChild(
        Object.assign(document.createElement('select'), {
          innerHTML: `<option>0 years old</option>
<option>1 years old</option>
<option>2 years old</option>
<option>3 years old</option>
<option>4 years old</option>
<option>5 years old</option>
<option>6 years old</option>
<option>7 years old</option>
<option>8 years old</option>
<option>9 years old</option>
<option>10 years old</option>
<option>11 years old</option>
<option>12 years old</option>
<option>13 years old</option>
<option>14 years old</option>
<option>15 years old</option>
<option>16 years old</option>
<option>17 years old</option>`,
          id: `child-${i}-age`,
          className: 'filter__children_select-age',
        }),
      );
    }
  });

  minus.addEventListener('click', () => {
    const childValue = Number(inputFilter.getAttribute('value'));
    childValue !== 0
      ? childCont.lastChild.remove()
      : mainCont.parentElement.classList.add('_hidden');
  });
};

createChildAge();
