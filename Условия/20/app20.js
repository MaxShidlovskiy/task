const a = +(prompt("Введите первое число"));
const b = +(prompt("Введите второе число"));
const c = prompt("Введите операцию");
if (c === "/") {
    if (a === 0 || b === 0) {
        console.log("На ноль делить нельзя");
    } else {
        console.log(a / b);
    }
}
if (c === "*") {
    console.log(a * b);
}
if (c === "+") {
    console.log(a + b);
}
if (c === "-") {
    console.log(a - b);
}