// new 연산자와 함께 Object 생성자 함수를 호출. -> 빈객체 생성 반환
// 이후에 프로퍼티 또는 메서드를 추가해 객체를 완성할 수 있다.


// const person = new Object(); // 빈 객체 생성

// person.name = 'Lee'; // 프로퍼티 추가
// person.sayHello = function(){
//     console.log('Hi! My name is ' + this.name);
// }
// console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }
// person.sayHello(); // Hi! My name is Lee

// // 생성자 함수란 new 연산자와 함께 호출해 객체를 생성하는 함수.
// // 생성자 함수에 의해 생성된 객체를 인스턴스라한다.

// // 자바스크립트는 String,Number,Boolean,Function,Array,Date,RegExp,Promise 등의
// // 빌트인 생성자 함수를 제공한다.

// // Object 생성자 함수를 사용해 객체를 생성하는 방식은 특별한 이유가 없다면
// // 그다지 유용해 보이지 않기 때문에 리터럴을 사용하는 것이 더 간편하다.

// // 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
// // 따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야하기 때문에 비효율적이다.

// // 하지만 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있기 때문에
// // 생성자 함수에 의한 객체 생성 방식에도 작ㅇ점이 있다.

// // this바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
// // 일반 함수 호출 -> this바인딩(this가 가리키는 값)은 전역 객체.
// // 메서드로서 호출 -> this바인딩은 메서드를 호출한 객체(마침표 앞 객체)
// // 생성자 함수 호출 -> 생성자 함수가 생성할 인스턴스
// function foo(){
//     console.log(this); // 일반적인 함수로서의 호출
// }
// foo(); // global

// const obj = { foo };

// obj.foo(); // obj

// // 생성자 함수로서 호출
// const inst = new foo();

// // 자바와 같은 클래스 기반 객체지향 언어의 생성자와는 다르게 형식이 정해져있는것이 아니다.
// // new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.

// // 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿으로서 동작하여
// // 인스턴스를 생성하는것과 생성된 인스턴스를 초기화(프로퍼티 추가 및 초기값할당)하는 것이다.

// // 생성자 함수
// function Circle(radius){
//     // 인스턴스 초기화
//     this.radius = radius ;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// } // 인스턴스 생성

// const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성

// 바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어, 변수 선언은 변수 이름과
// 확보된 메모리 공간의 주소를 바인딩 하는것이다.

// 함수는 객체이지만 일반 객체와는 다르다.
// 일반 객체는 호출할 수 없지만, 함수는 호출할 수 있다.

// 일반 함수 정의 : 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.

const baz = {
    x: function () {}
};

// 일반 함수로 정의된 함수만이 constructor다.
new foo(); // foo {}
new bar(); // bar {}

new baz.x(); // x{}

// 화살표 함수 정의
const arrow = () => {};

new arrow(); TypeError

// 메서드 정의 : ES6의 메서드 축약 표현만 메서드로 인정한다.

const obj = {
    x() {}
};

new obj.x();

function foo() {}

foo(); // 일반 함수로서 호출 [[Call]]이 호출된다. 모든 함수 객체는 콜이 구현되어 있따.

new foo(); // 생성자 함수로서 호출 [[Construct]]가 호출된다. 이따 컨스트럭트를 갖지않는다면 에러가 발생한다.

// new.target을 사용하면 new 연산자와 함께 생성자 함수로 호출되었는지 확인 할 수 있다.
// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
// new 연산자없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.

function Circle(radius){ // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
    if(!new.target){
        //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());

// new.target은 ES6에서 도입된 최신 문법, IE에서 지원하지 않는다. 이때 스코프 세이프 생성자 패턴을 사용할 수 있다.

function Circle(radius){
    if(!(this instanceof Circle)){
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

const circle = Circle(5);
console.log(circle.getDiameter());

// 이 예제를 치면서 스코프 세이프 생성자 패턴이라는 건 알았는데 const 쓴건 디테일이 살짝 부족한 거 같다.

// 결론
// Object 생성자 함수는 new 연산자를 사용해 빈 객체를 생성해서 메서드를 추가하여, 객체를 완성할 수 있다.
// 객체 리터럴에 의한 객체 생성방식은 직관적이고 간편하지만, 단 하나의 객체만 생성하기 때문에, 비효율적인 상황이 발생.
// 생성자 함수에 의한 객체 생성방식은 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있다.
// this바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
// new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
// 인스턴스를 생성하는것과 생성된 인스턴스를 초기화하는 것이 생성자 함수몸체에서 수행해야 하는 것이다.
// 바인딩이란 식별자와 값을 연결하는 과정을 의미한다.
// 함수는 객체이지만 호출할 수 있다.
// new 연산자와 함께 생성자 함수로 호출되면 new.target은 함수 자신을 가리킨다.
// new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다
// new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용할 수 있다.
