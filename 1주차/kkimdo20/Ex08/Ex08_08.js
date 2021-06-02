var month = 11;
var monthName;

switch(month){
    case 1 : monthName = 'January';
        break;
    case 2 : monthName = 'February';
        break;
    case 3 : monthName = 'March';
        break;
    case 4 : monthName = 'April';
        break;
    case 5 : monthName = 'May';
        break;
    case 6 : monthName = 'June';
        break;
    case 7 : monthName = 'July';
        break;
    case 8 : monthName = 'August';
        break;
    case 9 : monthName = 'September';
        break;
    case 10 : monthName = 'October';
        break;
    case 11 : monthName = 'November';
        break;
    case 12 : monthName = 'December';
        break;
    default : monthName = 'Invalid month';
}
console.log(monthName); // November

// default 문에는 break 문을 생략하는 것이 일반적이다. default 문은 switch 문의 맨 마지막에 위치하므로
// default 문의 실행이 종료되면 switch 문을 빠져나간다. 따라서 별도로 break 문이 필요없다.

