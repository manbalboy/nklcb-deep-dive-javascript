// 표준 빌트인 객체인 Date는 날짜와 시간(연,월,일,시,분,초,밀리초)을 위한 메서드를
// 제공하는 빌트인 객체이면서 생성자 함수.
// Date도 다양한 메서등와 생성자 함수를 제공한다. 시계 예제를 해보자.


(function printNow() {
    const today = new Date();

    const dayNames = [
        '(일요일)',
        '(월요일)',
        '(화요일)',
        '(수요일)',
        '(목요일)',
        '(금요일)',
        '(토요일)',
    ];
    const day = dayNames[today.getDay()];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour >= 12 
                      ?'PM' 
                      : 'AM';

    // 12시간제로 변경

    hour %= 12;
    hour = hour || 12; // hour가 0이면 12를 재할당

    // 10 미만인 분과 초를 2자리로 변경
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

    console.log(now);


}());