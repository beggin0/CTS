/*
!문제
? 나이를 입력받아 술을 마실 수 있는지(18세 이상) 여부를 리턴해야 합니다.

입력
인자 1 : age
    number 타입의 나이 (0 이상의 정수)

출력
boolean 타입을 리턴해야 합니다.

입출력 예시
1   let output = isOldEnoughToDrink(18);
2   console.log(output); // --> true
3   
4   output = isOldEnoughToDrink(17);
5   console.log(output); // --> false
*/

// TODO: 여기에 코드를 작성합니다.

function isOldEnoughToDrink(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// 18세 이상부터 술마실 수 있는 나이 true