//동등 비교, 결과를 예측하기 어렵다.

'0' == ''; // false
0 == ''; // true
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == null; // false
false == undefined; // false

// 이처럼 동등 비교 연산자는 예측하기 어려운 결과를 만들어 낸다. 따라서 동등 비교 연산자는
// 사용하지 않는 편이 좋다. 대신 일치 비교(===)연산자를 사용한다.