let num = +prompt("введите число");
let sum = 0;
let kol = 0;
let prod = 1;
let first;
while (num > 0) {
    sum += num % 10;
    kol += 1;
    prod *= num % 10;
    first = num % 10;
    num = (num - num % 10) / 10;
}
console.log(`Сумма ццифр ${sum}`);
console.log(kol);
console.log(prod);
console.log(sum / kol);
console.log(num%10);
console.log((num%10)+first);