const num = +(prompt('Введите трехзначное число'));
const num1 = Math.floor(num / 100);
const num2 = Math.floor((num % 100) / 10);
const num3 = (num % 10);
if (100 <= num,
    num < 1000) {
    console.log(num1 + num2 + num3);
} else {
    console.log("число не трехзначное");
}