
const question = document.querySelector('.question');
const options = document.querySelectorAll('.option');
const feedback = document.querySelector('.feedback');
const feedbackContainer = document.querySelector('.feedback-container');
const nextBtn = document.querySelector('.next-btn');
let currentQuestion = 0;
let score = 0;
let questions = [
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    answer: 'Canberra'
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Dollar', 'Peso', 'Euro'],
    answer: 'Yen'
  },
  {
    question: 'What is the highest mountain in the world?',
    options: ['Mount Kilimanjaro', 'Mount Everest', 'Mount McKinley', 'Mount Vinson'],
    answer: 'Mount Everest'
  },
  {
    question: 'Who wrote the book "To Kill a Mockingbird"?',
    options: ['J.D. Salinger', 'Harper Lee', 'F. Scott Fitzgerald', 'Ernest Hemingway'],
    answer: 'Harper Lee'
  },
  {
    question: 'What is the largest desert in the world?',
    options: ['Sahara', 'Arabian', 'Gobi', 'Antarctic'],
    answer: 'Antarctic'
  },
  {
    question: 'Which country is home to the Great Barrier Reef?',
    options: ['Brazil', 'Australia', 'Indonesia', 'Malaysia'],
    answer: 'Australia'
  },
  {
    question: 'What is the largest country in the world by land area?',
    options: ['China', 'Canada', 'Russia', 'United States'],
    answer: 'Russia'
  },
  {
    question: 'Which city is known as the "Windy City"?',
    options: ['Chicago', 'New York', 'Los Angeles', 'Dallas'],
    answer: 'Chicago'
  },
  {
    question: 'What is the name of the longest river in Africa?',
    options: ['Nile', 'Congo', 'Zambezi', 'Orange'],
    answer: 'Nile'
  },
  {
    question: 'Which planet in our solar system is known as the "Red Planet"?',
    options: ['Jupiter', 'Mars', 'Saturn', 'Venus'],
    answer: 'Mars'
  }
];

function displayQuestion() {
  let q = questions[currentQuestion];
  question.innerHTML = q.question;
  for (let i = 0; i < options.length; i++) {
    options[i].innerHTML = q.options[i];
    options[i].addEventListener('click', checkAnswer);
  }
}

function checkAnswer(e) {
  let selectedOption = e.target.innerHTML;
  let correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
    feedback.innerHTML = 'Correct!';
    feedback.style.color = 'green';
  } else {
    feedback.innerHTML = `Sorry, the correct answer was "${correctAnswer}".`;
    feedback.style.color = 'red';
  }
  feedbackContainer.style.display = 'block';
  nextBtn.style.display = 'block';
  for (let i = 0; i < options.length; i++) {
    options[i].removeEventListener('click', checkAnswer);
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endQuiz();
    } else {
    displayQuestion();
    feedbackContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    }
    }
    
    function endQuiz() {
        question.innerHTML = `You have completed the quiz!<br>Your score is ${score}/${questions.length}.`;
        for (let i = 0; i < options.length; i++) {
          options[i].style.display = 'none';
        }
        feedbackContainer.style.display = 'none';
        nextBtn.style.display = 'none';
      }
    
    displayQuestion();
    nextBtn.addEventListener('click', nextQuestion);