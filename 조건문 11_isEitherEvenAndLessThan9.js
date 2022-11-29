/*
!문제
? 두 개 수를 입력받아 아래의 2가지 조건을 모두 만족하는지 검사합니다. 
?   1. EitherEven: 적어도 하나의 수는 짝수이다.
?   2. LessThan9: 두 수 모두 9보다 작다.

입력
인자 1 : num1
    number 타입의 정수 (num1 >= 0)
인자 2 : num2
    number 타입의 정수 (num2 >= 0)

출력
boolean 타입을 리턴해야 합니다.

입출력 예시
1   let output = isEitherEvenAndLessThan9(2, 4);
2    console.log(output); // --> true
3   
4   let output = isEitherEvenAndLessThan9(72, 2);
5   console.log(output); // --> false
*/

// TODO: 여기에 코드를 작성합니다.

function isEitherEvenAndLessThan9(num1, num2) {
    if (num1 % 2 === 0 || num2 % 2 === 0) {
        if (num1 < 9 && num2 < 9) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isEitherEvenAndLessThan9(7, 4))

// 조건 나열 || &&