# 개요

- Button을 누르면 scroll 하는 API

## 새롭게 알게된 것

- scroll X,Y 와 pages X,Y의 차이점
- window.addEventListener('DOMcontentLoaded')가 window.addEventListener('load')보다 빠르다. 왜냐하면 전자는 HTML의 document요소들만 다 출력이 되면 발생하는 event인 반면 후자는 css, images와 같은 전체 resource가 load되고나서 발생하는 event이기 때문이다.
- 'beforeunload'와 'unload'도 있다. 사용자가 페이지를 나갈 때 발생하는 event다.

## 궁금한 점

```javascript
scrollBy.addEventListener("click", (event) => {
  window.scrollBy(0, 100);
});
scrollBy.addEventListener("click", () => {
  window.scrollBy(0, 100);
});
```

위의 코드와 아래 코드의 다른 점은 무엇인가?
