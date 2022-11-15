const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const firstOperend = document.querySelector(".calculator__operend--left");
const operator = document.querySelector(".calculator__operator");
const secondOperend = document.querySelector(".calculator__operend--right");
const calculatedResult = document.querySelector(".calculator__result");

function calculate(n1, operator, n2) {
  let result = 0;
  if (operator === "+") {
    result = Number(n1) + Number(n2);
  }
  if (operator === "-") {
    result = Number(n1) - Number(n2);
  }
  if (operator === "*") {
    result = Number(n1) * Number(n2);
  }
  if (operator === "/") {
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "number") {
      if (firstOperend.textContent !== "0") {
        secondOperend.textContent = buttonContent;
      } else {
        firstOperend.textContent = buttonContent;
      }
    }

    if (action === "operator") {
      console.log("연산자 " + buttonContent + " 버튼");
      operator.textContent = buttonContent;
    }

    if (action === "decimal") {
    }

    if (action === "clear") {
      console.log("초기화 버튼");
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      operator.textContent = "+";
      calculatedResult.textContent = "0";
    }
    if (action === "dot") {
    }

    if (action === "calculate") {
      calculatedResult.textContent = calculate(
        firstOperend.textContent,
        operator.textContent,
        secondOperend.textContent
      );
    }
  }
});

const display = document.querySelector(".calculator__display--for-advanced"); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum;
let operatorForAdvanced = "";
let previousKey = "";
let previousNum = "";
let currentNum = 0;
let count = 0;
let dotted = 0;

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "number") {
      if (dotted === 0) {
        if (display.textContent === "0" && operatorForAdvanced === "") {
          display.textContent = buttonContent;
          firstNum = display.textContent;
        } else if (display.textContent !== "0" && operatorForAdvanced === "") {
          display.textContent = display.textContent + buttonContent; //첫번째 수의 첫번째가 아닌 숫자
          firstNum = display.textContent;
        } else if (display.textContent !== "0" && operatorForAdvanced !== "") {
          //두번째 수의 시작 시작됨
          if (previousKey === "operator") {
            display.textContent = buttonContent;
            previousKey = display.textContent;
            previousNum = display.textContent; //두번째 수의 첫번째 숫자
          } else if (previousKey !== "operator") {
            display.textContent = display.textContent + buttonContent;
            previousNum = display.textContent;
          }
        }
      } else {
        count = count + 1;
        if (operatorForAdvanced === "") {
          firstNum = firstNum + buttonContent;
          display.textContent = display.textContent + buttonContent;
        } else if (operatorForAdvanced !== "") {
          previousNum = previousNum + buttonContent;
          display.textContent = display.textContent + buttonContent;
          console.log(firstNum);
        }
      }
      previousKey = "number";
    }

    if (action === "operator") {
      operatorForAdvanced = buttonContent; 
      display.textContent = operator.textContent;
      previousKey = "operator";
      count = 0;
      dotted = 0;
    

    if (action === "dot") {
      dotted = 1;
      display.textContent = display.textContent + buttonContent;
      if (operatorForAdvanced === "") {
        firstNum = firstNum + buttonContent;
      }
      if (operatorForAdvanced !== "") {
        previousNum = previousNum + buttonContent;
      }
    }

    if (action === "clear") {
      display.textContent = "0";
      firstNum = "";
      previousNum = "";
      operatorForAdvanced = "";
      previousKey = "";
      count = 0;
      dotted = 0;
    }

    if (action === "calculate") {
      display.textContent = calculate(firstNum, operatorForAdvanced, previousNum);
      count = 0;
    }
  }
});
