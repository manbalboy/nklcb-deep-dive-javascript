var binary = 0b01000001; //2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary) //65
console.log(octal); //65
console.log(hex); //65
console.log(binary === octal); //true
console.log(octal === hex); //true

// 자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수로 처리한다.
// 이는 정수로 표시 된다 해도 사실은 실수라는 것을 의미한다. 
// 따라서 정수로 표시되는 수끼리 나누더라도 실수가 나올 수 있다.

