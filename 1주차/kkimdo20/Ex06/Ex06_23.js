var foo; 
console.log(typeof foo) ; // undefined 
foo = 3; 
console.log(typeof foo) ; // number 
foo = 'Hello'; 
console.log(typeof foo) ; // string 
foo = true; 
console.log(typeof foo) ; // boolean 
foo = null; 
console.log(typeof foo) ; // object 
foo = Symbol(); // 심벌 
console.log(typeof foo) ; // symbol
foo = {}; // 객체 
console.log( typeof foo) ; // object 
foo = [ ] ; // 배열 
console.log ( typeof foo) ; // object 
foo = function () {} ; // 함수 
console.log ( typeof foo); // function 

//typeof 연산자로 변수를 연산하면 변수의 데이터 타입을 반환한다.
//정확히 말하면 변수의 데이터 타입을 반환하는 것이 아닌 변수에 할당된 값의 데이터 타입을 반환한 것.