// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
})

foo(); // ReferenceERror : foo is not defined

// 즉시 실행 함수는 반드시 그룹 연산자로 감싸야한다.

console.log(typeof (function f(){})); // function 일반적인 방법
console.log(typeof (function (){})); //function

// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); //15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function (a,b){
    return a * b;
}(3, 5));

console.log(res); // 15