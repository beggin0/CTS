/*
함수의 선언

자바스크립트에서 함수는 두가지 방식으로 선언될 수 있습니다. 
첫 번째 함수 plusOne은 함수 선언식입니다. 
두 번째 함수 minusOne은 함수 표현식을 변수 minusOne에 할당했습니다.
미묘한 차이는 있지만 변수를 선언하고, 함수를 할당했다 라는 결론은 분명합니다.

1   function plusOne(input1) {
2     input1 = input1 + 1;
3     return input1;
4   }
5
6   let minusOne = function (input2) {
7     input2 = input2 - 1;
8     return input2;
9   };
*/

// !문제

// TODO : 첫 번째 인자에 2를 곱하는 함수 multiplyBy2와 비슷하게 첫 번째 인자를 2로 나누는 함수 divideBy2를 선언하세요.

function multiplyBy2(input) {
    input = input * 2;
    return input;
}

let divideBy2 = function (input) {
    input = input / 2;
    return input;
}