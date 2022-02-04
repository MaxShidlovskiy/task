let n = [];
for (let i = 0; i < 5; i++) {
    n[i] = prompt('Введите число', +i);
    if (isNaN(n[i])) {
        console.log("Повторите ввод");
        break
    }
    if (String(n[i]).startsWith("1") || String(n[i]).startsWith("2") || String(n[i]).startsWith("5")) {
        console.log(n[i]);
    } else {
        console.log("В массиве нет элементов, которые начинаются на 1, 2, 5");
    }
}