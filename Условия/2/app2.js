const num = +(prompt("Введите число от 0 до 59"));
if (num <= 15) {
    console.log("В первую четверть");
} else if (num <= 30) {
    console.log("Во вторую четверть");
} else if (num <= 45) {
    console.log("В третью четверть");
} else if (num <= 59) {
    console.log("В четвертую четверть");
}