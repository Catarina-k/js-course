// Масив для зберігання оцінок студентів
let grades = [];

// Функція для обчислення середнього балу
function calculateAverage(grades) {
    let sum = grades.reduce((total, grade) => total + grade, 0);
    return (sum / grades.length).toFixed(2); // Округлення до двох знаків після коми
}

// Функція для знаходження найвищої оцінки
function findHighestGrade(grades) {
    return Math.max(...grades);
}

// Функція для знаходження найнижчої оцінки
function findLowestGrade(grades) {
    return Math.min(...grades);
}

// Запит користувача на введення оцінок
let numberOfGrades = parseInt(prompt("Скільки оцінок ви хочете ввести?"), 10);
for (let i = 0; i < numberOfGrades; i++) {
    let grade = parseInt(prompt(`Введіть оцінку ${i + 1} (від 0 до 100):`), 10);
    if (grade >= 0 && grade <= 100) {
        grades.push(grade);
    } else {
        alert("Введіть дійсне значення оцінки від 0 до 100.");
        i--; // Повторний запит для некоректної оцінки
    }
}

// Обчислення середнього балу, найвищої та найнижчої оцінок
let average = calculateAverage(grades);
let highest = findHighestGrade(grades);
let lowest = findLowestGrade(grades);

// Крок 7: Виведення результатів
alert(`Середній бал: ${average}\nНайвища оцінка: ${highest}\nНайнижча оцінка: ${lowest}`);