# Image Slider

원리 : list slider는 모든 image들을 가지고 오른쪽으로 늘여놓고 있다. 아래의 css에서 float:left 성질을 이용한건데 list slider의 left 속성을 -1000px씩 당길 때마다 이미지를 한칸씩 당겨온다.

```css
.slider-wrap ul.slider li {
  float: left;
  width: 1000px;
  height: 400px;
}
```
