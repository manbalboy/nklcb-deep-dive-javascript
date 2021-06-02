function add(x, y){
    return x + y;
}

// 매개변수 x에는 2가 전달 되지만, 매개변수 y에는 전달할 인수가 없다.

console.log(add(2)); // NaN

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.

console.log(add(2,5,10)); // 7

// 사실 초과된 인수가 그냥 버려지는 것은 아니다. 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.