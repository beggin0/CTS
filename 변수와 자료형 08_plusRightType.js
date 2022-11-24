/*
타입에 따른 작동 방식의 차이

우리는 string과 number에 대해서 막 배웠습니다. 
아까 문제를 푸시면서 이상한 점을 발견하시지 않았나요? +의 작동이 내가 생각한 것과 다르다고 생각하셨다면, 잘 생각하신겁니다 :) 
string과 string을 더하면, 문자열과 문자열이 붙은 형태로 표현됩니다. (string concatenation) 
number와 number를 더하면, 우리가 상상한대로 덧셈 연산이 진행됩니다.

1   let word = 'hello' + ' ' + 'world';
2   let count = 32 + 1;

앞으로 string과 number외에 다른 타입도 배우시게 되는데, 각 타입 별로 코드의 작동이 다르게 될 수 있다는 것을 인지하고 계셔야 합니다. 
우리가 '커피를 마신다'라고는 이야기 하지만, '커피을 마신다'라고 하지 않는 것 처럼, 코드도 타입에 따라서 올바른 문법이 있습니다. 
그에 맞지 않게 작성하면 에러가 나거나, 예상하지 못한 결과가 나옵니다.

1   let score = 90 + '10'; // '9010'

이를 막기 위해서는, 자바스크립트 사용 시에 바른 문법을 사용하고, 각 타입에 맞는 문법을 사용해야 합니다. 
*/

// !문제

// TODO : 변수 score에 숫자 100이 할당되도록 하기 코드를 수정하세요.

let score = 90 + 10;

