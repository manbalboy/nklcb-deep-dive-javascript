var person = {
    name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Lee

Ex10_13
var person = {
    name: 'Lee'
};

console.log(person[name]); // ReferenceError: name is not defined

// Ex10_14
var person = {
    name: 'Lee'
};

console.log(person.age); // undefined