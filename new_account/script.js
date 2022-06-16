document.write("<script src='validator.js'></script>");

let elInputUsername = document.querySelector("#username");
console.log(elInputUsername);

let elFailureMessage = document.querySelector(".failure-message");
elFailureMessage.classList.remove("hide");

let elSuccessMessage = document.querySelector(".success-message");

let elInputPassword = document.querySelector("#password");
let elInputPasswordRetype = document.querySelector("#password-retype");

let elMismatchMessage = document.querySelector(".mismatch-message");

let isKorean = document.querySelector(".notKorean");
elInputUsername.onkeyup = function () {
  // if (!elInputUsername.value) {
  //   isKorean.style.display = "none";
  // }
  //only number and english(elinputusername.value)가 false이면 hide remove
  if (onlyNumberAndEnglish(elInputUsername.value)) {
    isKorean.classList.add("hide");
  } else {
    isKorean.classList.remove("hide");
  }
  //4글자 이상, 유효성 검사
  if (
    isMoreThan4Length(elInputUsername.value) &&
    onlyNumberAndEnglish(elInputUsername.value)
  ) {
    //성공메세지 보이기
    elSuccessMessage.classList.remove("hide");
    //실패메세지 숨기기
    elFailureMessage.classList.add("hide");
  } else {
    //성공메세지 숨기기
    elSuccessMessage.classList.add("hide");
    //실패메세지 보이기
    elFailureMessage.classList.remove("hide");
  }
};

elInputPasswordRetype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMismatchMessage.classList.add("hide");
  } else {
    elMismatchMessage.classList.remove("hide");
  }
};
function isMoreThan4Length(value) {
  return value.length >= 4;
}

function isMatch(password1, password2) {
  return password1 === password2;
}

let today = new Date(); //Date객체로 불러옴
let elInputBirth = document.querySelector("#birth");
elInputBirth.onchange = function beforeToday(e) {
  const birthday = e.target.value.split("-");

  if (new Date(birthday[0], birthday[1] - 1, birthday[2]) > today) {
    // 선택한 날짜가 오늘보다 더 크면
    alert("오늘보다 전 날짜를 클릭하세요");
    elInputBirth.value = ""; // alert확인창 눌렀을 때 클릭한 날짜가 뜨지 않게
  }
};

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  //클릭했을 때 1. password랑 password-retype이 같은지 확인
  // 같으면 2. 강력한 비밀번호인지 확인
  // 다르면 비밀번호 확인을 다시 하라는 alert
  if (
    !onlyNumberAndEnglish(elInputUsername.value) ||
    !isMoreThan4Length(elInputUsername.value)  
  ) {
    alert("아이디를 확인해주세요");
  } else if (!elInputBirth.value) {
    alert("생일을 입력해 주세요");
  } else if (!isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    // 안맞으면 비밀번호 확인, 맞으면 또 강력한 비밀번호 확인
    alert("비밀번호가 일치하지 않습니다");
  } else if (
    isMatch(elInputPassword.value, elInputPasswordRetype.value) &&
    !strongPassword(elInputPassword.value)
  ) {
    alert("강력한 비밀번호가 필요합니다");
  } else {
    alert("회원가입완료");
  }
  //모든 조건이 다 만족이 되었을 때 id도 통과하고 연도월일이 빈 배열이 아니고 비밀번호도 통과하면 password == retypepassword가 같을 때
});
