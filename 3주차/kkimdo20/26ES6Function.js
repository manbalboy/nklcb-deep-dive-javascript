// ES6 이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론
// 생성자 함수로서 호출할 수 있다.
// 즉 callable 이면서 constuctor

// 콜백 함수를 사용하는 고차함수 map. 콜백 함수도 constructor이며 프로토타입을 생성.

[1,2,3].map(function (item){
    return item * 2;
}); // -> 2,4,6
// 이러한 문제를 해결하기 위해 ES6에서는 함수를 사용 목적에 따라 세가지 종류로 명확히 구분했다.

// 1. 일반함수 => constructor , prototype
// 2. 메서드 => super, arguments
// 3. 화살표함수 => non-constructor(아무것도 없다.)

// ES6 사양에서 메서드는 축약표현으로 정의된 함수만을 의미한다.

const obj = {
    x : 1,

    foo(){return this.x; },

};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

// ES6 사양에서 정의한 메서드(이하 ES6 메서드)는 인스턴스를 생성할 수 없는 non-constructor.

// ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다.

const base = {
    name : 'Lee',
    sayHi(){
        return `Hi ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    // sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
    // sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
    // super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
    sayHi(){
        return `${super.sayHi()}. how are you doing?`;
    }
}
console.log(derived.sayHi()); // Hi! Lee. how are you doing?

// ES6 메서드를 사용하지 않으면, super를 사용할수 없다.

const multiply = (x,y) => x * y;
console.log(multiply(2,3)); // 6

// 화살표 함수는 표현식! 즉시 실행함수 사용 가능.

// 화살표함수는 인스턴스를 생성할 수 없다.

// 따라서 prototype 프로퍼티도 없고 프로토타입도 생성하지 않는다.

// 중복된 매개변수 이름을 선언하면 에러가 발생.

// const arrow = (a,a) => a+a; //syntax error

// 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.

// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다. 따라서 함수 내부에서 this를
// 참조하면 상위 스코프의 this를 그대로 참조한다. 이를 lexical this라 한다.

// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

function foo(... rest){
    console.log(rest);
}

foo(1,2,3,4);

// Rest 파라미터는 반드시 마지막 파라미터여야 하고, 단 하나만 선언할 수 있다.

