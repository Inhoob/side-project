## 반드시 맵이 loading 되고나서 리액트가 렌더링 될 수 있도록 하는 법

map을 불러오는 script를 public 폴더의 index.html 에 넣어준다.

맨 처음에 바로 error 가 나오는 이유? web 플랫폼에서 내가 사용할 url을 지정해주면 제대로 동작

외부에서 kakaomap api 같은 것을 가져올 때 반드시 declare로 window 내의 kakao를 정의해줘야 쓸 수 있고, window 내의 객체를 불러오는 방식으로 사용한다.
