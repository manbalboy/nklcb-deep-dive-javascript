const arr = ['apple','banana'];

console.log(arr[0]); // apple
console.log(arr[1]); // banana

// 배열이 가지고 있는값은 요소 라고 부른다.

// 배열의 길이를 나타내는 length 프로퍼티를 갖는다.

arr.length // -> 2

// for문을 통해 순차적으로 요소에 접근할 수 있고, type은 객체 타입

// 이 부분 신기했다. 배열의 요소가 연속적으로 이어져있지 않는 "희소 배열"이라고 한다.

// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체.

// 자바스크립트 배열은 해시테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우
// 일반적인 배열보다 성능적인 면에서 느릴수 밖에 없는 구조적인 단점이 있지만,
// 특정 요소 검색이나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.

// 희소 배열은 length와 배열 요소의 개수가 일치하지 않는다. 희소 배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다.
// 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 우선.

const arr2 = [1, , 2] ;

console.log(arr2.length);

// slice메서드와 splice메서드를 착각하지 않기
// slice는 원본배열을 변경하지 않고 요소를 복사하여 배열로 반환

const arr3 = [1,2,3];

arr3.includes(2); // true

arr3.includes(100); // false

// sort 메서드는 배열의 요소를 정렬한다.(기본 오름차순)

// forEach 변수의 사용을 억제해 조건문과 반복문을 제거.

// map 메서드는 콜백함수의 반환값들로 구성된 새로운 배열을 반환.

const numbers = [1,4,0];

const roots = numbers.map(item => Math.sqrt(item));

console.log(roots);

// map 메서드가 생성하여 반환하는 새로운 배열의 length 프로퍼티 값은
// map 메서드를 호출한 배열의 length 프로퍼티 값과 반드시 일치한다.
// Array.prototype.reduce는 하나의 결과값을 만들어 반환한다.

// Array는 다양한 메서드를 사용한다.
// 예제에다가 include와 forEach를 사용해 보았다. 앞으로 계속되는
// 과제에서, 다양한 방식을 적용해볼것.