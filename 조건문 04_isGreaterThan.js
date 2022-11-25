/*
!문제
? 두 개의 수를 입력받아 두번째 수가 첫번째 수보다 큰지 여부를 리턴해야 합니다.

입력
인자 1 : num1
    number 타입의 수
인자 2 : num2
    number 타입의 수

출력
boolean 타입을 리턴해야 합니다.

주의 사항
같은 수를 입력받은 경우, false를 리턴해야 합니다

입출력 예시
1   let output = isGreaterThan(11, 10);
2   console.log(output); // --> false
*/

// TODO: 여기에 코드를 작성합니다.

function isGreaterThan(num1, num2) {
    if (num1 < num2) {
        return true;
    } else {
        return false;
    }
}

// num1 보다 num2가 클경우에만 true 값을 출력한다. 
// if (num1 < num2) {
//     return true;
// }
// return false;
// else는 생략이 가능하다.
