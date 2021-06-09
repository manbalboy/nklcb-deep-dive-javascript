//  1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number('0'); // 0
Number('-1'); // -1
Number('10.53'); // 10.53
// 불리언 타입 => 숫자 타입
Number(true); // 1
Number(false); // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법
// 문자열 타입 => 숫자 타입
parseInt('0'); // 0
parseInt('-1'); // -1
parseFloat('10.53') // 10.53
// 불리언 타입 => 숫자 타입
true * 1; // 1
false * 1; // 0
