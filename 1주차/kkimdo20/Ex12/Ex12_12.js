// 함수 참조
console.dir(add); // f (add x,y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2,5)); // 7
console.log(sub(2,5)); // TypeError: sub is not a function

function add(x, y){
    return x + y;
}

var sub = function(x,y){
    return x - y;
};

