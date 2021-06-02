if('') console.log(x);

// if문이나 for 문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거짓으로 평가되어야하는 표현식이다.
// 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환 한다.

if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');

// "자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다."
// 즉, 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 truthy값은 true로 falsy 값은 false로 암묵적 타입 변환한다.
// false, undefined, null, 0, -0, NaN, ''(빈 문자열)이 false로 평가되는 falsy 값이다.

// 아래의 조건문은 모두 코드 블록을 실행한다.
if(!false)  console.log(false + ' is falsy value');
if(!undefined)  console.log(undefined + ' is falsy value');
if(!null)  console.log(null + ' is falsy value');
if(!0)  console.log(0 + ' is falsy value');
if(!NaN)  console.log(NaN + ' is falsy value');
if(!'')  console.log('' + ' is falsy value');

// Falsy 값 외의 모든 함수는 모두 true로 평가되는 Truthly 값이다.
// 다음 예제는 Truthy/Falsy 값을 판별하는 함수다.

// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v){
    return !v;
}
// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v){
    return !!v;
}

// 모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 모두 true를 반환한다.
isTruthy(true);
isTruthy('0'); //빈 문자열이 아닌 문자열은 Truthy