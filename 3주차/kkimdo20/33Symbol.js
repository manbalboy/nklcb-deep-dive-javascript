// Symbol 함수는 ES6에서 도입된 7번째 데이터 타입.

// 다른 값과 절대 중복되지 않는 유일무이한 값이 심벌값이다.

const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

// 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); // Symbol()