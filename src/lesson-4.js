//--------lesson-4_task-1---------
const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

const sumArrow = (a) => (b) => a + b;

//--------lesson-4_task-2---------
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text = document.querySelectorAll('#text1, #text2, #text3');

const getColor = function () {
  let i = 0;
  return function selectColor(event) {
    event.target.style.color = colors[i];
    event.target.classList.remove('text_no-active');
    event.target.classList.add('text_active');
    i += 1;
    if (i === colors.length) {
      i = 0;
    }
  };
};

// for (let i = 0; i < text.length; i += 1) {
//   text[i].addEventListener('click', getColor());
// }

//Just for interest------find how to add additional iteration in reverse order (30-20-10-20-30-20... etc)

const sizes = ['30', '20', '10'];
const text4 = document.getElementById('text4');

const getSize = function () {
  let i = 0;
  return function selectSize(event) {
    event.target.style.fontSize = sizes[i] + 'px';
    i += 1;
    if (i === sizes.length) {
      i = 0;
    }
  };
};

text4.addEventListener('click', getSize());

//--------lesson-4_task-3---------

//tests in tests/lesson-3.test.js

export { sum, sumArrow, text, getColor };
