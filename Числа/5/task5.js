const n = +(prompt("Введите возраст собаки"));
if (n === 1 || n === 2) {
    console.log(n * 10.5);
} else {
    console.log(10.5 * 2 + (n - 2) * 4);
}