// Створення масиву для зберігання списку покупок
let shoppingList = [];

// Функція для додавання товару до списку
function addItem(item) {
    shoppingList.push(item);
    alert(`${item} додано до списку покупок.`);
}

// Функція для видалення товару зі списку
function removeItem(item) {
    let index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        alert(`${item} видалено зі списку покупок.`);
    } else {
        alert(`Товар "${item}" не знайдено у списку.`);
    }
}

// Функція для виведення поточного списку покупок
function displayList() {
    if (shoppingList.length === 0) {
        alert("Список покупок порожній.");
    } else {
        alert("Список покупок:\n" + shoppingList.join("\n"));
    }
}

// Запит користувача на вибір дії
function chooseAction() {
    let action = prompt("Виберіть дію:\n1 - Додати товар\n2 - Видалити товар\n3 - Показати список\n4 - Завершити роботу");
    return action;
}

// Повторення процесу поки користувач не завершить роботу
while (true) {
    let action = chooseAction();
    
    if (action === "1") {
        let item = prompt("Введіть назву товару, який хочете додати:");
        addItem(item);
    } else if (action === "2") {
        let item = prompt("Введіть назву товару, який хочете видалити:");
        removeItem(item);
    } else if (action === "3") {
        displayList();
    } else if (action === "4") {
        alert("Дякуємо за користування списком покупок. До побачення!");
        break;
    } else {
        alert("Некоректний вибір. Спробуйте ще раз.");
    }
}