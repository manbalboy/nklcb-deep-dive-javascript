var person = { 
    ' last-name ' : ' Lee ' , 
    1 : 10 
} ; 
// person.'last-name' ; // SyntaxError: Unexpected string 
person.last-name; // 브라우저 환경: NaN 
                   // Node.js 환경: ReferenceError: name is not defined 
person[last-name]; // ReferenceError: last is not defined 
person ['last-name'] ; // Lee 

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다. 

// person.1; // SyntaxError: Unexpected number 
// person.'1'; // SyntaxError: Unexpected string 
person[1]; // 10 : person[l] - person['1 '] 
person ['1'] ; // - 10

// 예제에서 last-name의 결과값이 환경에 따라 달라지는 이유는 브라우저 환경에서는
// name이라는 전역변수가 빈 문자열의 기본값으로 암묵적 존재하기 때문에 NaN이 된다.
