function foo() {
    return
        {}
    // ASI의 동작 결과 => return; {};
    // 개발자의 예측 => return {};
}

console.log(foo()); //undfeined

var bar = function () {}
(function() {})();

// ASI의 동작 결과 => var bar = function() {}(function() {})();
// 개발자의 예측 => var bar = function () {};(function() {})();
// TypeError: is not a function