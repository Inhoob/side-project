export default class imageSlider {
  #currentPosition = 0;

  #slideNumber = 0;

  #slideWidth = 0;

  sliderWrapEl;

  sliderListEl;

  previousBtnEl;

  constructor() {
    this.assignElement();
    this.initSlideNumber();
    this.initSlideWidth();
    this.initSliderListWidth();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.previousBtnEl = this.sliderWrapEl.querySelector('#previous');
  }

  initSlideNumber() {
    this.#slideNumber = this.sliderListEl.querySelectorAll('li').length;
  }

  initSlideWidth() {
    this.#slideWidth = this.sliderListEl.clientWidth;
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${this.#slideNumber * this.#slideWidth}px`;
  }

  addEvent() {
    this.nextBtnEl.addEventListener('click', this.moveToRight.bind(this));
  }

  moveToRight() {
    this.#currentPosition + 1;
  }
}
