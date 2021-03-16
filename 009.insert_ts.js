"use strict";
var input = document.querySelector('input');
var button = document.querySelector('button');
var run = function (input) { return console.log(input); };
button.addEventListener('click', function () {
    run(input.value);
});
