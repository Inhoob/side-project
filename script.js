const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result=0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
    if (operator==='+'){
    result = Number(n1) + Number(n2);
    
    }
    if (operator==='-'){
    result = Number(n1) - Number(n2);
    }
    if (operator==='*'){
    result = Number(n1) * Number(n2);
    }
    if (operator==='/'){
    result = Number(n1) / Number(n2);
    }
    return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.
  


  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      
      if (firstOperend.textContent !== '0'){
        secondOperend.textContent=buttonContent;        
      }else{
        firstOperend.textContent=buttonContent;
      }
      console.log(firstOperend)

    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent=buttonContent;
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent='0';
      secondOperend.textContent='0';
      operator.textContent='+';
      calculatedResult.textContent='0'
      
    }
    if(action === 'dot'){
      console.log('. 버튼');
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      calculatedResult.textContent =  calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum;
let operatorForAdvanced='';
let previousKey='';
let previousNum='';
let currentNum = 0;
let count=0;
let dotted = 0; //dot이 찍히면 True

buttons.addEventListener('click', function (event) {
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있음.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옴.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴.

  if (target.matches('button')) {
    if (action === 'number') { 
      if(dotted===0){
      if (display.textContent === '0' && operatorForAdvanced === '') {
        display.textContent = buttonContent;
        firstNum = display.textContent //첫번째 숫자
      }else if (display.textContent !== '0' && operatorForAdvanced === ''){
        display.textContent = display.textContent + buttonContent; //첫번째 수의 첫번째가 아닌 숫자
        firstNum = display.textContent ;
      }else if (display.textContent !== '0' && operatorForAdvanced !== '') { //두번째 수의 시작 시작됨
        if(previousKey === 'operator') {
          display.textContent = buttonContent;
          previousKey = display.textContent; 
          previousNum = display.textContent; //두번째 수의 첫번째 숫자
        }else if(previousKey !== 'operator') {
          display.textContent = display.textContent + buttonContent;
          previousNum = display.textContent;
        } 
      }}else{ //이미 dot이 찍혔다.
        // if (display.textContent === '0' && operatorForAdvanced === '') {
        //   display.textContent = buttonContent;
        //   firstNum = display.textContent //첫번째 숫자
        // }else if (display.textContent !== '0' && operatorForAdvanced === ''){
        //   display.textContent = display.textContent + buttonContent; //첫번째 수의 첫번째가 아닌 숫자
        //   firstNum = display.textContent ;
        // }else if (display.textContent !== '0' && operatorForAdvanced !== '') { //두번째 수의 시작 시작됨
        //   if(previousKey === 'operator') {
        //     display.textContent = buttonContent;
        //     previousKey = display.textContent; 
        //     previousNum = display.textContent; //두번째 수의 첫번째 숫자
        //   }else if(previousKey !== 'operator') {
        //     display.textContent = display.textContent + buttonContent;
        //     previousNum = display.textContent;
        //   } 
        // }
          count=count+1;
          if(operatorForAdvanced===''){
            
            firstNum= firstNum+ buttonContent;
            display.textContent = display.textContent+buttonContent;
            
          }else if(operatorForAdvanced!==''){
            
            previousNum = previousNum+buttonContent;
            display.textContent = display.textContent+buttonContent;
            console.log(firstNum);
          }
      }
      previousKey='number';    
    }

    if (action === 'operator') {
      
      operatorForAdvanced = buttonContent; // 오퍼레이터 누를 때 누른 텍스트 정보 할당
      display.textContent= operator.textContent;
      previousKey = 'operator';
      count=0;
      dotted=0;} //operator가 나오면 소수점은 초기화
    
    if (action === 'dot'){
      
      dotted=1;
      display.textContent=display.textContent+buttonContent;
      if(operatorForAdvanced===''){
        firstNum = firstNum + buttonContent;;

      }
      if(operatorForAdvanced!==''){
        previousNum=previousNum+buttonContent;
      }
    }

    if (action === 'clear') { // AC(초기화) 버튼을 누를 때 분기
      display.textContent = '0';
      firstNum = '';
      previousNum = '';
      operatorForAdvanced = '';
      previousKey = '';
      count=0;
      dotted=0;
    }

    if (action === 'calculate') {
      
      display.textContent=calculate(firstNum,operatorForAdvanced,previousNum);
      count=0;
     }
   }
});