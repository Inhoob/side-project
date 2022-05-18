## 회원가입페이지

- 아이디 / 생년월일 / 비밀번호 / 비밀번호 확인으로 구성
- 아이디가 4글자 이하인경우 글자수가 부족하다는 문구가 나오도록
- 비밀번호와 비밀번호 확인이 다른 경우 문구가 나옴
- 회원가입을 눌렀을 때 아이디와 비밀번호가 정규식을 만족하는지 확인<br>
  정규식 - id는 영문자와 숫자로만 이루어져야 하며 password는 8자이상이며 영문자,숫자,특수문자가 하나 이상 포함되어야 함

<br>
<br>
<br>

## 새롭게 배운것

---

1. onkeyup, addEventListener등 DOM 요소를 활용해서 javascript로 HTML 요소를 조작함
2. target.classList.add 와 target.classList.remove 를 통해 class명을 추가/제거하고 CSS를 같이 활용해 HTML의 요소의 보임/숨김을 결정할 수 있음.
3. `<input type="date" id="birth" onchange="handler(event)">`를 통해 <input type="date" id="birth" onchange="handler(event)"> << 이런 태그를 만들 수 있고 생년월일을 입력할 수 있음
4. js파일에 js파일을 덧씌우기

```javascript
document.write("<script src='validator.js'></script>");
```

## handler event 코드

---

```javascript
function handler(e) {
  alert(e.target.value);
  //console.log(e.target.value.split('-')[0]) 2022 출력
}

let birthday = document.querySelector("#birth").value;

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1; //month는 1을 더해줘야 맞다
let date = today.getDate();
```

## 추가적으로 구현하고 싶은 내용 / 수정해야 하는 내용

---

1. ~~경고 문구가 사라지고 Tab키를 통해 다음 상자로 넘어갈 때 간단하게 체크모양이 나오면 괜찮을 것 같음.~~ 5/18 완료

2. ~~오늘 날짜보다 미래를 선택하면 선택 불가능하도록 제재~~ 5/18 완료
3. 소셜로그인 기능
4. 버튼을 누를 때 피드백이 사라졌음.. why??

---

## 5/18 추가내용

1. 정규식을 통해 onkeyup 상태에서 즉각적으로 나타나는 피드백 문구를 없앴음
2. 대신 그 자리에 사용가능한 아이디가 나올 경우 fontawesome 에서 가져온 체크모양 이미지를 넣도록
3. 회원가입을 할 때 id가 정규식을 만족하는지>birth>password 및 passwordretype이 같은지 확인>password가 정규식을 만족하는지 순차적으로 판별.
4. 현재날짜보다 늦은 날짜를 선택할 경우 경고문구.
5. 소셜로그인 기능은 없고 facebook으로 로그인 버튼을 누르면 그냥 facebook으로 연결되도록..(추후 변경 예정)
