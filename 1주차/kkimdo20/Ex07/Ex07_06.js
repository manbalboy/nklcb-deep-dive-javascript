// 문자열을 숫자로 타입 변환한다.
var x = '1';

console.log(+x); // 1


// 불리언 값 변환
x= true;
console.log(+x); // 1
console.log(x); // true

// 문자열을 숫자로 타입 변환할수 없을 때는 NaN을 반환.

x = 'Hello';
console.log(+x); // NaN