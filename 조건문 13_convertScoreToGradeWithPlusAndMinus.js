/*
!문제
? 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

입력
인자 1 : score
    number 타입의 정수

출력
string 타입을 리턴해야 합니다.
각 등급의 최저 점수는 아래와 같습니다. ('F'의 경우 최대 점수를 표기)
90 이상 --> 'A'
80 이상 --> 'B'
70 이상 --> 'C'
60 이상 --> 'D'
60 미만 --> 'F'

주의 사항
만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다. (단, 93점의 경우에는 A를 리턴해야 합니다.)
각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
F+ 와 F- 는 존재하지 않습니다.

입출력 예시
1   let output = convertScoreToGradeWithPlusAndMinus(91);
2   console.log(output); // --> 'A-'
*/

// TODO: 여기에 코드를 작성합니다.

function convertScoreToGradeWithPlusAndMinus(score) {
    let grade;
    if (score > 100 || score < 0) {
        return 'INVALID SCORE';
    }
    if (score >= 90) {
        if (score >= 90 && score <= 92) {
            grade = 'A-'
        } else if (score >= 93 && score < 98) {
            grade = 'A'
        }
        grade = 'A+'
    }
    else if (score >= 80) {
        if (score >= 80 && score <= 82) {
            grade = 'B-'
        } else if (score >= 83 && score < 88) {
            grade = 'B'
        }
        grade = 'B+'
    }
    else if (score >= 70) {
        if (score >= 70 && score <= 72) {
            grade = 'C-'
        } else if (score >= 73 && score < 78) {
            grade = 'C'
        }
        grade = 'C+'
    }
    else if (score >= 60) {
        if (score >= 60 && score <= 62) {
            grade = 'D-'
        } else if (score >= 63 && score < 68) {
            grade = 'D'
        }
        grade = 'D+'
    }
    if (score < 60) {
        grade = 'F';
    }

    return grade;
}

console.log(convertScoreToGradeWithPlusAndMinus(59))

// > 100, < 0 'INVALID SCORE'
// 60 ~ 62 D-, 68 ~ 69 D+, 외는 D
// 예외로 93은 A
// F는 등급없이 점수로 처리

// else if 안쓸경우 마지막에 걸리므로 정확히 나오지 않는다, 올바르지 않은 점수도 바로 리턴않시킬 경우 잘못 된 답이 나온다. F의 경우 최대 점수를 표기 이말은 < 60 면 'F'


// function plusOrMinus(score) {
//     const extra = score % 10;
//     if (extra <= 2) {
//       return '-';
//     } else if (extra >= 8) {
//       return '+';
//     } else {
//       return '';
//     }
//   }
  
//   function convertScoreToGradeWithPlusAndMinus(score) {
//     let grade;
//     if (score > 100 || score < 0) {
//       return 'INVALID SCORE';
//     }
//     if (score === 100) {
//       return 'A+';
//     }
//     if (score >= 90) {
//       grade = 'A';
//     } else if (score >= 80) {
//       grade = 'B';
//     } else if (score >= 70) {
//       grade = 'C';
//     } else if (score >= 60) {
//       grade = 'D';
//     } else if (score >= 0) {
//       grade = 'F';
//     }
  
//     if (grade !== 'F') {
//       grade = grade + plusOrMinus(score);
//     }
//     return grade;
//   }

// 레퍼런스. 플러스 마이너스 함수를 따로 만들어 식을 이쁘게 만들었다.