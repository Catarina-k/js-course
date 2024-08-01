// Task-1
document.querySelector("#check").onclick = function () {
  let numberInput = document.getElementById("num").value;
  checkNumber(numberInput);
};
function checkNumber(num) {
  let nbrOutput = document.querySelector("#nbrOutput");
  if (num % 2 === 0) {
    nbrOutput.innerHTML = `число ${num} - парне`;
  } else {
    nbrOutput.innerHTML = `число ${num} - непарне`;
  }
}

// Task-2
let data = new Date().toLocaleDateString("en-us", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
document.querySelector("#date").innerHTML = `Сьогодні ${data}`;

let dayNum = new Date().getDay()
let day = ""

switch (dayNum) {
  case 0: 
     day = "Sunday"
    break;
  case 1: 
  day = "Monday"
    break;
  case 2: 
  day = "Tuesday"
    break;
  case 3: 
  day = "Wednesday"
    break;
    case 4: 
  day = "Thursday"
    break;
    case 5: 
  day = "Friday"
    break;
    case 6: 
  day = "Saturday"
    break;

  default:
    break;
}

document.querySelector('#day').innerHTML = `День тижня - ${day}`


// Task-3

document.querySelector("#checkYear").onclick = function () {
    let yearInput = document.getElementById("year").value;
    isLeapYear(yearInput)
  };

  function isLeapYear(year) {
    let yearOutput = document.querySelector("#yearOutput");
    if ((year%4==0 && year%100!=0) || year%400==0 ) {
        yearOutput.innerHTML = `рік ${year} - високосний`;
    } else {
        yearOutput.innerHTML = `рік ${year} - невисокосний`;
    }
  }