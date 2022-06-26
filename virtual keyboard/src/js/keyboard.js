export class Keyboard {
  #switchEl; //private field 사용 Keyboard 클래스를 생성하면 switchEl이 발생한다
  #fontSelectEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }
  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
    this.#fontSelectEl.addEventListener("change", (event) => {
      document.body.style.fontFamily = event.target.value;
    });
  }
}
