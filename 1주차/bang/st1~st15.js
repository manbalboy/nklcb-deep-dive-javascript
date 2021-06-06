console.log('hello js');

//4장 변수  st
var result = 10+20;  //식별자는 값이 아니라 메모리 주소
console.log(result);

console.log(score);
var score;
/////ed

//5장 표현식과 문 
function test(){
    return {}
}
/*기존 보통 ;세미콜론을 붙여야하지만 암묵적으로 수행됨=자동삽입 근데 앵간하면 ; 넣어주자*/
//ed

//6장 타입 st
var a = 10;     //정수
var b = 1.1;    //실수
var c = -20;    //음의정수
var binary = 0b01000001 ; // 2진수 
var octal = 00101 ;       //8진수     
var hex = 0x41 ;          //16진수 
console.log("6장"+(binary===octal));
console.log("6장"+(hex===octal));
console.log("6장"+(2===2.00)); //숫자타입은 모두 실수로 처리
console.log( 10 / 0 );  //무한 Infinity 반대 -Infinity 연산불가 NaN

//심벌
var set = Symbol("test");
console.log(typeof set);
var obj = {};
obj[set]="머냐";
console.log("6장"+obj[set]); //33장에서 자세히 알아본다함.

//ed

//7장 st
var int1 =  5;
console.log("후증가",int1++);
var int2 =  6;
console.log("선증가",++int2);
/*그치만 보통 쓸일은 후증가만 쓸듯*/
var stInt = "1"
console.log("타입변환",typeof +stInt);

console.log(-0===+0);
console.log(Object.is(-0,+0));

console.log(NaN===NaN);
console.log(Object.is(NaN,NaN));

console.log("지수연산자",2**2.5,2**0);
//ed
///8장ST
outer:for(var i = 0 ; i<3; i++){
    console.log("i:"+i);
    for(var k =0;k<3;k++){
        if(k==0){
            console.log("탈출");
            break outer;
        }
    }
}
/*
※중첩된 for 문 외부로 탈출할 때 유용하지만 권장하지 않음 가독성떨어진다해서
그럴거같음
*/
//ed

//9장st
var int1 = 10; 
var str  = int1.toString(); //명시적 타입변경 문자열로 타입캐스팅
var str2 = int1+"";//str으로변환 
console.log(typeof str2);
console.log(typeof +str2);

var set1 = 10+"2";//102   
var set2 = 10*"5";//50 하지만 ""이다 싶으면 형변환 시켜서 해주자 헷갈리니간

var str= "";
//var length = str?.length; 이거오타인듯 ->str.length = 0
str = 4|1;

console.log(str);

//10장 st
var empt = {}; var ky = "st";
console.log(typeof empt);
empt["st"] = "Bang";
console.log(empt[ky]);
//이렇게 해도 값은 나오지만 의미를 갖지못함으로 권장 x 뻘짓거리

//프로퍼티 접근
var Bang = {
    "abc" : "ABC"
};
console.log(Bang.abc); //console.log(Bang."abc");
Bang.name="방형진";
console.log("동적생성",Bang.name);
delete Bang.abc;  //삭제 있는지 몰랐음
console.log(Bang.abc);
//ed

//11st
var str ="hellow"
console.log(str[0]); //이거 첨암

var set1    = {x:{y:1}};
var copy1   = {...set1}
console.log(set1===copy1,set1.x,copy1.x);
console.log(set1.x===copy1.x);
/* 이거안댐 
var  _ = require('lodash');
var copy2  = _.cloneDeep(set1); 
console.log(set1===copy2,set1.x,copy1.x);
console.log(set1.x===copy2.x);
*/
var per1 ={name:"bang"}
var per2 ={name:"bang"}
//1번은 obj 객체 비교이고 2번은 객체안의 타입과 값을 비교 한것이기에
//false,true
console.log(per1===per2,per1.name===per2.name);
//ed

//12장
var fun = function(a,b){   //함수선언문
    return a+b;
}
function fun2(a,b){        //함수표현식
    return a*b;
}
//생성자 함수 화살표함수 << 안쓸거같음 
console.log(fun(20,30),fun2(20,30));
console.dir(fun);//<<첨봄

console.log(fun(20,30)+fun2(20,30));//함수호출

var res = (function(){
    var a =3;
    var b =5;
    return a*b;
}());

var test1 = 4;
var test2= 8;
var res2 = (function(a,b){
    return a+b;
}(test1,test2));

console.log(res,res2);
//ed

//14장 st
var xx;
function re(){
    var x = 1; //변수생성
    xx=12; //<<소멸안댐
    return x ;  //변수 소멸
}

//15st

var bbb = "aaa";
if(true){
    var bbb= "bbb";
}
console.log(bbb);


let abc = "333";
//let abc = "444"; SyntaxError: Identifier 'abc' has already been declared

if(true){
    console.log(abc); //지역 변수에 let선언시 에러 호이스팅문제
    //let abc = "222";
}

const bbc="3"; //const bbc; bbc="4"; 에러

 
