var x = 2;
var result;

if(x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); // 짝수

// 위 예제는 다음과 같이 삼항 조건 연산자로 바꿔 쓸 수 있다.

var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수

// 만약 경우의 수가 세 가지라면 다음과 같이 바꿔 쓸 수 있다.

var num = 2;

// 0은 false로 취급 된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); //양수