/*
!문제
? 두 개의 boolean 값을 입력받아 or 연산을 적용한 것과 같은 결과를 리턴해야 합니다.

입력
인자 1 : expression1
    boolean 타입의 값
인자 2 : expression2
    boolean 타입의 값

출력
boolean 타입을 리턴해야 합니다.

주의 사항
|| 연산자 사용은 금지됩니다.

입출력 예시
1   let output = or(true, false);
2   console.log(output); // --> true;

힌트
! 와 && 연산자를 사용합니다.
*/

// TODO: 여기에 코드를 작성합니다.

function or(expression1, expression2) {
    if (expression1 === false && expression2 === false) {
        return false;
    }
    return true;
}  

// or 연산자 둘중 하나라도 true 면 true 반환

// 레퍼런스 !== 과 && 로 하나하나 표현.
