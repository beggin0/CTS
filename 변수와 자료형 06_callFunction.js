/*
함수의 호출(invoke; call)

변수에 함수가 담겨있다면, 다른 변수와는 다르게 () 괄호를 붙여서 함수를 호출할 수 있습니다. 
또한 입력값을 설정할 수도 있는데요, 이를 전달인자(argument), 줄여서 인자라고 부릅니다.

1   let word = speakUp('hello world');
2   // 1. 함수 speakUp에 ()를 붙여 함수를 호출합니다.
3   // 2. 호출 시 괄호 안에 'hello world'를 넣어 문자열 'hello world'를 인자로 전달합니다.
4   // 3. 호출된 함수가 리턴하는 값을 변수 word에 할당합니다.
5   // TIP: 변수에 값을 담는 것을 "할당한다" 라고 합시다 :)

함수의 리턴(return)

함수가 호출되고 나면, 함수의 body(중괄호 내의 코드)에 있는 코드가 실행되고 결과값을 리턴(return)합니다. 
이 결과 값은 함수의 body에서 어떤 값을 return하는지에 따라서 결정됩니다. 
아무것도 return하지 않으면 undefined를 리턴합니다.

1   function minusOne(input) {
2       input = input - 1;
3       return input;
4   }
5   let result = minusOne(10); // 9

1   function functionWithoutReturn() {
2       console.log('I may return!');
3   }
4   let result = functionWithoutReturn(); // undefined
*/

// !문제

// TODO
// 문자열을 인자로 받아서 느낌표를 붙여서 리턴 해주는 함수 returnWordWithJoy가 있습니다.
// 함수 returnWordWithJoy의 첫 번째 인자로 문자열 "I love coding"을 넣어서 호출하고, 그 결과값을 변수 word에 할당하세요.

let word; 

// 아래 코드는 변경하지 마세요
function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type';
  } else {
    return word + '!';
  }
}

word = returnWordWithJoy("I love coding");
