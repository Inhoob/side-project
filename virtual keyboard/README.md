## Webpack

웹개발에 필요한 html, css ,js를 하나로 압축해줌
npm i -D webpack webpack-cli webpack-dev-server 웹팩설치
-D라는건 dev dependency에 패키지를 설치해주겠다는 뜻이다 로컬개발이나 테스트에만 필요한 패키지를 의미
-D를 지우면 그냥 dependency에 설치되는데 이거는 production 환경에 필요한 dependent를 의미

npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin
css와 html 합쳐줄 모듈
