## Webpack

웹개발에 필요한 html, css ,js를 하나로 압축해줌
npm i -D webpack webpack-cli webpack-dev-server 웹팩설치
-D라는건 dev dependency에 패키지를 설치해주겠다는 뜻이다 로컬개발이나 테스트에만 필요한 패키지를 의미
-D를 지우면 그냥 dependency에 설치되는데 이거는 production 환경에 필요한 dependent를 의미

npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin
css와 html 합쳐줄 모듈

npm i -D eslint =>eslint 설치
npm install --save-dev --save-exact prettier =>prettier 설치
npm i -D eslint-config-prettier eslint-plugin-prettier=> config는 포맷팅 겹치는부분 비활성화, plugin은 eslint에 prettier의 포맷팅을 추가

html과 css파일을 만들어놓고 실행해보려면 npm run dev 입력하면 됨

## Dark Theme(다크 테마)

```html
<html theme=""></html>
```

```css
html[theme="dark-mode"] {
  /* ! */
  filter: invert(100%) hue-rotate(180deg); /*invert는 색상반전, hue-rotate는 색띠에서 반대편의 색깔을 나타냄*/
}
```

그리고 js파일은 keyboard.js파일을 참조할 것

## Slider 부분

input의 형제요소로 slider가 있는데 이 부분을 어떤식으로 control하는지 잘 볼것

```css
.slider::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.5s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: black;
}

input:checked + .slider::before {
  /* ! */
  transform: translateX(26px);
}
```

em과 rem 차이점
em,rem 둘다 상대적 크기인데 em은 현재의 태그내에서의 크기 기준이고 rem은 root 기준이다.

## Font 변경

keyboard.js 의 font select부분 참조
