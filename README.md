# side-project
시간이 오래걸렸던 오답 모음

1.calculatedResult.textContent = calculate(firstOperend.textContent)로 해줘야 했다. calculate의 parameter가 string이니 당연..


2.내 계산기는 실행이 되는데 왜 mocha에선 틀렸다고 나오지?
나는 맨처음에 버튼 색깔을 하면서 버튼 이름을 class=“color number”이런식으로 정해줬었다. 그래서 action을 정의해 줄 때 target.classList[1] 로 바꿔줬었다. 그런데 모카에서는 당연히 원래 값이었던 target.classList[0]에서 action의 값을 할당해 주고 있었기 때문에 애꿎은 color만 액션으로 찾고있었으니 틀릴 수 밖에 없었다.

3.왜 classList를 이용한 class명 remove가 안되는지? 여전히 해결 못함

4.소숫점 이하 계산할 때 3-3.33 이라고 하면 -0.33까지만 나오는게 아니라 -0.33000000 이런식으로 나오는거 해결 못함
