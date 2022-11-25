/*
!문제
? 수를 입력받아 짝수인지 여부를 리턴해야 합니다.

입력
인자 1 : num
    number 타입의 정수 (num >= 0)

출력
boolean 타입을 리턴해야 합니다.

주의 사항
0은 짝수로 간주합니다.

입출력 예시
1   let output = isEven(11);
2   console.log(output); // --> false

힌트
짝수(even number)와 홀수(odd number)의 차이를 검색해 봅니다. (js check even number)
*/

// TODO: 여기에 코드를 작성합니다.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

// 2로 나누었을 때의 나머지가 0 이면 짝수, 아니고 1이라면 홀수
// % 왼쪽의 피연산자를 오른쪽의 연산자로 나눈 후, 그 나머지를 반환한다.
