document.querySelector("#check").onclick = function () {
    let weightInput = document.getElementById("weight").value;
    let heightInput = document.getElementById("height").value/100;
    countImt(weightInput, heightInput)
};

function countImt (weight, height) {
   let imt = weight / Math.pow(height, 2)
   return resultOutput(Number(imt.toFixed(1)))
}

function resultOutput (result){
    let outputImt = document.getElementById("ImtOutput")
    if (result < 18.5) {
        return outputImt.innerHTML = `ІМТ = ${result}, Недостатня вага` 
    }
    else if (result >= 18.5 && result <24.9 ) {
        return outputImt.innerHTML = `ІМТ = ${result}, Нормальна вага` 
    }
    else if (result >=25 && result < 29.9) {
        return outputImt.innerHTML = `ІМТ = ${result}, Надмірна вага` 
    }
    else if (result >= 30) {
        return outputImt.innerHTML = `ІМТ = ${result}, Ожиріння` 
    }
}


// Обчислення площ і периметрів
// Функція для обчислення площі та периметру кола
function calculateCircle(radius) {
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);
    const perimeter = 2 * pi * radius;
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

// Функція для обчислення площі та периметру прямокутника
function calculateRectangle(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

// Функція для обчислення площі та периметру трикутника
function calculateTriangle(a, b, c) {
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    const perimeter = a + b + c;
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

// Запит користувача для вибору фігури
const shape = prompt("Виберіть фігуру (коло, прямокутник, трикутник):").toLowerCase();

let result;
switch (shape) {
    case 'коло':
        const radius = parseFloat(prompt("Введіть радіус кола:"));
        result = calculateCircle(radius);
        break;
    case 'прямокутник':
        const length = parseFloat(prompt("Введіть довжину прямокутника:"));
        const width = parseFloat(prompt("Введіть ширину прямокутника:"));
        result = calculateRectangle(length, width);
        break;
    case 'трикутник':
        const sideA = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
        const sideB = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
        const sideC = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
        result = calculateTriangle(sideA, sideB, sideC);
        break;
    default:
        alert("Невірний тип фігури.");
        break;
}

if (result) {
    alert(`Площа: ${result.area}\nПериметр: ${result.perimeter}`);
}