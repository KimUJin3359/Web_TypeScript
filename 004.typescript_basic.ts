class Hello {
    private hello: String;

    constructor(hello:string) {
        this.hello = hello;
    }

    sayHello() {
        return "Hello, " + this.hello;
    }
}

const helloworld = new Hello('hi');
console.log(helloworld.sayHello());