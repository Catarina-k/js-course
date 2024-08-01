


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
