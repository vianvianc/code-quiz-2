const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

let currentQuestion = 0;
let score = 0;

let questions = [
  {
    question: "What is 2+2?",
    answers: [
      { option: "1", answer: false },
      { option: "2", answer: false },
      { option: "3", answer: false },
      { option: "4", answer: true },
    ],
  },
  {
    question: "What color is the sky?",
    answers: [
      { option: "Red", answer: false },
      { option: "Blue", answer: true },
      { option: "Green", answer: false },
      { option: "Yellow", answer: false },
    ],
  },
  {
    question: "How many branches of Government?",
    answers: [
      { option: "1", answer: false },
      { option: "2", answer: false },
      { option: "3", answer: false },
      { option: "4", answer: true },
    ],
  },
  {
    question: "Cost of new MacBookPro with best options?",
    answers: [
      { option: "$1099", answer: false },
      { option: "$1699", answer: false },
      { option: "$2699", answer: true },
      { option: "$3499", answer: false },
    ],
  },
];
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);
function beginQuiz() {
  currentQuestion = 0;
  totalScore.innerHTML = questions.length;
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  prevBtn.classList.add("hide");
}

beginQuiz();
function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove("hide");
  nextBtn.classList.remove("hide");
  submitBtn.classList.remove("hide");
  trueBtn.classList.remove("hide");
  falseBtn.classList.remove("hide");
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}
function next() {
  currentQuestion++;
  if (currentQuestion >= 2) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  prevBtn.classList.remove("hide");
}
function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    nextBtn.classList.remove("hide");
    prevBtn.classList.add("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  nextBtn.classList.remove("hide");
}
function submit() {
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
  trueBtn.classList.add("hide");
  falseBtn.classList.add("hide");
  questionText.innerHTML = "Congratulations on submitting the Quiz!";
}
