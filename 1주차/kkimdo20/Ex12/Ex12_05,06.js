// 함수 선언문
function add (x,y){
    return x + y;
}

// 함수 참조
// console.dlr은 console.log와는 달리 함수 객체의 프로퍼티까지 출력한다.
// 단 노드 환경에서는 console.log와 같은 결과가 출력된다.

console.dir(add); // [Function: add]

// 함수 호출

console.log(add(2,5)); // 7

// 함수 선언문은 함수 이름을 생략할 수 없다
// function (x,y){
//  return x + y;
// } //SyntaxError: Function statements require a function name
