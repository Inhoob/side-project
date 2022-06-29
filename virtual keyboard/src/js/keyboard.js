export class Keyboard {
  #switchEl; //private field 사용 Keyboard 클래스를 생성하면 switchEl이 발생한다
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
    this.#inputEl = this.#inputGroupEl.querySelector("#input");
  }
  #addEvent() {
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown", this.#onKeyDown.bind(this)); //이 두개를 bind 하는 이유는 함수에서 this를 쓰고 있는데 전역객체의 this는 윈도우다. 윈도우에 #inputEl같은 요소가 없기 때문에 bind해주는 것
    document.addEventListener("keyup", this.#onKeyUp.bind(this));
    this.#inputEl.addEventListener("input", this.#onInput);
    this.#keyboardEl.addEventListener("mousedown", this.#onMouseDown);
    document.addEventListener("mouseup", this.#onMouseUp);
  }
  #onMouseUp() {}
  #onMouseDown(event) {}
  #onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ/ㅏ-ㅣ/가-힣]/, "");
  }
  #onKeyDown(event) {
    this.#inputGroupEl.classList.toggle(
      "error",
      /[ㄱ-ㅎ/ㅏ-ㅣ/가-힣]/.test(event.key)
    );

    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`) //이 attribute를 가진 dom을 찾아라
      ?.classList.add("active"); //key를 눌렀을 때 css의 active 속성 추가
  }
  #onKeyUp(event) {
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`) //이 attribute를 가진 dom을 찾아라
      ?.classList.remove("active"); //key를 눌렀을 때 css의 active 속성 추가
  }
  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }
  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
}
