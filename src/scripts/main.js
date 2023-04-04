//------Top-section Search-form------

const screenXL = window.screen.availWidth > 1280;
const screenLG =
  window.screen.availWidth <= 1280 && window.screen.availWidth > 1024;
// const screenMD = window.screen.availWidth <= 1024 && window.screen.availWidth > 768;
// const screenSM = window.screen.availWidth <= 768 && window.screen.availWidth > 480;
// const screenXS = window.screen.availWidth <= 480;

const searchGroup = document.querySelectorAll(
  '.top-section__form-group:nth-child(-n+3)',
);

const guestsForm = document.getElementById('js-guests-in-form');
const guestsFilter = document.getElementById('js-guests-filter');

//-----Show filter and style effects

const formInFocus = (event) => {
  event.currentTarget.classList.add('top-section__form-group_active');
}; //-----прыгает (почему?/починить?)

const formNotFocus = (event) => {
  for (let i = 0; i < searchGroup.length; i++) {
    if (searchGroup[i].classList.contains('top-section__form-group_guests')) {
      if (
        !event.composedPath().includes(guestsForm) &&
        !event.composedPath().includes(guestsFilter)
      ) {
        searchGroup[i].classList.remove('top-section__form-group_active');
        guestsFilter.parentElement.classList.add('_hidden');
      }
    } else if (!event.composedPath().includes(searchGroup[i])) {
      searchGroup[i].classList.remove('top-section__form-group_active');
    }
  }
};

const showFilter = () => {
  guestsFilter.parentElement.classList.remove('_hidden');
};

for (const group of searchGroup) {
  group.addEventListener('click', formInFocus);
}

document.addEventListener('click', formNotFocus);
guestsForm.addEventListener('click', showFilter);

//------Counters in the guest filter

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
      inputInForm.value = inputFilter.value;
      inputFilter.setAttribute('value', inputFilter.value);
      inputInForm.setAttribute('value', inputFilter.value);
    });

    plus.addEventListener('click', () => {
      inputFilter.value++;

      if (inputFilter.value < max) {
        btnAvailable(plus);
        btnAvailable(minus);
      } else {
        inputFilter.value = max;
        inputFilter.setAttribute('value', max);
        btnUnavailable(plus);
        btnAvailable(minus);
      }

      inputInForm.value = inputFilter.value;
      inputFilter.setAttribute('value', inputFilter.value);
      inputInForm.setAttribute('value', inputFilter.value);
    });
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

//-----Additional filter (age of children)

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
      let option = String;
      for (let n = 0; n <= 17; n += 1) {
        option += `<option>${n} years old</option>`;
      }

      childCont.appendChild(
        Object.assign(document.createElement('select'), {
          innerHTML: `${option}`,
          id: `child-${i}-age`,
          className: 'filter__children_select-age',
        }),
      );
    }
    if (screenXL && childValue > 2) {
      guestsFilter.classList.add('filter_shadow');
    }

    if (screenLG && childValue >= 1) {
      guestsFilter.classList.add('filter_shadow');
    }
  });

  minus.addEventListener('click', () => {
    const childValue = Number(inputFilter.getAttribute('value'));
    childValue !== 0
      ? childCont.lastChild.remove()
      : mainCont.parentElement.classList.add('_hidden');

    if (screenXL && childValue <= 2) {
      guestsFilter.classList.remove('filter_shadow');
    }
    if (screenLG && childValue <= 1)
      guestsFilter.classList.remove('filter_shadow');
  });
};

createChildAge();

//-----for screen < 1024

const destInput = document.querySelector(
  '.top-section__form-content_destination',
);

const formInMobile = () => {
  if (window.screen.availWidth < 1024) {
    destInput.setAttribute('placeholder', 'Your destination or hotel name');

    for (const group of searchGroup) {
      group.removeEventListener('click', formInFocus);
    }
  }
};

formInMobile();

// const burger = document.querySelector('.burger');
// const headerMenu = document.querySelectorAll('.header__menu-item:nth-child(-n+2)');
//
// burger.addEventListener('click', () => {
//   burger.classList.toggle('burger_active');
//
//   for (const item of headerMenu) {
//     item.classList.toggle('menu_active');
//   }
// });

//-----Guests homes loves

fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  })
  .then((data) => {
    const hotelsSlider = document.getElementById('js-hotels-slider');

    let numSlides = undefined;
    const windSize = window.screen.availWidth;

    windSize <= 1024 && windSize > 480
      ? (numSlides = 3)
      : windSize <= 480
      ? (numSlides = 2)
      : (numSlides = 4);

    data.slice(0, numSlides).forEach((item) => {
      const slide = document.createElement('div');
      slide.classList.add(
        '.hotels-preferred__slider-content',
        'slider__content',
      );

      hotelsSlider.appendChild(slide);

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
      hotelsSlider.appendChild(slide);
    });
  })
  .catch((err) => {
    console.log(`${err.name}: ${err.message}`);
  });
