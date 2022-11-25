/*
!문제
? 수를 입력받아 10과 같은지 여부를 리턴해야 합니다.

입력
인자 1 : num
    number 타입의 수

출력
boolean 타입을 리턴해야 합니다.

입출력 예시
1   let output = equalsTen(9);
2   console.log(output); // --> false
*/

// TODO: 여기에 코드를 작성합니다.

function equalsTen(num) {
    if (num === 10) {
        return true;
    } else {
        return false;
    }
}
// 위처럼 조건 나눌 필요없이 
// num === 10 이면 true로 나오기에 return num === 10 이라고 작성 가능하다.
