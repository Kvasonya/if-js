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
