const role = +(prompt("Введите первое число"));

if (role > 0 || role < 37) {

    if (role > 0 && role <= 10) {
        if (role % 2 === 1) {
            console.log("Красный");
        } else {
            console.log("Черный");
        }
    }

    if (role > 10 && role <= 18) {
        if (role % 2 === 1) {
            console.log("Черный");
        } else {
            console.log("Красный");
        }
    }

    if (role > 18 && role <= 28) {
        if (role % 2 === 1) {
            console.log("Красный");
        } else {
            console.log("Черный");
        }
    }

    if (role > 28 && role <= 36) {
        if (role % 2 === 1) {
            console.log("Черный");
        } else {
            console.log("Красный");
        }
    }

    if (role === 0) {
        console.log("Зеленый");
    } else if (role < 0 || role > 36) {
        console.log("ошибка ввода");
    }
}