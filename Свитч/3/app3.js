const month = +(prompt("Введите месяц"));
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Зима");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Весна");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Лето");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Осень");
        break;
    default:
        console.log("Некорректный ввод");
}