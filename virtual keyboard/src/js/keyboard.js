export class Keyboard {
  #switchEl; //private field 사용 Keyboard 클래스를 생성하면 switchEl이 발생한다
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
  }
  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
  }
}
