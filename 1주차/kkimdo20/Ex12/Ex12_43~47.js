function countdown(n) {
    for (var i = n; i>=0;i--) console.log(i);
}

countdown(10);

// 위 countdown 함수는 문제없이 잘 동작하지만 반복문 없이 구현할 수 있는 방법이 있다.

function countdown(n){
    if(n<0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}

countdown(10);

// 이처럼 자기 자신을 호출하는 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다. 

// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2* ... * (n-1) * n
function factorial(n){
    // 탈출조건 : n이 1이하 일때 재귀 호출을 멈춘다.
    if(n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2
console.log(factorial(3)); // 3! = 6 
console.log(factorial(4)); // 4! = 24 

// 함수 표현식
var factorial = function foo(n){
    // 탈출 조건 : n이 1 이하일 때 재귀 호출을 멈춘다. 
    if(n<=1) return 1;
    // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
    return n * factorial (n - 1);
    
    // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    // console.log(factorial === foo); // true
    // return n * foo(n - 1);
};

console.log(factorial(5)); // 120

function factorial(n){
    if(n<=1) return 1;

    var res = n;
    while(--n) res *= n;
    return res;
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2
console.log(factorial(3)); // 3! = 6 
console.log(factorial(4)); // 4! = 24 