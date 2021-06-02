// n만큼 어떤 일을 반복한다.
function repeat(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i ++){
        console.log(i);
    }
}
repeat(5);

// n만큼 어떤 일을 반복한다.
function repeat1(n){
    // i를 출력한다
    for (var i = 0; i < n; i ++){
        console.log(i)
    }
}
repeat1(5); // 0 1 2 3 4

// n만큼 어떤일을 반복한다.

function repeat2(n) {
    for (var i = 0; i < n; i++){
        // i가 홀수 일 때만 출력한다
        if (i % 2) console.log(i);
    }
}

repeat2(5); // 1 3

// 위 예제의 함수들은 반복하는 일은 변하지 않고 공통적으로 수행하지만 반복하면서 하는 일의 내용은 다르다.
// 즉, 함수의 일부분만이 다르기 때문에 매번 함수를 새롭게 정의해야 한다. 이 문제는 함수를 합성하는 것으로 해결할 수 있다.

// 외부에서 전달받은 f를 n 만큼 반복 호출 한다.
function repeat(n,f) {
    for (var i = 0; i < n; i++){
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
    if(i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); // 1 3

// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 하며, 매개변수를 통해
// 함수의 외부에서 콜백함수를 전달받은 함수를 고차함수라고 한다.
// 고차함수는 콜백함수를 자신의 일부분으로 합성한다.
// 고차함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
// 콜백함수는 고차함수에 의해 호출되며 이 때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.

// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다/
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.

repeat(5, function(i) {
    if(i%2) console.log(i);
}); // 1 3

// logOdds 함수는 단 한 번만 생성된다
var logOdds = function(i) {
    if(i%2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds); // 1 3

// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click',function(){
    console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력한다

setTimeout(function () {
    console.log('1초 경과');
},1000);

// 콜백 함수는 비동기 처리 뿐 아니라 배열 고차 함수에서도 사용된다.
// 배열은 사용빈도가 매우 높은 자료구조이고 배열을 다룰 때 배열 고차함수는 매우 중요하다.

var res = [1,2,3].map(function (item){
    return item * 2;
});

console.log(res); // [2,4,6]