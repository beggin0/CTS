/*
!문제
? 임의의 값을 입력받아 falsy 값인지 여부를 리턴해야 합니다.

입력
인자 1 : anything
    임의의 값
출력
boolean 타입을 리턴해야 합니다.

입출력 예시
1   let output = isFalsy('hello');
2   console.log(output); // --> false
3   
4   output = isFalsy(0);
5   console.log(output); // --> true
6   
7   output = isFalsy(true);
8   console.log(output); // --> false
9   
10  output = isFalsy(undefined);
11  console.log(output); // --> true
12  
13  output = isFalsy(NaN);
14  console.log(output); // --> true
15
16  output = isFalsy('');
17  console.log(output); // --> true

힌트
javascript에서 거짓으로 취급하는 값에 대해 검색해 봅니다. (js falsy value 또는 자바스크립트 거짓 값)
*/

// TODO: 여기에 코드를 작성합니다.

function isFalsy(anything) {
    if (anything === false || anything === 0 || anything === -0 || anything === null || anything === undefined || anything === 0n || Number.isNaN(anything) || anything === '') {
        return true;
    }
    return false;
}

console.log(isFalsy(NaN))
// https://developer.mozilla.org/ko/docs/Glossary/Falsy js falsy value 설명
// NaN 판별 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN
// isNaN()과 Number.isNaN()의 차이를 주의해야 합니다. 
// isNaN은 현재 값이 NaN이거나, 숫자로 변환했을 때 NaN이 되면 참을 반환하지만, Number.isNaN은 현재 값이 NaN이어야만 참을 반환합니다.

// 레퍼런스 답 return !Boolean(anything);
// Boolean() 설명 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean