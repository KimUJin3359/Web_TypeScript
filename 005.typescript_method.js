"use strict";
var Lunch = /** @class */ (function () {
    function Lunch(myLunch) {
        this.myLunch = myLunch;
    }
    Lunch.prototype.mc = function (str) {
        console.log(str);
    };
    Lunch.prototype.kfc = function (num1, num2, num3) {
        console.log(num1 + num2 + num3);
    };
    return Lunch;
}());
var lunch = new Lunch('chicken');
lunch.mc('KFC');
lunch.kfc(3, 4, 5);
