const a = +(prompt("Введите ваш возвраст"));

if (a <= 13) {
    console.log("детство;");
} else if (a <= 24) {
    console.log("молодость;");
} else if (a <= 59) {
    console.log("зрелость;");
} else if (a >= 60) {
    console.log("старость");
} 