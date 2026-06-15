const quizData = [
  {
    question: "Siapa yang paling lucu? 😆",
    answers: ["Aku", "Kamu", "Kita berdua ❤️", "Ga ada"],
    correct: 2,
  },

  {
    question: "Apa yang paling penting? ❤️",
    answers: ["Uang", "Mobil", "Kamu", "Game"],
    correct: 2,
  },

  {
    question: "Kalau jalan-jalan maunya ke mana? 🌹",
    answers: ["Pantai", "Gunung", "Mall", "Yang penting sama kamu ❤️"],
    correct: 3,
  },

  {
    question: "Siapa yang paling spesial? 💕",
    answers: ["Aku", "Kamu ❤️", "Teman", "Tetangga"],
    correct: 1,
  },

  {
    question: "Apa yang bikin bahagia? 😊",
    answers: ["Tidur", "Makan", "Kamu ❤️", "Nonton"],
    correct: 2,
  },
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");

const answers = document.getElementById("answers");

function loadQuestion() {
  const q = quizData[currentQuestion];

  question.innerHTML = q.question;

  answers.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.classList.add("answer-btn");

    button.innerHTML = answer;

    button.onclick = () => {
      if (index === q.correct) {
        score++;
      }

      currentQuestion++;

      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    };

    answers.appendChild(button);
  });
}

function showResult() {
  document.querySelector(".quiz-box").innerHTML = `

    <h2>
    Kamu Mendapatkan
    ${score}/${quizData.length}
    ❤️
    </h2>

    <p>
    Terima kasih sudah bermain 💕
    </p>

    <br>

    <button
    onclick="
    window.location.href=
    'surprise.html'
    ">
    Buka Surprise 🎁
    </button>

    `;
}

loadQuestion();
