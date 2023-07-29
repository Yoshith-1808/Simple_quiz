const questions = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: ["Earth", "Mars", "Mercury", "Venus"],
        correctAnswer: 2
    },
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const questionText = document.getElementById("question-text");
        const answerButtons = document.getElementsByClassName("answers")[0].getElementsByTagName("button");
        
        questionText.textContent = questions[currentQuestion].question;
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].textContent = questions[currentQuestion].answers[i];
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }
    document.getElementById("score").textContent = `Score: ${score}`;
    currentQuestion++;
    loadQuestion();
}

function endQuiz() {
    const quizContainer = document.getElementsByClassName("quiz-container")[0];
    quizContainer.innerHTML = `<h1>Quiz Completed!</h1><p>Your final score is: ${score}</p>`;
}

loadQuestion();
