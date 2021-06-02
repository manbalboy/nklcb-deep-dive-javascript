const o = { x: {y: 1} };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행

const _ = require('lodash');
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); //false
console.log(c2.x === o.x) //false

// 얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체다. 즉 원본과 복사본은 참조 값이 다른 별개의 객체다 하지만
// 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고 깊츤 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼 완전한 복사본을 만든다는 차이가 있따.
