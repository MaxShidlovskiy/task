const num = +prompt("введите число");
let value = 2;
while (num > 1) {
    if (num % value === 0) {
        break;
    }
    value += 1;
}
console.log(value);