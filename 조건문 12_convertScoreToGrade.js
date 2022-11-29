/*
!문제
? 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

입력
인자 1 : score
    number 타입의 정수

출력
string 타입을 리턴해야 합니다.
(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'

주의 사항
만약 주어진 점수가 100을 초과하거나 0 미만이라면 문자열 INVALID SCORE를 리턴해야 합니다.

입출력 예시
1   let output = convertScoreToGrade(91);
2   console.log(output); // --> 'A'

힌트
자바스크립트(를 포함한 거의 대부분의 프로그래밍 언어)의 비교 연산자는 이항 연산자(binary operator)입니다.
이항 연산자는 2개의 대상에 대해서만 연산을 수행합니다.
70 < score < 80 와 같은 표현은 보이는 대로 작동하지 않습니다.
연산자 우선 순위를 검색해 봅니다. (js operator precedence 또는 자바스크립트 연산자 우선순위)
연산자 우선 순위를 암기해서 쓰기보다는 괄호를 적절하게 사용하는 것이 더 중요합니다.
*/

// TODO: 여기에 코드를 작성합니다.

function convertScoreToGrade(score) {
    if (score > 100 || score < 0) {
        return  'INVALID SCORE';
    } else {
        if (score >= 0 && score <= 59) {
            return 'F';
        }
        else if (score >= 60 && score <= 69) {
            return 'D';
        }
        else if (score >= 70 && score <= 79) {
            return 'C';
        }
        else if (score >= 80 && score <= 89) {
            return 'B';
        }
        else if (score >= 90 && score <= 100) {
            return 'A';
        }
    }
}

console.log(convertScoreToGrade(-1))
// 결합성 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// > 100, < 0

// let grade;
// if (score > 100 || score < 0) {
//   return 'INVALID SCORE';
// }
// if (score >= 90) {
//   grade = 'A';
// } else if (score >= 80) {
//   grade = 'B';
// } else if (score >= 70) {
//   grade = 'C';
// } else if (score >= 60) {
//   grade = 'D';
// } else if (score >= 0) {
//   grade = 'F';
// }

// return grade;

// 레퍼런스. 변수 지정해서 출력. score >= 0 이렇게 쓰는게 보기좋다.