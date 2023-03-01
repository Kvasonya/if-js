// ------lesson-9_task-1

const allText = document.querySelectorAll('#text1, #text2, #text3');

// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.color === undefined) {
      this.color = 0;
      return {
        done: false,
        value: this.data[this.color],
      };
    }

    if (this.color < this.data.length) {
      return {
        done: false,
        value: this.data[(this.color += 1)],
      };
    }

    if (this.color === this.data.length) {
      this.color = 0;

      return {
        done: false,
        value: this.data[this.color],
      };
    }
  },
};

const changeStyle = (id) => (event) =>
  (event.target.style.color = colors.next(id).value);

for (let i = 0; i < allText.length; i += 1) {
  allText[i].addEventListener('click', changeStyle(allText[i])); //-----не работают независимо
}

// text1.addEventListener('click', changeStyle(text1));
// text2.addEventListener('click', changeStyle(text2));
