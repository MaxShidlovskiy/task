let ans = prompt("Что это такое: синий, большой, с усами и полностью набит зайцами?");

for (let i = 0; i < 2; i++) {
    switch (ans) {
        case "Троллейбус":
            console.log("Правильно!");
            break;
        case "Сдаюсь":
            console.log("Правильный ответ: троллейбус");
            break;
        default:
            console.log("Подумай еще.");
    }
    if (i === 1) console.log("Правильный ответ: троллейбус");
    if (ans === "Троллейбус" || ans === "Сдаюсь" || i === 1) break
    if (ans !== "Троллейбус" || ans !== "Сдаюсь") {
        ans = prompt("Попробуй еще раз!");
    }
}