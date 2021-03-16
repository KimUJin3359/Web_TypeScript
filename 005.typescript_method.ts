class Lunch {
    private myLunch: string;

    constructor(myLunch: string) {
        this.myLunch = myLunch;
    }

    mc(str: string) {
        console.log(str);
    }

    kfc(num1: number, num2: number, num3: number) {
        console.log(num1 + num2 + num3);
    }
}

const lunch = new Lunch('chicken');
lunch.mc('KFC');
lunch.kfc(3, 4, 5);