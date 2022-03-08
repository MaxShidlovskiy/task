let num = +prompt("введите число");
let last = num % 10;
let result = "YES";
while (num > 0) {
    if (num % 10 < last) {
        result="NO";
    }
    last = num % 10;
    num = (num - num % 10) / 10;
}
console.log(result);