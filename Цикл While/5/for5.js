let num = +(prompt("введите число"));
let sum = 0;
while (num > 0) {
    if (num >= 25) {
        num -= 25;
    }
    else if (num >= 10) {
        num -= 10;
    }
    else if (num >= 5) {
        num -= 5;
    }
    else  {
        num -= 1;
    }
    sum += 1;
}
console.log(sum);
//done