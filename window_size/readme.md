# 개요

- 간단하게 브라우저의 화면의 크기를 줄이거나 늘릴 때 그 window의 inner size 및 outer size, client width를 확인할 수 있다.
- window API를 사용해본다.

# 새롭게 알게된 것

---

```javascript
window.onload()=function(){} //javascript가 html 내의 요소들을 바꾸는 경우 자바스크립트의 작성 위치에 따라 생기는 오작동을 방지하기 위해 사용. 자바스크립트가 문서가 준비된 상황 이후에 발동하도록 하는 기능이다.

window.addEventListener('resize', function () {}) // addEventListener는 특정요소(id,class,tag)에 event가 발생할 때 사용한다. 이 경우 resize되는 경우에 사용.

Document.querySelector() //제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환한다. 일치하는 요소가 없는 경우 null반환

```
