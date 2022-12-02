/*
!문제
? 삼각형의 세 변을 입력받아 직각삼각형(pythagorean)인지 여부를 리턴해야 합니다.

입력
인자 1 : side1
    number 타입의 삼각형 한 변 (1 이상의 정수)
인자 1 : side2
    number 타입의 삼각형 한 변 (1 이상의 정수)
인자 1 : side3
number 타입의 삼각형 한 변 (1 이상의 정수)

출력
boolean 타입을 리턴해야 합니다.

주의 사항
삼각형의 각 세 변은 무작위로 입력됩니다.
자바스크립트에서 x의 제곱(x squared)을 구하는 방법은 3가지 입니다. 세 가지 방법을 모두 사용해야 합니다.
arr.sort 사용은 금지됩니다.
제곱을 구할 때는 입력으로 주어지는 변수를 그대로 사용해야 합니다.

입출력 예시
1   let output = isPythagorean(3, 4, 5);
2   console.log(output); // --> true (5 * 5 = 3 * 3 + 4 * 4)
3   
4   isPythagorean(5, 3, 4);
5   console.log(output); // --> true
6   
7   output = isPythagorean(6, 4, 5);
8   console.log(output); // --> false

힌트
직각삼각형은 가장 큰 변(빗변)의 제곱이 나머지 두 변 각각의 제곱의 합과 동일합니다. (피타고라스의 정리)
수학에서 자주 사용하는 상수(constants)와 함수들을 미리 구현해 놓은 자바스크립트 표준 내장 객체가 있습니다.
Math 객체를 검색해 봅니다. (js math object 또는 자바스크립트 math 객체)
자바스크립트에서의 거듭제곱 연산을 직접 검색해 봅니다. (js how to power 또는 자바스크립트 거듭제곱)
*/

// TODO: 여기에 코드를 작성합니다.

function isPythagorean(side1, side2, side3) {
    if (Math.max(side1, side2, side3) === side1) {
        if (Math.pow(side1, 2) === Math.pow(side2, 2) + Math.pow(side3, 2)) {
            return true;
        }
        return false;
    }
    else if (Math.max(side1, side2, side3) === side2) {
        if (side2 ** 2 === side1 ** 2 + side3 ** 2) {
            return true;
        }
        return false;
    }
    else if (Math.max(side1, side2, side3) === side3) {
        if (side3 **= 2 === (side1 **= 2) + (side2 **= 2)) {
            return true;
        }
        return false;
    }
}

console.log(isPythagorean(23, 7, 25))

// 세 변을 비교해서 가장 큰 변을 구하고 Math.max(num1, num2, num3)  Math 객체
// 주의사항의 3가지 방법 Math.pow(), **, **=
// testd에서는 side1 * side1 을 원한다. **= 요거 대신에 앞에 내용처럼 쓰니 통과.

// function isPythagorean(side1, side2, side3) {
//     const pow1 = side1 * side1;
//     const pow2 = side2 ** 2;
//     const pow3 = Math.pow(side3, 2);
  
//     if (pow1 === pow2 + pow3 || pow2 === pow1 + pow3 || pow3 === pow1 + pow2) {
//       return true;
//     }
  
//     return false;
// }