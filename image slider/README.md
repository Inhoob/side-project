# Image Slider

![](https://velog.velcdn.com/images/colagom/post/06eceebf-8dab-4a67-95de-954c591a7794/image.gif)

# 이미지 슬라이더의 기능

1. 마우스를 올리면 생기는 next, prev 버튼으로 오른쪽 또는 왼쪽 이미지로 이동할 수 있다.
2. 아래에 있는 Indicator를 눌러서 내가 원하는 인덱스로 바로 이동할 수 있다.
3. Autoplay 버튼을 추가해 일정시간 마다 이미지가 넘어가도록 할 수 있다.

## CSS 주목할만한 점

```javascript
.slider-wrap {
  width: 1000px;
  height: 400px;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
}

.slider-wrap ul.slider {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
}


.slider-wrap ul.slider li {
  float: left;
  width: 1000px;
  height: 400px;
}

.btn {
  position: absolute;
  width: 50px;
  height: 60px;
  top: 50%;
  margin-top: -25px;
  line-height: 57px;
  text-align: center;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;
  user-select: none;
  transition: 0.1s;
}
/* 오른쪽버튼은 50px 밖에 있다가 아래에서 hover로 right 값을 0으로 당겨준다. */
.next {
  right: -50px;
  border-radius: 7px 0px 0px 7px;
  color: white;
}
/* 왼쪽버튼은 50px 왼쪽에 있다가 hover로 당겨줌 */
.previous {
  left: -50px;
  border-radius: 0px 7px 7px 7px;
  color: white;
}

.slider-wrap:hover .next {
  right: 0px;
}

.slider-wrap:hover .previous {
  left: 0px;
}
```

position:relative는 자기자신을 기준으로 배치하는 것이고 position:absolute는 부모요소를 기준으로 배치하는 것이다.

.slider-wrap ul.slider 에서 left:0을 준 것은 나중에 이미지가 넘어갈 때 transition 값을 주어 부드럽게 넘어가는 것을 구현했는데 left를 아예 설정해 놓지 않는다면 left:auto 에서 left 값이 변하는 순간에 transition이 작동하지 않는다. 그렇기 때문에 left:0으로 초기화 해 놓은 것이다.

버튼에서 준 z-index는 버튼이 가장 위에 있게 하기 위에서이고, transition 속성은 hover에 적용한 것이다.

next, previous 버튼은 밖에 있다가(이 때는 overflow:hidden 속성에 의해 안보인다) slider-wrap 에 마우스가 hover 되면 안으로 들어오도록 설정해 뒀다.

## 1. 좌우 버튼으로 이미지 슬라이딩

```javascript
#currentPosition = 0;

initSlideNumber() {
    this.#slideNumber = this.sliderListEl.querySelectorAll('li').length;
  }

initSlideWidth() {
    this.#slideWidth = this.sliderListEl.clientWidth;
  }

initSliderListWidth() {
    this.sliderListEl.style.width = `${this.#slideNumber * this.#slideWidth}px`;
  }


moveToRight() {
    this.#currentPosition += 1;
    if (this.#currentPosition === this.#slideNumber) {
      this.#currentPosition = 0;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
    if (this.#autoPlay) {
      clearInterval(this.#intervalId);
      this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
    } // 이 두 줄이 next,prev 버튼과 autoplay의 독립성 보장

    this.setIndicator();
  }

  moveToLeft() {
    this.#currentPosition -= 1;
    if (this.#currentPosition === -1) {
      this.#currentPosition = this.#slideNumber - 1;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
    if (this.#autoPlay) {
      clearInterval(this.#intervalId);
      this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
    }

    this.setIndicator();
  }
```

this.#slideWidth 는 this.sliderListEl.clientWidth 를 줬고 이 값은 1000px 이다. 오른쪽 버튼을 누르면 1000px씩 left값을 빼는 식으로 동작한다.

if (this.#autoPlay) 부분은 autoPlay 와 next,prev 버튼으로 넘어갈 때 독립적으로 동작하기 위해서이다. 이 조건문이 없으면 내가 setInterval 로 준 3초 직전에 next 버튼을 누를 때 동시에 두칸이 넘어가 버린다.

마지막으로 setIndicator는 이미지가 넘어갔기 때문에 Indicator도 그에 맞춰서 설정해준다.

## 2. Indicator를 이용한 슬라이딩

```javascript
  createIndicator() {
      const docFragment = document.createDocumentFragment();
      for (let i = 0; i < this.#slideNumber; i += 1) {
        const li = document.createElement('li');
        li.dataset.index = i;
        docFragment.appendChild(li);
      }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFragment);
  }

  // 활성화된 index가 없었다가 index에 따라서 활성화

  setIndicator() {
    this.indicatorWrapEl.querySelector('li.active')?.classList.remove('active');
    this.indicatorWrapEl
      .querySelector(
        `ul li:nth-child(${this.#currentPosition + 1})`,
      )
      .classList.add('active');
  }
  onClickIndicator(event) {
      const indexPosition = parseInt(event.target.dataset.index, 10);
      if (Number.isInteger(indexPosition)) {
        this.#currentPosition = indexPosition;
        this.sliderListEl.style.left = `-${
          this.#slideWidth * this.#currentPosition
        }px`;
      }
      this.setIndicator(); // position이 바뀌면 indicator도 다시세팅
    }
```

먼저 Indicator를 slide Number에 맞춰 동적으로 생성한다.

DocumentFragment는 `<li>` 사이에 딱히 들어가는 내용이 없기 때문에 사용했다. docFragment는 다른 노드를 담는 임시 컨테이너 역할을 하는 특수 목적의 노드이다.

slide의 개수만큼 `<li>` 태그를 생성하는데 data-index:0 같은 attribute가 들어간다.

그리고 Indicator를 다 생성했으면 그 중에 현재 이미지의 index에 해당하는 Indicator만 흰 색으로 빛나고 있어야 한다. active 라는 css 속성을 제거하고 (이 때 active가 없는곳에서 삭제할 수도 있기 때문에 optional chaining 적용) currentPosition에 해당하는 Indicator의 요소를 찾아서 active 속성을 더해준다. 이 때 nth-child 는 1부터 시작하기 때문에 1을 더해줬다.

마지막으로 onClickIndicator는 Indicator의 한 점을 눌렀을 때 그 이미지로 바로 이동하는 함수인데 event.target.dataset.index는 Indicator 요소의 data-index의 값을 **문자열**의 형태로 가져오기 때문에 숫자형으로 바꿔주는 과정을 거쳤다. 뒤에 10진수까지 표현한 것은 ES Lint에서 10진수까지 적어주지 않으면 경고가 뜨길래 적어뒀다.

if (Number.isInteger(indexPosition)) 를 넣은 이유는 indexPosition이 반드시 index만 리턴하지 않는다. event가 발생할 때 Indicator 사이를 찍으면 undefined가 나오는데 이 경우 함수가 작동하지 않게 하기 위해 추가해줬다.

그 이후에 이미지 슬라이딩은 위에서 next,prev 버튼으로 넘어가는 것과 같은 방식이다.

## 3. Autoplay

```css
.play .fa-play {
  display: none;
}

.play .fa-pause {
  display: block;
}

.pause .fa-play {
  display: block;
}

.pause .fa-pause {
  display: none;
}
```

```javascript
  initAutoplay() {
    this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
  }
  togglePlay(event) {
      if (event.target.dataset.status === 'play') {
        this.#autoPlay = true;
        this.controlWrapEl.classList.add('play');
        this.controlWrapEl.classList.remove('pause');
        this.initAutoplay();
      } else if (event.target.dataset.status === 'pause') {
        this.#autoPlay = false;
        this.controlWrapEl.classList.add('pause');
        this.controlWrapEl.classList.remove('play');
        clearInterval(this.#intervalId);
      }
    }
```

play 중일 때에는 pause 아이콘이 보이고 pause 중일 때에는 play 아이콘이 보인다.

this.#autoPlay 상태가 필요한 이유는 autoPlay 와 버튼 클릭이 독립적으로 동작하기 위해서라고 위에서 언급했었다.

setInterval을 이용해 3초에 한번씩 moveToRight 함수를 실행하도록 했으며 이것을 this.#intervalId에 할당해서 중지시키고 싶을 때 clearInterval에 넣어준다.

## Element 할당과 addEvent 묶어서 처리하기

```javascript
  constructor() {
    this.assignElement();
    this.initSlideNumber();
    this.initSlideWidth();
    this.initSliderListWidth();
    this.addEvent();
    this.createIndicator();
    this.setIndicator();
    this.initAutoplay();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.previousBtnEl = this.sliderWrapEl.querySelector('#previous');
    this.indicatorWrapEl = this.sliderWrapEl.querySelector('#indicator-wrap');
    this.controlWrapEl = this.sliderWrapEl.querySelector('#control-wrap');
  }
  addEvent() {
    this.nextBtnEl.addEventListener('click', this.moveToRight.bind(this));
    this.previousBtnEl.addEventListener('click', this.moveToLeft.bind(this));
    this.indicatorWrapEl.addEventListener(
      'click',
      this.onClickIndicator.bind(this),
    );
    this.controlWrapEl.addEventListener('click', this.togglePlay.bind(this));
  }
```

## 고찰

dataset 을 이용해서 index를 가진 노드들을 만들어준다던가 상태를 지정하기도 하는 등 유용하게 사용할 수 있다는 것을 알았다.

여전히 상태가 많고, event가 많은 문제를 보면 지레 겁부터 먹게 되는 것 같다. 어떤 부분에서 this 바인딩을 하고, this 바인딩을 안하는지 정하는 것은 맨땅에서 코딩하는 경우 에러로 고생을 많이 할 것 같다.

JS를 통해 CSS를 조작하는 것은 연습이 많이 필요해보인다.
