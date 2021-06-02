var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo); // { '0': 1, '1': 2, '2': 3 }

// var, function과 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않는다.
// 하지만 예상치 못한 에러가 발생할 여지가 있으므로 권장하지 않는다.
var foo = {
    var: '',
    function: ''
};

console.log(foo); // { var: '', function: '' }

// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다.
// 이 때 에러가 발생하지 않는다는 점에 주의하자.
var foo = {
    name: 'Lee',
    name: 'Kim'
};

console.log(foo); // { name: 'Kim' }