// ES5 문법

var arr = [1,2,3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

// ES6 문법(배열 디스트럭처링 할당)

const arr = [1,2,3];

const [one, two, three] = arr;

// 이 때 우변에 이터러블을 할당하지 않으면 에러가 발생.

// 이터러블은 배열을 일반화한 객체라고 앞에서 배웠었다. for..of반복문 적용 가능하다.

// ES5 문법

var user = { firstName: 'Ungmo' , lastName : 'Lee'};

var firstName = user.firstName;
var lastName = user.lastName;

console.log(firstName, lastName);

// ES6 문법

const user = {firstName : 'Ungmo' , lastName : 'Lee'};

const {lastName,firstName} = user;

console.log (firstName,lastName) ;

// 순서 상관없이 프로퍼티키를 기준으로 할당이 이루어짐.

// 이 때 우변에 객체 또는 평가될 수 있는 표현식을 할당하지 않으면 에러발생함.

// const {firstName = 'Ungmo', lastName} = { lastName: 'Lee' };
// undefined
// console.log(firstName, lastName);
// VM369:1 Ungmo Lee
// undefined
// const {firstName:fn='Ungmo', lastName:ln = 'Lee'};
// VM481:1 Uncaught SyntaxError: Missing initializer in destructuring declaration
// const {firstName:fn='Ungmo', lastName:ln} = {lastName : 'Lee'};
// undefined
// console.log(fn,ln);
// VM575:1 Ungmo Lee
// undefined