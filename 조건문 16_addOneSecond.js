/*
!문제
시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다.

입력
인자 1 : hour
    number 타입의 정수 (0 <= hour && hour < 24)
인자 2 : minute
    number 타입의 정수 (0 <= minute && minute < 60)
인자 3 : second
    number 타입의 정수 (0 <= second && second < 60)

출력
string 타입을 리턴해야 합니다.
1초 뒤에 {hour}시 {minute}분 {second}초 입니다 형식으로 리턴해야 합니다.

입출력 예시
1   let output = addOneSecond(14, 17, 59);
2   console.log(output); // --> '1초 뒤에 14시 18분 0초 입니다'
3   
4   output = addOneSecond(1, 59, 59);
5   console.log(output); // --> '1초 뒤에 2시 0분 0초 입니다'
6   
7   output = addOneSecond(3, 24, 29);
8   console.log(output); // --> '1초 뒤에 3시 24분 30초가 입니다'
9   
10  output = addOneSecond(23, 59, 59);
11  console.log(output); // --> '1초 뒤에 0시 0분 0초 입니다'
*/

// TODO: 여기에 코드를 작성합니다.

function addOneSecond(hour, minute, second) {

}

// 나올 메시지 1초 + 했을경우 분, 시간 바뀌는거 
// 23 59 59 일경우 전부 0