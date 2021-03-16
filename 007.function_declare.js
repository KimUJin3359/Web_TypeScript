"use strict";
// 함수선언식
function plus(X, Y) {
    return X + Y;
}
// 함수표현식
var minus = function (X, Y) { return X - Y; };
console.log(plus(2, 3));
console.log(minus(5, 2));
