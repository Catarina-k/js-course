// Функція для генерації випадкових математичних виразів
function generateMathExpression() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
  
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      case '/':
        correctAnswer = (num1 / num2).toFixed(2); // Ділення з двома знаками після коми
        break;
    }
  
    return { expression: `${num1} ${operator} ${num2}`, correctAnswer: correctAnswer.toString() };
  }
  
  // Функція для запуску гри
  function playMathQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    const totalQuestions = 5;
  
    for (let i = 0; i < totalQuestions; i++) {
      const { expression, correctAnswer } = generateMathExpression();
      let attempts = 3;
      let userAnswer = null;
  
      while (attempts > 0) {
        userAnswer = prompt(`Вирішіть вираз: ${expression}\nСпроби залишились: ${attempts}`);
        
        if (userAnswer === correctAnswer) {
          alert('Правильно!');
          correctAnswers++;
          break;
        } else {
          attempts--;
          if (attempts > 0) {
            alert('Неправильно, спробуйте ще раз.');
          } else {
            alert(`Неправильно. Правильна відповідь: ${correctAnswer}`);
            incorrectAnswers++;
          }
        }
      }
    }
  
    alert(`Гра завершена. Підсумкові результати:\nПравильні відповіді: ${correctAnswers}\nНеправильні відповіді: ${incorrectAnswers}`);
  }
  
  // Запуск гри
  playMathQuiz();