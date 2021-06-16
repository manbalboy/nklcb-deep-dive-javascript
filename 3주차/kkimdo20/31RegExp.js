// 정규표현식 regular expression은 문자열을 대상으로 패턴 매칭 기능을 제공한다.
const target = 'Is this all there is?';

// 패턴 : is
// 플래그 : i =? 대소문자를 구별하지않고 검색

const regexp = /is/i;

regexp.test(target); // ->true

// RegExp 메서드도 다양하게 존재한다.

// 정규표현식은 패턴과 플래그로 구성된다. 
// 패턴은 /로열고 닫으며 문자열의 따옴표는 생략한다.
// 플래그는 총 6개 인데 중요한 3가지는
// i ignore case (대소문자를 구별하지않고 패턴검색)
// g Global (대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색)
// m Multi Line (문자열의 행이 바뀌더라도 패턴 검색을 계속한다.)

const target = 'Is this all there is?';

target.match(/is/);

target.match(/is/i)

target.match(/is/ig);

// 이런식으로 사용함

// 자주 사용하는 정규표현식은 책 31.6장에 정리가 되어있다. 시간있을때 계속 읽어보기.
