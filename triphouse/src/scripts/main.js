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

//-----функции-шаблоны для переиспользования

const createContainer = (...className) => {
  const container = document.createElement('div');
  container.classList.add('container', ...className);
  return container;
};

const createDiv = (...className) => {
  const div = document.createElement('div');
  div.classList.add(...className);
  return div;
};

const createImg = (src, alt, ...className) => {
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  img.classList.add(...className);
  return img;
};

const createLink = (src, text, ...className) => {
  const link = document.createElement('a');
  link.setAttribute('src', src);
  link.innerHTML = text;
  link.classList.add(...className);
  return link;
};

const createLinkImg = (src, ...className) => {
  const link = document.createElement('a');
  link.setAttribute('src', src);
  link.classList.add(...className);
  return link;
};

const createEl = (tagName, ...className) => {
  const el = document.createElement(tagName);
  el.classList.add(...args);
  return el;
};

const createTitle = (range, text, ...className) => {
  const title = document.createElement(`h${range}`);
  const titleText = document.createTextNode(text);
  title.classList.add(...className);
  title.prepend(titleText);

  return title;
};

const createText = (content, ...className) => {
  const text = document.createElement('p');
  const textContent = document.createTextNode(text);
  text.classList.add(...className);
  text.prepend(textContent);

  return text;
};

//-----roundButton для переиспользования (что-то не так; поправить!)

const roundButton = (...className) => {
  const roundButton = createEl('button', 'slider__round-button', 'button');
  const roundButtonDiv = createDiv(
    'slider__round-button-arrow',
    'arrow-figure',
  );
  const roundButtonLineTop = createEl(
    'i',
    'arrow-figure__top',
    'arrow-figure__line',
    'hotels-preferred__slider-round-button',
  );
  const roundButtonLineBottom = createEl(
    'i',
    'arrow-figure__bottom',
    'arrow-figure__line',
    'hotels-preferred__slider-round-button',
  );

  roundButton.setAttribute('type', 'button');

  roundButtonDiv.prepend(roundButtonLineTop, roundButtonLineBottom);
  roundButton.prepend(roundButtonDiv);

  roundButton.classList.add(...className);

  return roundButton;
};

//-----Homes Guests Loves

const sectionHotels = (data) => {
  const container = createContainer();
  const section = createEl(
    'section',
    'hotels-preferred',
    '_bg-main',
    'col-xl-12',
    'col-lg-12',
    'col-md-12',
    'col-sm-6',
    'col-xs-6',
  );
  const content = createDiv('hotels-preferred__container');
  const slider = createDiv('hotels__slider', 'slider');
  const title = createTitle(
    '2',
    'Homes guests loves',
    'hotels-preferred__title',
    'title',
  );

  data.slice(0, 4).forEach((item) => {
    const slide = createDiv(
      'hotels-preferred__slider-content',
      'slider__content',
    );
    slider.appendChild(slide);

    const linkImg = createLinkImg('#', 'hotels-preferred__slider-content_link');

    const img = createImg(
      `${item.imageUrl}`,
      `${item.name}, ${item.city}, ${item.country}`,
      'hotels-preferred__slider-content_img',
      'slider__content_img',
    );

    linkImg.prepend(img);

    const hotelName = createLink(
      '#',
      `${item.name}`,
      'hotels-preferred__slider-content_link',
      'link',
      'slider__content_link',
      'slider__content_link-main',
    );
    const hotelLocation = createLink(
      '#',
      `${item.city}, ${item.country}`,
      'hotels-preferred__slider-content_link',
      'link',
      'slider__content_link',
      'slider__content_link-secondary',
    );

    slide.prepend(linkImg, hotelName, hotelLocation);
  });

  container.prepend(title, content);
  content.prepend(
    roundButton(
      'hotels-preferred__slider-round-button',
      'hotels-preferred__slider-round-button-next',
      'swiper-button-next',
    ),
    slider,
  );

  section.prepend(container);

  return section;
};

//-----сборка

const main = document.querySelector('.triphouse');

main.appendChild(sectionHotels(data));
