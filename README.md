# Web_TypeScript

### TypeScript
#### TypeScript의 이해
- JavaScript가 발전했지만 몇 가지 문제가 발생
  - 객체 타입이 모호하게 코딩해도, 알아서 다 인식하는 편리함이 타입으로 인한 버그 유발
  - 문법 에러가 있는 코드라도, 실행이 되어아먄 에러가 발생
  - 이유 : 동적 프로그래밍 언어
  >> [1. JavaScript](https://github.com/KimUJin3359/Web_Typescript/blob/master/001.typescript.js)
- TypeScript는 타입이 명확하게 지정할 수 있도록 만들어짐
  >> [2. TypeScript](https://github.com/KimUJin3359/Web_Typescript/blob/master/002.typescript.ts)

#### TypeScript의 특징
- 정적타입
  - 타입을 명확하게 지정할 수 있음
- 도구의 지원
  - JavaScript보다 개발이 편리(Code Assistant, Type Check 가능)
- Angular의 기본언어로 채택
  - Angular : Framework 3대장(Vue.js, React, Angular)

| TypeScript | JavaScript |
| --- | --- |
| 컴파일 필수 | 위에서 아래로 한 줄 씩 실행 |
| .ts파일로 구현 | 엔진 내부에서 빠른 성능 최적화를 위해 부분 컴파일도 수행
| .js로 트랜스파일 | 언어 자체는 인터프리터 언어 |

#### TypeScript의 설치
- npm i -g typescript
- tsc --init
- tsc -w (typeScript 파일 변화 감지)

#### TypeScript의 데이터 타입
| Tpye | JS | TS | Des |
| --- | --- | --- | --- |
| boolean | O | O | true와 false |
| null | O | O | 값이 없음을 명시 |
| undefined | O | O | 값을 할당하지 않은 변수의 초기값 |
| number | O | O | 숫자(정수와 상수, infinity, Nan) |
| string | O | O | 문자열 |
| symbol| O | O | 고유하고 수정 불가능한 데이터 타입, 주로 객체 프로퍼티들의 식별자로 사용|
| object| O | O | 객체형(참조형) |
| array | X | O | 배열 |
| tuple | X | O | 고정된 요소수 만큼의 타입을 미리 선언 후 배열을 표현 |
| enum | X | O | 열거형, 숫자값 집합에 이름을 지정한 것 |
| any | X | O | 타입 추론할 수 없거나 타입 체크가 필요없는 변수에 사용 |
| void | X | O | 함수에서 반환값이 없을 경우 사용 |
| never | X | O | 결코 발생하지 않는 값 |

- 데이터타입 대/소문자 구분하기
  - string : 원시 타입 문자열 타입
  - String : String 생성자 함수로 생성된 String 래퍼 객체 타입
  - 다른 변수형에서도 마찬가지로 대/소문자 구분 필수

#### TypeScript 실습
>> [1. TypeScript 클래스 선언](https://github.com/KimUJin3359/Web_Typescript/blob/master/004.typescript_basic.ts)
>> [2. JavaScript 트랜스파일링 결과](https://github.com/KimUJin3359/Web_Typescript/blob/master/004.typescript_basic.js)
- 개발 시 유의사항
  - JavScript파일은 건들지 않음
  - TypeScript만으로 개발 및 수정, 유지보수 진행

>> [3. Method 만들기](https://github.com/KimUJin3359/Web_Typescript/blob/master/005.typescript_method.ts)
>> [4. Type 선언 연습](https://github.com/KimUJin3359/Web_Typescript/blob/master/006.type_declare.ts)
>> [5. 함수 선언식과 함수 표현식 연습](https://github.com/KimUJin3359/Web_Typescript/blob/master/007.function_declare.ts)
>> [6. if 구문](https://github.com/KimUJin3359/Web_Typescript/blob/master/010.if.ts)
>> [7. for 구문](https://github.com/KimUJin3359/Web_Typescript/blob/master/011.for.ts)
>> [8. array 사용](https://github.com/KimUJin3359/Web_Typescript/blob/master/012.array.ts)
>> [9. function 사용](https://github.com/KimUJin3359/Web_Typescript/blob/master/013.function.ts)

#### HTML 파일에 JS파일 삽입
>> [1. JavaScript로 구현](https://github.com/KimUJin3359/Web_Typescript/blob/master/008.insert_js.js)
>> [2. TypeScript를 JavaScript로 트랜스파일링 했을 경우](https://github.com/KimUJin3359/Web_Typescript/blob/master/009.insert_ts.ts)
