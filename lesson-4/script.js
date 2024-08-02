// Функція для отримання вибору користувача
function getUserChoice() {
    let userInput = prompt("Введіть ваш вибір (камінь, ножиці, папір) або 'вихід' для завершення гри:").toLowerCase();
    
    // Перевірка валідності введених даних
    while (userInput !== 'камінь' && userInput !== 'ножиці' && userInput !== 'папір' && userInput !== 'вихід') {
      userInput = prompt("Невірний вибір. Будь ласка, введіть камінь, ножиці, папір або 'вихід':").toLowerCase();
    }
    
    return userInput;
  }
  
  // Функція для генерації вибору комп'ютера
  function getComputerChoice() {
    const choices = ['камінь', 'ножиці', 'папір'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Функція для визначення переможця
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'нічия';
    }
    
    if (
      (userChoice === 'камінь' && computerChoice === 'ножиці') ||
      (userChoice === 'ножиці' && computerChoice === 'папір') ||
      (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
      return 'користувач';
    } else {
      return "комп`ютер";
    }
  }
  
  // Функція для запуску гри
  function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    
    while (true) {
      const userChoice = getUserChoice();
      
      if (userChoice === 'вихід') {
        break;
      }
      
      const computerChoice = getComputerChoice();
      const winner = determineWinner(userChoice, computerChoice);
      
      if (winner === 'користувач') {
        userScore++;
      } else if (winner === "комп`ютер") {
        computerScore++;
      }
      
      roundsPlayed++;
      
      alert(`Ви вибрали: ${userChoice}\nКомп'ютер вибрав: ${computerChoice}\n${winner === 'нічия' ? 'Це нічия!' : winner === 'користувач' ? 'Ви виграли!' : 'Ви програли!'}`);
      alert(`Рахунок після ${roundsPlayed} раундів:\nВи: ${userScore}\nКомп'ютер: ${computerScore}`);
    }
    
    alert(`Гра завершена. Кінцевий рахунок після ${roundsPlayed} раундів:\nВи: ${userScore}\nКомп'ютер: ${computerScore}`);
  }
  
  // Запуск гри
  playGame();