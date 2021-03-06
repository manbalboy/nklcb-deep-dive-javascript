# 연산자

연산자(Operator)는 하나 이상의 표현식을 대상으로 산술,할당,비교,논리,타입,지수 연산 등을 수행해 하나의 값을 만든다.
이때 연산의 대상을 피연산자라 한다. 피연산자는 값으로 평가될 수 있는 표현식이어야 한다. 그리고 피연산자와 연산자의 조합으로 이뤄진 연산자 표현식도 값으로 평가될 수 있는 표현식이다.

## 산술 연산자

산술 연산자는 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다. 불가능 할 경우 NaN을 반환.
피연산자의 개수에 따라 이항 산술 연산자와 단항 산술 연산자로 구분할 수 있다.

### 이항 산술 연산자

이항 산술 연산자는 2개의 피연산자를 산술 연산하여 숫자 값을 만든다.
모든 이항 산술 연산자는 피연산자의 값을 변경하는 부수 효과가 없다. 다시 말해, 어떤 산술 연산을 해도 피연산자의 값이 바뀌는 경우는 없고 언제나 새로운 값을 만들 뿐이다.

- '+' : 덧셈
- '-' : 뺄셈
- '*' : 곱셈
- '/' : 나눗셈
- '%' : 나머지

모든 이항 산술 연산자는 부수효과가 없다.

### 단항 산술 연산자

단항 산술 연산자는 1개의 피연산자를 산술 연산하여 숫자값을 만든다.

- '++' : 증가 (부수효과 있음)
- '--' : 감소 (부수효과 있음)
- '+' : 어떠한 효과도 없다. 음수를 양수로 반전하지도 않는다.
- '-' : 양수를 음수로, 음수를 양수로 반전한 값을 반환한다.

주의할 점은 이항 산술 연산자와는 달리
- "증가/감소 연산자는 피연산자의 값을 변경하는 부수 효과가 있다."
피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
(Ex07_03~07 참고)

### 문자열 연결 연산자

- "+ 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다." 
그 외의 경우는 산술 연산자로 동작한다.
(Ex07_08 참고)

## 할당 연산자

할당 연산자는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다. 할당 연산자는 좌항의 변수에 값을 할당하므로 변수 값이 변하는 부수 효과가 있다.(Ex07_09 참고)

할당문은 변수에 값을 할당하는 부수 효과만 있을 뿐 값으로 평가되지 않을 것처럼 보인다. 하지만
- "할당문은 값으로 평가되는 표현식인 문으로서 할당된 값으로 평가된다."
Ex07_10의 할당문은 x에 할당된 숫자 값 10으로 평가된다.

이러한 특징을 활용해 여러 변수에 동일한 값을 연쇄 할당 할 수 있다. (Ex07_10 참고)

## 비교 연산자

비교 연산자는 좌항과 우항의 피연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다. 비교 연산자는 if문이나 for문과 같은 제어문의 조건식에서 주로 사용한다.

### 동등/일치 비교 연산자

동등 비교 연산자와 일치 비교 연산자는 좌항과 우항의 피연산작 같은 값으로 평가되는 지 비교해 불리언 값을 반환한다. 하지만 동등 비교 연산자는 느슨한 비교를 하는 반면 일치 비교 연산자는 엄격하게 비교를 한다.

- x == y : 동등비교(x와 y의 값이 같음)
- x === y : 일치비교(x와 y의 타입과 값이 같음)
- x != y : 부동등비교(x와 y의 값이 다름)
- x !== y : 불일치비교(x와 yd의 값과 타입이 다름)


- "동등 비교(==)연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치 시킨 후 같은 값인지 비교 한다."(Ex07_12 참고)

동등 비교 연산자는 편리한 경우도 있지만 결과를 예측하기 어렵고 실수하기 쉽다.(Ex07_13 참고)

- "일치 비교(===)연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true를 반환한다."

따라서 암묵적 타입 변환을 하지 않기 때문에 예측하기 쉽다. (Ex07_14 참고)

일치 비교 연산자에서 주의할 것은 NaN이다.(Ex07_15 참고)

NaN은 자신과 일치하지 않은 유일한 값이다 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다.(Ex07_16 참고)

숫자 0도 주의하자. 자바스크립트는 양의 0과 음의 0이 있는데 이들을 비교하면 true를 반환한다.(Ex07_17 참고)

### object.is 메서드

동등 비교 연산자와 일치 비교 연산자는 +0 -0을 동일하다고 평가한다. 또한 동일한 값인 NaN을 비교하면 다른 값이라고 평가한다.
ES6에서 도입된 Object.js 메서드는 다음과 같이 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 일치 비교 연산자와 동일하게 동작한다. (Ex07_18 참고)

부동등 비교 연산자(!=)와 불일치 비교 연산자(!==)는 각각 동등 비교(==) 연산자와 일치 비교(===) 연산자의 반대 개념이다. (Ex07_19 참고)

### 대소 관계 비교 연산자

대소 관계 비교 연산자는 피연산자의 크기를 비교하여 불리언 값을 반환한다. (Ex07_20 참고)


## 삼항 조건 연산자

삼항 조건 연산자는 조건식의 평가 결과에 따라 반환할 값을 결정한다.

삼항 조건 연산자는 첫 번째 피연산작 true로 평가되면 두 번째 피연산자를 반환하고, 첫 번째 피연산자가 false로 평가되면 세 번째 피연산자를 반환한다. 즉 삼항 조건 연산자는 두 번째 피연산자 또는 세 번째 피 연산자로 평가되는 표현식이다.

만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 암묵적 타입 변환된다. 이때 조건식이 참이면 :(콜론)앞의 두 번째 피연산자가 평가되어 반환되고 거짓이면 :(콜론)뒤의 세번째 피연산자가 평가되어 반환된다.(Ex07_21 참고)

삼항 조건 연산자의 첫 번째 피연산자는 조건식이므로 삼항 조건 연산자 표현식은 조건문이다. 따라서 다음 장에서 살펴볼 if ...else 문을 사용해도 삼항 조건 연산자 표현식과 유사하게 처리할 수 있다.(Ex07_22 참고)

하지만 삼항 조건 연산자 표현식은 if ...else 문과 중요한 차이가 있다. 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if ... else 문은 값처럼 사용할 수 없다.

if... else 문은 표현식이 아닌 문이다. 따라서 if...else문은 값처럼 사용할 수 없다.(Ex07_23 참고)

- "삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문이다." 
따라서 삼항 연산자는 값처럼 다른 표현식의 일부가 될 수 있어 매우 유용하다.
조건에 따라 어떤 값을 결정해야 한다면 if ...else문보다 삼항조건 연산자 표현식을 사용하는 편이 유리하다. 하지만 여러 개라면 if else 문의 가독성이 더 좋다.

## 논리 연산자

논리 연산자는 우항과 좌항의 피연산자(부정 논리 연산자의 경우 우항의 피연산자)를 논리 연산한다.(Ex07_25 참고)

논리 부정(!) 연산자는 언제나 불리언 값을 반환한다. 단, 피연산자가 반드시 불리언 값일 필요는 없다. 만약 피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환된다. (Ex07_26 참고)

논리합 또는 논리곱 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다. 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다. (Ex07_27 참고)

###  드 모르간의 법칙

논리 연산자로 구성된 복잡한 표현식은 가독성이 좋지 않아 한눈에 이해하기 어려울 때가 있다. 이러한 경우 드 모르간의 법칙을 활용하면 복잡한 표현식을 좀 더 가독성 좋은 표현식으로 변환할 수 있다.(Ex07_28 참고)


## 쉼표 연산자

쉼표(,) 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피 연산자의 평가가 끝나면 마지막 피 연산자의 평가 결과를 반환한다. (Ex07_29 참고)

## 그룹 연산자

소괄호('()')로 피연산자를 감싸는 그룹 연산자는 자신의 피연산자인 표현식을 가장 먼저 평가한다. 따라서 그룹 연산자를 사용하면 연산자의 우선순위를 조절할 수 있다.
그룹 연산자는 연산자 우선순위가 가장 높다.(Ex07_30 참고)

## typeof 연산자

typeof 연산자는 피연산자의 데이터 타입을 문자열로 반환한다. typeof 연산자는 7가지 문자열 "string","number","boolean","undefined","symbol","object","function" 중 하나를 반환한다. 
"null"을 반환하는 경우는 없고, 함수의 경우 "function"을 반환한다. 이처럼 해당 연산자가 반환하는 문자열은 7개의 데이터 타입과 정확히 일치하진 않는다.(Ex07_31 참고)

typeof 연산자로 null 값을 연산해보면 null이 아닌 object를 반환하는데 주의하자. 자바스크립트 첫번째 버전의 버그다. 하지만 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정되지 못하고 있다.

따라서 값이 null타입인지 확인할 때는 일치 연산자 (===)를 사용하자. (Ex07_32 참고)

또하나 주의해야 할 것은 선언하지 않은 식별자를 typeof 연산자로 연산해보면 ReferenceError가 발생하지 않고 undefined를 반환한다.(Ex07_33 참고)

## 지수 연산자

ES7에서 도입된 지수 연산자는 좌항의 피연산자를 밑으로 우항의 피연산자를 지수로 거듭 제곱하여 숫자 값을 반환한다.(Ex07_34 참고)

지수 연산자가 도입되기 이전에는 Math.pow 메서드를 사용했다. (Ex07_35 참고)

Ex07_36을 보면 어떤 경우가 가독성이 나은지 확인할수 있다.

음수를 거듭제곱의 밑으로 사용해 계산하려면 다음과 같이 괄호로 묶어야한다. (Ex07_37 참고)

지수 연산자는 다른 산술자와 마찬가지로 할당 연산자와 함께 사용할 수 있다. (Ex07_38 참고)

지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다.(Ex07_39 참고)

## 연산자의 부수 효과

대부분의 연산자는 다른 코드에 영향을 주지 않는다. 하지만 일부 연산자는 다른 코드에 영향을 주는 부수 효과가 있다.
부수효과가 있는 연산자는 할당 연산자(=), 증감 연산자(++/--), delete연산자다. (Ex07_40 참고)

## 연산자 우선순위

연산자 우선순위란 여러개의 연산자로 이뤄진 문이 실행될 때 연산자가 실행되는 순서를 말한다.

- 1. ()
- 2. new(매개변수 존재) .,[](프로퍼티 접근),()(함수 호출),?.(옵셔널 체이닝 연산자)
- 3. new(매개변수 미존재)
- 4. x++, x--
- 5. !x, +x, -x, ++x, --x, typeof, delete
- 6. **(이항 연산자 중에서 우선순위가 가장 높다)
- 7. *,/,%
- 8. +, -
- 9. <, <=, >, >=, in, instanceof
- 10. ==, !=, ===, !==
- 11. ??(null 병합 연산자)
- 12. &&
- 13. ||
- 14. ? ... : ...
- 15. 할당 연산자(=,+=,-=,...)
- 16. ,

연산자는 종류가 많아서 연산자 우선순위를 모두 기억하기 어렵고 실수하기도 쉽다. 따라서 기억에 의존하기 보다는 연산자 우선순위가 가장 높은 그룹 연산자를 사용하여 우선순위를 명시적으로 조절하는 것을 권장(Ex07_41 참고)

## 연산자 결합 순서

연산자 결합 순서란 연산자의 어느 쪽(좌항 또는 우항) 부터 평가 수행할 것인지를 나타내는 순서를 말한다. 

- 좌항 -> 우항 : +, -, /, %, <, <=, >, >=, &&, ||, ., [], (), ??, ?., in, instanceof
- 우항 -> 좌항 : ++, --, 할당 연산자, !x, +x, -x, ++x, --x, typeof, delete, ? ...:...