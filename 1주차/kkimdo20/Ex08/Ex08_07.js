// 월을 영어로 변환한다. ( 11-> 'November')
var month = 11;
var monthName;

switch(month){
    case 1 : monthName = 'January';
    case 2 : monthName = 'February';
    case 3 : monthName = 'March';
    case 4 : monthName = 'April';
    case 5 : monthName = 'May';
    case 6 : monthName = 'June';
    case 7 : monthName = 'July';
    case 8 : monthName = 'August';
    case 9 : monthName = 'September';
    case 10 : monthName = 'October';
    case 11 : monthName = 'November';
    case 12 : monthName = 'December';
    default : monthName = 'Invalid month';
}
console.log(monthName); // Invalid month

// 예제를 실행해 보면 'November'가 출력되지 않고 'Invalid month'가 출력된다.
// 이는 switch문의 표현식의 평가 결과와 일치하는 case문으로 실행 흐름이 이동하여 실행한 것은 맞지만, 실행한 후 탈출 하지 않고, switch 문이 끝날 때 까지 이후의
// 모든 case 문과 default 문을 실행 했기 때문이다. 이를 "폴스루"라고 한다.

// 따라서 올바른 switch 문은 Ex08_08과 같다.