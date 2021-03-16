// 함수선언식
function plus (X:number, Y:number): number {
    return X + Y;
}
// 함수표현식
const minus = (X:number, Y:number): number => X - Y;

console.log(plus(2, 3));
console.log(minus(5, 2));