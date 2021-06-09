var string = 'Hello world';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for(var i=0;i<string.length;i++){
    if(string[i] === search){//문자열의 개별 문자가 'l'이면
        index = i;
        break;//반복문을 탈출한다.
    }
}
console.log(index); //2
//String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); //2
