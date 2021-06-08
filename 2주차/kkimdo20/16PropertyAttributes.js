// ECMAScript 사양에 등장하는 이중 대괄호([[..]])로 감싼 이름들을 내부 슬롯, 내부 메서드라고 부른다.

// 자바스크립트 엔진은 프로퍼티를 생성할 떄 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// object.getOwnPropertyDescriptor 메서드를 사용해 간접적으로 확인할 수 있으며, 직접 접근은 불가하다.

// const person = {
//     name: 'Lee'
// };

// console.log(Object.getOwnPropertyDescriptor(person,'name'));

// // 이 때 Object.getOwnPropertyDescriptor메서드는 정보를 제공하는
// // 프로퍼티 디스크립터 객체를 반환한다. 만약 존재하지 않으면 undefined가 반환된다.

// const person = {
//     name: 'Lee'
// };

// // 프로퍼티 동적 생성
// person.age = 20;

// // 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환.
// console.log(Object.getOwnPropertyDescriptors(person));
/*
 name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
*/

// 데이터 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.

// - [[Value]] 프로퍼티 키를 통해 값에 접근하면 반환되는 값, 프로퍼티 키를 통해 값을 변경하면 재할당한다. 이때 프로퍼티가 없으면 동적 생성하고 값을 저장한다.
// - [[Writable]] 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
// - [[Enumerable]] 프로퍼티의 열거 기능 여부를 나타내며 불리언 값을 갖는다 값이 false인 경우 해당 프로퍼티는 열거할 수 없다.
// - [[Configurable]] 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다. 값이 false인 경우 해당 프로퍼티의 삭제 값 변경이 금지 된다. 단 writable이 true인 경우 value의 변경과 writable을 false로 변경하는 것은 허용.

// const person = {
//     name: 'Lee'
// };

// // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
// console.log(Object.getOwnPropertyDescriptor(person,'name')); //{ value: 'Lee', writable: true, enumerable: true, configurable: true }

// person.age = 20;

// console.log(Object.getOwnPropertyDescriptors(person)); 
/*
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
}
*/

// 접근자 프로퍼티는 getter/setter 함수를 모두 정의할 수 도 있고 하나만 정의할 수도 있다.
// 접근자 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.

// - [[Get]] : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수.
// - [[Set]] : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수
// - [[Enumerable]] 데이터 프로퍼티의 Enumerable과 같다
// - [[Configurable]] 데이터 프로퍼티의 Configurable과 같다.

// 프로토타입
// 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체다. 하위 객체에게 자신의 프로퍼티와 메서드를 상속한다.
// 프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메서드인 것 처럼 자유롭게 사용할 수 있다.
// 프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다.

// 구별법
// 일반 객체의 __proto__는 접근자 프로퍼티다.

// Object.getOwnPropertyDescriptor(Object.prototype,'__proto__');

// // 함수 객체의 prototype은 데이터 프로퍼티다.
// Object.getOwnPropertyDescriptor(function() {},'prototype');


const person = {};

// Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.
// 데이터 프로퍼티 정의
Object.defineProperty(person,'firstName',{
    value : 'Ungmo',
    writable : true,
    enumerable : true,
    configurable : true
});

Object.defineProperty(person,'lastName',{
    value: 'Lee'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// firtName{...}

// descriptor 객체의 프로퍼티를 누락시키면 undefined false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person,'lastName');
console.log('lastName', descriptor);
// lastName{...}

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); // ["firstname"]

// [[Writable]]의 값이 false 인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// LastName의 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// 이 때 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = 'kim'; // 무시됨.

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
// 이 때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName; // 무시됨.

// descriptor = object.getOwnPropertyDescriptor(person,'lastName');
// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의 할수 없다.

console.log('lastName',descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter 함수
    getComputedStyle(){
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable : true
});

descriptor = object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName',descriptor);

person.fullName = 'Heegun Lee';
console.log(person);

// object.defineProperty 메서드는 하나의 프로퍼티만 정의할 수 있다, Object.defineProperties를 사용하면
// 여러개의 프로퍼티를 한번에 정의할 수 있다.

// 객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다. 추가하거나 삭제할 수 있고, 갱신할수도 있으며,
// Object.defineProperty 또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.

// 객체의 변경을 방지하는 다양한 메서드.
// - Object.preventExtensions : 객체확장 금지(프로퍼티 추가 금지)
//   확장이 금지된 객체는 프로퍼티 추가가 금지 된다. 확장가능 여부확인은 Object.isExtensible 메서드로 확인할 수 있다.
// - Object.seal : 객체 밀봉(프로퍼티 값 읽기,쓰기 허용)
//   밀봉된 객체는 읽기와 쓰기만 가능하다. Object.isSealed 메서드로 여부확인 가능하다.
// - Object.freeze : 객체 동결(프로퍼티 값 읽기)
//   동결된 객체는 읽기만 가능하다. Object.isFrozen 메서드로 확인할 수 있다.

// 지금까지 살펴본 변경방지 메서드들은 직속 프로퍼티만 변경이 방지되고 중첩 객체 까지는 영향을 주지는 못한다

const person = {
    name: 'Lee',
    address: {city: 'seoul'}
};

Object.freeze(person); // true

console.log(Object.isFrozen(person)); // false

// 따라서 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 freeze 메서드를 호출해야 한다.


// 결론

// 프로퍼티는 문자열 하드웨어 등이 가지고 있는 고유의 정보이다.
// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
// 데이터 = 값, 접근자 = getter/setter로 이해했다.
// 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 사용하는 의사 프로퍼티와 의사 메서드. [[...]]로 감싼 이름들이다.
// 자바스크립트는 프로퍼티 상태를 나타내는 어트리뷰트를 기본값으로 자동 정의 한다.(값, 갱신가능여부,열거 가능 여부, 재정의 가능여부)
// Object.getOwnPropertyDescriptor 메서드를 사용해 간접적으로 확인할 수 있다.(직접 접근 x)
// Object.defineProperty 메서드를 사용해 어트리뷰트를 정의할 수 있다.
// 위 메서드로 어트리뷰트를 정의할 때 생략된 어트리뷰트는 기본값이 적용된다.
// 복수형(defineproperties)를 사용하면 여러개의 프로퍼티를 한 번에 정의할 수 있다.

// 객체 변경 방지를 할수 있는 메서드가 세종류가 있다.
// Object.preventExtensions - 확장금지 (프로퍼티의 추가 금지)
// Object.seal - 밀봉 (읽기,쓰기만 가능)
// Object.freeze - 동결(읽기만 가능)
// 변경 방지 메서드들은 얕은 변경 방지이기 때문에 직속 프로퍼티만 변경이 방지된다.
// 따라서 불변 객체를 구현하려면 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야한다.
