/*
!문제
? 이름과 나이를 입력받아 나이별로 다른 메시지를 리턴해야 합니다.

입력
인자 1 : name
    string 타입의 알파벳 문자열
    name.length는 10 이하
인자 2 : age
    number 타입의 나이 (0보다 크고 100보다 작은 자연수)

출력
string 타입을 리턴해야 합니다.
이름이 Adrian이고, 나이가 21살 이상이면, Welcome, Adrian! 을 리턴해야 합니다
이름이 John이고, 만일 21살보다 적으면, Go home, John!을 리턴해야 합니다.

입출력 예시
1   let output = checkAge('Adrian', 22);
2   console.log(output); // --> 'Welcome, Adrian!'
3
4   let output2 = checkAge('John', 17);
5   console.log(output2); // --> 'Go home, John!'

힌트
쉼표와 공백, 느낌표까지 정확히 리턴해야 합니다.
두 값을 비교할 때는 비교 연산자(<, >, === 등)를 사용합니다.
*/

// TODO: 여기에 코드를 작성합니다.

function checkAge(name, age) {
    if (age >= 21) {
        return 'Welcome, ' + name + '!';
    }
    return 'Go home, ' + name + '!';
}
// 힌트대로, age >= 21 웰컴 나머지 다 고홈
// 레터럴로 표현 가능