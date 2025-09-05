const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Trainer Marking Language"],
    answer: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

const quizBox = document.getElementById("quiz-box");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  let q = quizData[currentQuestion];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(opt => `<div class="option" onclick="selectAnswer(this)">${opt}</div>`).join("")}
    <button onclick="nextQuestion()">Next</button>
  `;
}

function selectAnswer(option) {
  let q = quizData[currentQuestion];
  if (option.innerText === q.answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    quizBox.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your Score: ${score} / ${quizData.length}</p>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
}
