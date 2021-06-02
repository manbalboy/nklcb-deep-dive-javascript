// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0

// null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심벌 타입
+Symbol() //  TypeError: Cannot convert a Symbol value to a string

// 객체 타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) //NaN

// 빈 문자열, 빈 배열, null, false는 0으로 true는 1로 변환된다.
// 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다는 것에 주의하자.
