*1장 - 프로그래밍*
        -  프로그래밍이란 0과 1밖에 알지 못하는 기계가 실행할 수있을 정도로 [정확하고 상세하게 요구사항을 설정하는 작업]
        - 프로그래밍 언어 = 기계어 
        - "Hello world"<<유명하다고함
        복사 함 
        7F 45 4C 46 01 01 01 00 00 00 00 00 00 00 00 00 02 00 03 00 01 00 00 00 35 40 B3 04 
        2C 00 00 00 00 00 00 00 00 00 00 00 34 00 20 00 01 00 00 00 00 00 00 00 00 40 B3 04 
        B2 0C EB lC 62 00 00 00 62 00 00 00 05 00 00 00 00 10 00 00 48 65 6C 6C 6F 20 77 6F 
        72 6C 64 0A B9 4C 40 B3 04 93 CD 80 EB FB 

        -   사람        -       컴파일러        -      컴퓨터 
                프로그래밍언어                기계어
        ※결론※
        요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합 변한후 흐름을 제어

*2장 - 자바스크립트란?*
        - 탄생비화 관심없음 
        경량 프로그래밍 언어를 도입 브렌덴 아이크가 개발했다고함 
        1996년 3월  내비게이터에 탑재되고 모카 명명
        1996년 9월  라이브스크립트 이름 바꾸고 
        1996년 12월  자바스크립트 최종명명

        -표준화
        익스플로러에 최적화가 안대고 대충 적당히 호환 점점 나아짐
        html css 자바스크립트 로드 파싱 랜더링 과정 38장에서 배운다함.

        -jQuery의 등장(2006년)
        j쿼리의 등장으로 까다로운 자바스크립트보다 배우고 쉽고 직관적인 제이쿼리 선호개발자가 양산되기도했다함.

        -Node.js (2009년 라이언 달  이라는 인물이 발표)
        브라우저의 자바스크립트엔진에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서도 동작할 수 있도록 자바스크립트 엔진을 브라우저에서 독십시킨 자바스크립트 실행환경 
        (그냥 다른 환경에서도 적용할수있또록 최적화 시켰다는거 같음)
        장점 비동기 i/o 단일스레드 이벤트 루프 기반으로 실시간 데이터 처리를 위한 spa 적합
        하지만 cpu 사용률이 높은 애플리케이션에닌 권장x

        -자바스크립트 특징
        웹 브라우저에서 동작하는 유일한 프로그래밍 언어 

*3장 - 자바스크립트 개발 환경과 실행 방법*
        -실행 환경
        모든 브라우저는 자바스크립트를 해석하고 실행할 수 잇는
        엔진을 내장하고 있다. 
        Nods.js도 엔진을 내장하고있음 
        
        다른점 브라우저는 html,css  실행헤 랜더링이 목적
        node.js 브라우저 외부에서 실행환경 제공 목적

        브라우저 node ECMAScript 실행할 수 있지만
        ECMAScript 이것 이외는 추가 제공 기능 호환x

        -브라우저에서 자바스크립트 실행
        개발자 도구 누르고 콘솔창에 쓰라는 내용 

        -디버그 
        라인 클릭 후 진행 f10 이 내용 같음 

        콘솔과 디버깅에 대한 참고 구글 검색 
        1.Tools for Web Developers: 콘솔 시용
        2.Tools for Web Developers: Chrome vToo 서 스크립트 디버깅 시작하기


*4장 - 변수*
        -변수란 무엇인가 ?
        10+20을 사용하기 위에서는 이것을 담는 변수가 필요함
        ※값의 위치를 가리키는 상징적인 이름※

        -변수 선언
        var , let ,const(요건 사용안해봄)

        undefined 원시 타입의 값  6장에서 내용
        console.log(score);
        var score;
        undefined 가 출력 
        변수 선언이 수 A 구亡가 한 줄씩 순차적으로 실행되는 시점. 즉 런타임runtime 이 아니라 그 이전 단 계에서 먼저 실행되기 때문이다.

        예약어 p47

        -변수 선언 문자
        알파벳 외의 유니코드 문자로 선언 할수있지만 알파벳만 쓰자
*5장 - 표현식과 문*
        -리터럴 
        사람이 이해할 수 있는 문자 또는 약속된 기호 사용해 값을생성 하는 표기법
        [정수,부동소수,2/8/16진,문자,불리언,null,undefined,객체,배열,함수,정규]
        -문
        여러 토큰으로 구성된다 
        var sum = 1 + 2 ;  <<하나하나가 다 토큰 
        토큰으로 이루어진 것이 문 
        
*6장 - 데이터 타입*
        -자바크스리트(ES6)
        7개의 데이터 타입을 제공한다. 원시 타입과 객체
            원시타입
                숫자
                문자
                불라인      true false
                언디파인드
                널
                심벌        (모름) ES6 추가된 7번째 타입
            객체타입
                객체,함수,배열 등            
        -숫자타입
            Infinity:   앙의 무한대 
            -Infinity:  음의 무한대 
            NaN:        산술 연산 불가
        대소문자 구별 NaN을 NAN,Nan,nan과 같이 표현하면 에러
        ex)== 비교x isNaN으로하기
*7장 - 연산자*
        -연산자
        하나 이상의 표현식을 대상으로 산술,비교,논리,타입,지수연상등 수행
        연산자,피연산자,문자열 연결 연산자,할달연산자,비교연산자 등등
        ※결국 에러안나면 되는거임

        -이항 산술 연산자
        +(덧셈),-(뺄셈),*(곱셈),/(나눗셈),%(나머지)

        -단항 산술 연산자
        -++(증가),--(감소),

        -String 타입을 숫자로 바꾸는거 + (오 개신기)

        -할당 연산자 
        =,+=,-=,*=,/=,%=
        ※ 앵간하면 += 만 사용함 다른거 사용 할경우가 잘 안생겼음

        -비교연산자
        ==(동긍비교),===(일치비교),!=(부동등비교),!==(불일치비교)
        ※매우 중요함 괜히 === !== 쓰는게아님(p81 예제7-13)
        
        -대소 관계 비교 연산자
        >,<,>=,<=

        -삼항연산자 
        결국은 if else 문 짧으면 쓰는게 좋다 생각함 길면 사용x

        -논리연산자 
        ||(or),&&(and),!(NOT)

        -지수연산자 
        Math.pow -> ** 사용

        -그 외의 연산자
        ?.(옵셔널체이닝),??(null병합),delete(프로퍼티 삭제)
        ,new(생성자 함수를 호출할때 사용하여 인스턴스 생성)
        ,instanceof(최변의 객체가 우변의 생ㄷ성자 함수와 연결된 인스턴스인지 판별 ) --indexOf 는 봤는데 ..
        ,in(프로퍼티 조냊 확인)
*8장 - 제어문*
        -블록문 0개 이상의 문을 중괄호로 묶은것 ex) {}
        
        -조건문 if else   == 삼항연산자랑
        
        -switch  case  default 
        switch(값){
                case    : "내용" break;               
                default :
        }

        -반복문 for 
        for(1번.var i=0; 2번.i<2; 3번.i++){
                1번 선언 
                2번 종료조건 false되면 종료 
                3번 변수 변화
        }
        ※주의: 잘못하면 무한루프 돌수있음 

        -반복 while 
        while(true){계속돔}
        
        ※난 포문이 좋음 

        -break; continue;
        for문에서 break는 벗어나는 것이고
        컨티뉴는 계속 진행하되 컨티뉴부분에서 멈추고 다음으로 진행


*9장 - 타입 변환과 단축 평가*
        -타입 변환이란 
        모든 값에 타입이 있다.
        개발자의 의도에 따라 다른 타입변환 가능 
        명시적 타입 or 타입캐스팅  -line73
        
        -암묵적인 타입변환 
        이거는 헷갈리니간 그냥 처음부터 코딩을 잘해두자 헷갈리면 변환해서 사용하자.-line79
        
        -true  = 1 fasle = 0

        -String(),NumBer(),Boolean(0or1)false/true

*10장 - 객체 리터럴*
        ※자바스크립트를 구성하는 거의 "모든것" 이 객체다※
        원시값을 제외한 나머지 (함수,배열,정규식 표현식등 모두 객체)
        p124 그림참조
        객체는 0이상의 프로퍼티로 구성된 집합이며 
        프로퍼티는 키와 값으루 구성

        -line89
        삭제 delete Bang.abc 

        ES6 에서는 프로퍼티 값으로 변수를 사용히는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 로퍼티 키 
        를 생략갓opertyshorthand 할수 있다. 이때 프로퍼티 키는 변수 이름으로 자동 생성된다. 

        var x="a"; var y ="b";
        var obj ={
            x[이걸자동생성] :x
            y[이걸자동생성] :y            
        }

        예제 10-21,22 동적생성 어쩌고 그러는데 장난질 의미 크게없음
*11장 - 원시 값과 객체의 비교*
        -원시값 
        변경 불가능한 값
        한번 생성된 원시값은 읽기전용 값으로 변경x
        원시 값의 특성은 데이터의 신뢰성을 보장

        -유사배열객체 line107

        -값에 의한 전달
        시점의 차이 

        -얕은복사와 깊은 복사 line110
        솔직히 뭔 차이인지 모르겠음 되지도 않고 
        객체의 주소 값마저 복사한다는 그런거 같긴한데

        ※웹스퀘어에서 dataList 알리야스데이터가 깊은복사의 경우인가 .?
        setJSON(AllJSON)은 얕은복사이고
        
*12장 - 함수*
        ※ 자바스크립트에서 가장 중요한 핵심 개념이다.
        [스코프,컨텍스트.클로저.생성자의함수에의한객체생성,메서드,this,프로토타입,모듈화등]
        == 입력 과 출력 input output

        -함수는
        일련의 과정을 문으로 구현하고 코드블록으로 감싸서 하나의 실행 단이로 정의한 것
        [매개변수,인수,반환값]

        -함수를 사용 하는 이유 
        1.코드의 재사용
        2.유지보수의 편의성
        3.코드의 신뢰성 
        4.코드의 가독성 
        결론 편하자고씀.

        -함수리터널 line127

        -{}
        무슨 이론이 굉장하긴한데 하나의 문맥을 정의한거로 보면 될거 같다.

        - 클로저 함수  
        함수가 동일하게 동작하지 않는다는 것만 알아두자 
        나중에 배울듯 p167  이동201   무슨내용인지도 모르겠음

        -함수 호출 소스참조

        -즉시 실행 함수
        함수  몸체에서만 참조할 수있는 식별자 이므로 즉시 실행 함수를 다시 호출불가 [소스참조 변수선언과 동시에 함수작성]  

        -재귀 함수      
        function test(n) {
                console.log(n);
                test(n-1);        //다시호출
        }
        test( 10 );
        
        -중첩함수 요거는 흠.. 쓸일이 있을까 싶다
        function a(){
                function b(){

                }
                b();
        }
        
*13장 - 스코프*
        -란?
        자바스크립트를 포함한 모든 프로그래밍 언어의 기본적이며 중요한 개념이다.
        var let const 다르게 작동한다  [난 모르겠다 나중에 나오겠지]

        -매개변수는 함수 몸채 내부에서만 참조 가능하다

        ※스코포는 식별자가 유효한 범위를 이야기한다.

        -종류
        전역 :  스타벅스 전세계 체인점
        지역 :  한국에만 있는 체인점
        지역과 지역 : 대전에만 있는 체인점 ,부산에만 있는 체인점

        -함수 레벨 스코프
        조건문에 따라서 값이 변하는것

        -렉시컬 스코프
        함수를 어디서 호출했는지에 따른 값 
        var a = 0;
        function b (){
                var a =1;
                aa();
        }
        function (){
                console.log(a);  값0
        }
*14장 - 전역 변수의 문제점*
        ※전역 변수의 무분별한 사용은 위험하다
        -반드시 사용할 이유를 찾지 못한다면 지역변수를 사용해야한다.

        -변수의 생명주기 -line155
        지역 변수는 할당 문이 실행 전까지는 undefind 값을 가진다.
        [호이스팅 스코프를 단위로 동작/자바스크립트 고유의 특징]

        -전역 변수의 문제점
        1.암묵적인 결합 ex) var aa="Bang"  var aa="BBang";
        의도치 않게 재할당.
        2.전역 변수의 검색 속도가 가장 느리다.(못느끼지만 있단다.)
        3.※네임스페이스※
        파일이 분리되어 있다해도 하나의 전역 스코프를 공유한다는것
        따라서 예상치 못한 결과를 가져올 수 있다.
*15장 - let,const 키워드와 블록 레벨스코프*
        -var 키워드로 선언한 변수의 문제점 -line 165
        ㅁ변수중복선언 허용          
        ㅁif문 for문에서 전역변수가댐

        -let 키워드 
        ㅁ중복선언안댐  [var와 차이] 
        ㅁfor문 if문 안에 있으면 지역 변수
        ㅁlet키워드로 선언한 변수는 선언 단계와 초기화 단계로 분리되어 진행
        ㅁ line175 확인 호이스팅에러

        -const 키워드  1회용임
        ㅁ선언과 동시에 초기화  line180
        ㅁ재할당금지  
        ㅁ 객체는 변경가능  개신기하네 
         [아마 객체안의 값은 객체안에서의 변수개념이기에 변경가능  ]
         [const키워드는 재할당을 금지할 뿐 불변을 의미하지는 않음]

        -상황에 맞게 var let const  각상황에 맞게 사용하면댄다
        var 대신 let를 쓰라하는 이유가 여기에 있는거 할당여부에 있는거 같다. 걍  let const의 용도를 정확히 파악하면 좋은거 같다. 




