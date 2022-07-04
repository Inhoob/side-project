# Image Slider

원리 : list slider는 모든 image들을 가지고 오른쪽으로 늘여놓고 있다. 아래의 css에서 float:left 성질을 이용한건데 list slider의 left 속성을 -1000px씩 당길 때마다 이미지를 한칸씩 당겨온다.

```css
.slider-wrap ul.slider li {
  float: left;
  width: 1000px;
  height: 400px;
}
```

Indicator를 눌렀을 때 모든 Indicator에 addEvent를 해 줄 수는 없기 때문에 Event Bubbling을 이용해 indicatorWrap에서 클릭하면 해당 인덱스로 이동하도록 했다.

Autoplay 기능은 control-wrap play/pause 로 아이콘이 각각 뜨게 해뒀다.
