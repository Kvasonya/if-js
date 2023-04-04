const allText = document.querySelectorAll('.text-color-js');

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

const changeStyle = (color) => (event) =>
  (event.target.style.color = color.next().value);

for (let i = 0; i < allText.length; i += 1) {
  allText[i].addEventListener('click', changeStyle({ ...colors }));
}
