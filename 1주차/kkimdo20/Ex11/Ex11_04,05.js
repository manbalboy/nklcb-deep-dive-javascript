var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING

var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.

str[0] = 'S';

console.log(str); // string

// str[0] = 'S' 처럼 이미 생성된 문자열의 일부 문자를 변경해도 반영되지 않는다.
// 원시 값은 어떤 일이 있어도 불변한다. 이는 데이터의 신뢰성을 보장한다.