const money = +prompt("Ваш бюджет на месяц?","");
const time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let state = prompt("Введите обязательную статью расходов в этом месяце",""),
        stateValue = prompt("Во сколько обойдется?","");
    if ( typeof(state) == "string"
        && typeof (state) != null
        && typeof (stateValue) != null
        && state != ""
        && stateValue != ""
        && state.length <= 50
    ) { appData.expenses[state] = +stateValue; } else {
        i--;
        alert("Попробуйте еще раз")
    }
}

// let i = 2;
// do {
//     let state = prompt("Введите обязательную статью расходов в этом месяце",""),
//         stateValue = prompt("Во сколько обойдется?","");
//     if ( typeof(state) == "string"
//         && typeof (state) != null
//         && typeof (stateValue) != null
//         && state != ""
//         && stateValue != ""
//         && state.length <= 50
//     ) { appData.expenses[state] = +stateValue; i--; } else {
//         i++;
//         alert("Попробуйте еще раз")
//     }
// } while (i <= 0);

// let i = 2;
// while(i >= 0) {
//     let state = prompt("Введите обязательную статью расходов в этом месяце",""),
//         stateValue = prompt("Во сколько обойдется?","");
//     if ( typeof(state) == "string"
//         && typeof (state) != null
//         && typeof (stateValue) != null
//         && state != ""
//         && stateValue != ""
//         && state.length <= 50
//     ) { appData.expenses[state] = +stateValue; i--; } else {
//         i++;
//         alert("Попробуйте еще раз")
//     }
// }

appData.moneyPerDay = appData.budget / 30;
let budgetMessage = `Бюджет на день: ${appData.moneyPerDay} \n`;
if (appData.moneyPerDay < 100) {
    budgetMessage+=`Это минимальный уровень достатка`;
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    budgetMessage+=`Вы на среднем уровне достатка`;
} else if (appData.moneyPerDay > 2000) {
    budgetMessage+=`У вас высокий уровень достатка`;
} else {
    budgetMessage+=`Что-то пошло не так...`;
}
alert(budgetMessage);

/*

Дописать нашу программу по видео.

1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку со вторым уроком в свой репозиторий на GitHub

Вопросы к этому заданию
Сколько видов циклов существует в JS?

*/