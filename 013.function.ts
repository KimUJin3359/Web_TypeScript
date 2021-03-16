// 인자가 없을 때
function hello() {
    console.log("hello, world");
}
hello();

// 인자가 있을 때
function fullName(name: string) {
    console.log(`${name} Kim`);
}
fullName('Woojin');

// 인자가 여러개 있을 때
function add_Num(a: number, b: number) {
    return a + b;
}
console.log(add_Num(4, 10));