var person = {
    name: 'Lee'
};

person.name = 'Kim'; // person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.

console.log(person); //{name: "kim"}

// Ex 10_17

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person);

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person. age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이 때 에러가 발생하지 않는다.
delete person. address;

console.log(person); // {name: "Kim"}