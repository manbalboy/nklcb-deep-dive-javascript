var elem = null;

//elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

var value = elem?.value;
console.log(value); //undefined

// 옵셔널 체이닝 연산자 ?.는 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고
// 프로퍼티를 참조할 때 유용하다. 옵셔널 체이닝 연산자 ?.가 도입되기 이전에는 논리 연산자 &&를 사용한 단축 평가를 통해
// 변수가 null 또는 undefined인지 확인했다.

var elem = null;

// elem이 Falsy 값이면 elem으로 평가되고, elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
console.log(value); // null

// 논리 연산자 &&는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이면
// 좌항 피연산자를 그대로 반환한다. 좌항 피연산자가 Falsy 값인 0이나 ''인 경우도 마찬가지다. 하지만 0이나 ''은 객체로 평가될 때도 있다.

var str = '';

// 문자열의 길이(length)를 참조한다.
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못한다.
console.log(length); // ''

// 하지만 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 Falsy값이라도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.

var str = '';

// 문자열의 길이(length)를 참조한다. 이 때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str.length;
console.log(length); // 0

