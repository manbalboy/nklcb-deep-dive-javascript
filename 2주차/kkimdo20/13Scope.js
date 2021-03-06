// // 13. 스코프
// // var 키워드로 선언한 변수와 let 또는 const 키워드로 선언한
// // 변수의 스코프도 다르게 동작한다.

// function add(x,y){
//     // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//     // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
//     console.log(x, y); // 2 5
//     return x + y ;
// }

// add(2,5);

// // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// // console.log(x,y); // ReferenceError: x is not defined

// // 모든 식별자(변수 이름, 함수 이름,클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는
// // 유효 범위가 결정된다. 이를 스코프라 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다.

// var x = 'global';

// function foo() {
//     var x = 'local';
//     console.log(x);
// }

// foo(); // global
// console.log(x); //local

// // 위 예제는 이름이 동일한 식별자이지만 스코프가 다른 별개의 변수. (스코프는 네임스페이스)
// // 두 개의 변수 중 어떤 변수를 참조해야 할 것인지를 결정하는 것을 "식별자 결정"이라고 한다.
// // 즉 스코프는 자바스크립트 엔진이 "식별자를 검색할 때 사용하는 규칙"이다.

// function foo(){
//     var x = 1; // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
//     var x = 2; 
//     console.log(x); // 2
// }

// foo();

// // 하지만 let이나 const 키워드로 선언된 변수는 중복 선언을 허용하지 않는다.

// function bar() {
//     let x = 1; 
//     let x = 2; // SyntaxError
// }

// bar;

// // 전역 변수는 어디서든 참조할 수 있다.

// // 지역은 함수 몸체 내부를 말한다. 지역 변수는 자신의 지역스코프와 하위 지역스코프에서만 유효하다.

// // 스코프는 함수의 중첩에 의해 계층적 구조를 갖는다

// // 모든 지역 스코프의 최상위 스코프는 전역 스코프이고, 계층적으로 연결된 것을 스코프체인이라 한다.

// // 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 참조하는

// // 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색 한다.

// // "함수는 식별자에 함수 객체가 할당된 것외에는 일반 변수와 다를 바 없다"

// // 따라서 스코프를 "변수를 검색할 때 사용하는 규칙"이라고 표현하기보다는 "식별자를 검색하는 규칙"이라고 하는 표현이 좀 더 적합하다.

// var x = 1;

// if (true){
//     // var 키워드로 선언된 변수는 함수의 코드블록(함수 몸체)만을 지역 스코프로 인정한다.
//     // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
//     // 따라서 x는 전역변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
//     // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
//     var x = 10;

// }

// console.log(x); // 10

// // var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역스코프로 인정한다.

// var i = 10;

// // for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.

// for (var i=0; i<5; i++){
//     console.log(i); //0 1 2 3 4
// }

// console.log(i); //5; 의도치않게 값이 변경 되었다.

var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo();
bar();

// 자바스크립트는 렉시컬 스코프를 따르기 때문에, 함수를 어디서 호출했는지가 아니라
// 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다. 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다.
// 즉 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.

// 이처럼 함수의 상위 스코프는 함수 정의가 실행될 때 정적으로 결정된다. 함수 정의(함수 선언문 또는 함수 표현식)가 실행되어 생성된 함수 객체는 이렇게 결정된 상위 스코프를 기억한다.
// 함수가 호출될 때마다 함수의 상위 스코프를 참조할 필요가 있기 때문이다.


// 결론
// - 스코프는 범위를 뜻한다. ({}로 구분 짓는)
// - 자바스크립트는 함수를 어디에서 정의했는지에 따라 상위 스코프를 결정한다.(렉시컬 스코프)
// - 함수정의가 실행되어 생성된 함수 객체는 결정된 상위 스코프를 기억한다. 