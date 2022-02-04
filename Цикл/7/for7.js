let a = +(prompt("введите число"));
let b = +(prompt("введите число"));
let sum = 0;
for (let i = a; i <= b; i++) {
    if (i ** 3 % 10 === 4 || i ** 3 % 10 === 9) {
        sum += 1;
    }
}

console.log(sum);
//done