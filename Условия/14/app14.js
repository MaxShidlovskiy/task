const num = +(prompt("Введите четырехзначное число"));
if (1000 <= num && num < 10000) {
    if (num % 7 === 0 || num / 17 === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
} else {
    console.log("Число не четырехзначное");
}