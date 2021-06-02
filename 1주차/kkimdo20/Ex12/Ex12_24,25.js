function add(a,b,c){
    a = a||0;
    b = b||0;
    c = c||0;
    return a + b + c;
}

console.log(add(1,2,3)); //6
console.log(add(1,2)); //3
console.log(add(1)); //1
console.log(add()); //0

// ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수체크및 초기화를 간소화할 수 있다.

function add2(a = 0, b = 0, c = 0){
    return a + b + c;
}

console.log(add(1,2,3)); //6
console.log(add(1,2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
