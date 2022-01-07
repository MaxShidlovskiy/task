const n = prompt("введите число");

if (isNaN(n)) {
    console.log('Это не число');
} else if (n % 3 === 0) {
    console.log('Это число и остаток от деления на 3 равен 0');
} else if (n % 3 != 0) {
    console.log('Это число, но остаток от деления на 3 не равен 0');
}