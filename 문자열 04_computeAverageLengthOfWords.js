/*
!문제
? 두 단어를 입력받아 두 단어의 평균 길이를 리턴해야 합니다.

입력
인자 1 : word1
    string 타입의 알파벳 문자열
    word1.length는 10 이하
인자 2 : word2
    string 타입의 알파벳 문자열
    word2.length는 10 이하

출력
number 타입을 리턴해야 합니다.

입출력 예시
1   let output = computeAverageLengthOfWords('code', 'programs');
2   console.log(output); // --> 6
*/

// TODO: 여기에 코드를 작성합니다.

function computeAverageLengthOfWords(word1, word2) {
    if (word1.length > 0 || word2.length > 0) {
        return (word1.length + word2.length) / 2
    }
}

// word1, word2가 한글자 이상이라면 둘이 합해서 나누면 된다. 