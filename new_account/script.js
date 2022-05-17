document.write("<script src='validator.js'></script>");


function isMoreThan4Length(value) {

  return value.length>=4
}

function isMatch (password1, password2) {
  
  
  return password1 === password2
}


//password쪽 검사 일치하지않으면 일치하지않는다
//변수로 #password,#passwordretype,.mismatch-message
//isMatch(p1,p2)=>boolean  onkeyup 으로 비교하면되고
//if(ismatch==true) = isMatch hide add if(ismatch==false)->hide remove
//
let elInputPassword = document.querySelector('#password')
let elInputPasswordRetype = document.querySelector('#password-retype')
let elMismatchMessage = document.querySelector('.mismatch-message')
let elInputUsername = document.querySelector('#username')


let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let isKorean = document.querySelector('.notkorean')
elFailureMessage.classList.remove('hide') //이게 실행되면 hide가 지워지면서 보이게됨

//onkeyup 키보드가 눌렸다 떼어졌을때
//이벤트핸들러
elInputPasswordRetype.onkeyup = function(){
  if(isMatch(elInputPassword.value,elInputPasswordRetype.value)){
    elMismatchMessage.classList.add('hide')
  }else{
    elMismatchMessage.classList.remove('hide')
  }
}
elInputUsername.onkeyup = function(){
    //onlynumberandenglish === false {}
    if(onlyNumberAndEnglish(elInputUsername.value)===true){
      isKorean.classList.add('hide')
    }else{
      isKorean.classList.remove('hide')
    }
    console.log(elInputUsername.value)
    if(isMoreThan4Length(elInputUsername.value)){
        elSuccessMessage.classList.remove('hide')
        elFailureMessage.classList.add('hide')
    }else{
        elSuccessMessage.classList.add('hide')
        elFailureMessage.classList.remove('hide')
    }
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
  // onlyNumberAndEnglish(elInput.value) if 이게 폴스면 alert(id를 확인하세요)
  // strongPassword(elinputpass.value) if 이게 폴스면 alert('강력한비밀번호필요')
  // 
  // elInputUsername, elInputPassword.value
  // 내가 하고싶은 것 => 
  if(onlyNumberAndEnglish(elInputUsername.value)===false){
    alert('ID를 확인하세요')
  }
  if(strongPassword(elInputPassword.value)===false){
    alert('강력한 비밀번호가 필요합니다')
  }
})

function handler(e){
  alert(e.target.value)
  console.log(e.target.value.split('-')[0])
}
//year >=2023 {} // month // 
let birthday = document.querySelector('#birth').value

let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()+1
let date = today.getDate()

