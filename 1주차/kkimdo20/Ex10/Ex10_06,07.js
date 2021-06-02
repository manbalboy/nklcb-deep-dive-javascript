var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: "world"}

console.log(obj); //{hello: "world"}

// 빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하진 않지만 키로서의 의미를
// 갖지 못하므로 권장하지 않는다.

var foo = {
    '':'' // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // {"": ""}