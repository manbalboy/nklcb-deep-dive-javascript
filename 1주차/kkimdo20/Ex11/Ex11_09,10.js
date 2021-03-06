var x = 10;

// 할당 연산자는 숫자 리터럴 10에 의해 생성된 숫자 값 10이 저장된 메모리 공간의 주소를 전달한다.
// 이로써 식별자 x는 메모리공간에 저장된 숫자 값 10을 식별할 수 있다.

var copy = score;

// 위 예제의 경우 score는 식별자 표현식으로서 숫자 값 80으로 평가 된다.
// 이 때 두가지 평가 방식이 가능하다.
// 1. 새로운 80을 생성해서 메모리주소를 전달하는 방식, 이 방식은 할당 시점에 두 변수가 기억하는 메모리 주소가 다르다.
// 2. score의 변수값 80의 메모리주소를 그대로 전달하는 방식, 이 방식은 할당 시점에 두 변수가 기억하는 메모리 주소가 같다.