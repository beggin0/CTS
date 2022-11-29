/*
!문제
? 요일을 입력받아 해당 요일의 다음 요일을 리턴해야 합니다.

입력
인자 1 : day
    임의의 입력
    가능한 요일: 월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일

출력
string 타입을 리턴해야 합니다.
올바른 요일을 입력받은 경우, 다음 요일을 리턴해야 합니다.

주의 사항
올바른 요일이 아닌 경우에는 올바른 요일이 아닙니다 라는 문구를 리턴해야 합니다.

입출력 예시
1   let output = followingDay('월요일');
2   console.log(output); // --> '화요일'
3   
4   output = followingDay('일요일');
5   console.log(output); // --> '월요일'
6   
7   output = followingDay('월');
8   console.log(output); // --> '올바른 요일이 아닙니다'
9   
10  output = followingDay(100);
11  console.log(output); // --> '올바른 요일이 아닙니다'
*/

// TODO: 여기에 코드를 작성합니다.

function followingDay(day) {
    if (day === '월요일' || day === '화요일' || day === '수요일' || day === '목요일' || day === '금요일' || day === '토요일' || day === '일요일') {
        return day;
    }
    return '올바른 요일이 아닙니다'
}
console.log(followingDay('수요일'))

// 정확한 요일이 경우만 리턴 그 외에는 올바른 요일이 아닙니다. 