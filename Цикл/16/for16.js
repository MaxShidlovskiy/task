let n = [];
for (let i = 0; i < 5; i++) {
    n[i] = prompt('Введите число', +i);
    if (isNaN(n[i])) {
        console.log("Повторите ввод");
        break
    }

    n[i] **= 2;

}
console.log([n]);
//done