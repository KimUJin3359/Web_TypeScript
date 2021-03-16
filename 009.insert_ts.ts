const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLInputElement;

const run = (input: string) => console.log(input);

button.addEventListener('click', function() {
    run(input.value);
})