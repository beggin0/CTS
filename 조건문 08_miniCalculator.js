/*
!문제
? 두 개의 수와 기호를 입력받아 알맞게 계산한 값을 리턴해야 합니다.

입력
인자 1 : num1
    number 타입의 정수
인자 2 : num2
    number 타입의 정수
인자 3 : operator
    string 타입의 기호 ('+', '-', '*', '/')

출력
number 타입을 리턴해야 합니다.

입출력 예시
1   let output = miniCalculator(3, 4, '+');
2   console.log(output); // --> 7
3   
4   output = miniCalculator(9, 3, '/');
5   console.log(output); // --> 3
*/

// TODO: 여기에 코드를 작성합니다.

function miniCalculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
}

// 미니계산기
// num1     operator    num2
// 조건 4가지로 각각 계산식 적어주기

// operator가 + - * / 일경우 num1 operator num2 적용이 가능한가
// if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
//     return num1 operator num2;
// }
