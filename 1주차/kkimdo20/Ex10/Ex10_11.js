var circle = {
    radius: 5, // 프로퍼티

    // 원의 지름
    getDiameter: function () {
        return 2 * this.radius; // this는 circle을 가리킨다.
    }
};

console.log(circle.getDiameter()); //10

// 메서드 내부에서 사용한 this 키워드는 객체 자신(circle 객체)을 가리키는 참조변수다.