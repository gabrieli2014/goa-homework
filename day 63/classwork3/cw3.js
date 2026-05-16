
    const quiz = [
      {
        question: "3+4",
        answers: ["5", "7", "10", "9"],
        correct: "7"
      },

      {
        question: "2+2 ",
        answers: ["3", "4", "5", "6"],
        correct: "4"
      },

    

      {
        question: "% ეს რას ნიშნავს",
        answers: [
          "წილადს",
          "პროცენტს",
          "ათწილადს",
          "გამრავლებას"
        ],
        correct: "პროცენტს"
      },
            {
        question: "1/100 რამდენი პროცენტია",
        answers: ["35", "1", "57", "5"],
        correct: "1"
      },

      {
        question: "5:10*15",
        answers: ["10", "7.5", "15.4", "5.7"],
        correct: "7.5"
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = "";

    const question = document.getElementById("question");
    const answers = document.getElementById("answers");
    const nextBtn = document.getElementById("nextBtn");

    function showQuestion(){
      const q = quiz[currentQuestion];

      question.textContent = q.question;

      answers.innerHTML = "";

      q.answers.forEach(answer => {
        const btn = document.createElement("button");

        btn.textContent = answer;

        btn.addEventListener("click", () => {
          selectedAnswer = answer;
        });

        answers.appendChild(btn);
      });
    }

    showQuestion();

    nextBtn.addEventListener("click", () => {

      if(selectedAnswer === quiz[currentQuestion].correct){
        score++;
      }

      selectedAnswer = "";

      currentQuestion++;

      if(currentQuestion < quiz.length){
        showQuestion();
      } else {
        question.textContent = `Quiz დასრულდა! შენი შედეგია ${score}/${quiz.length}`;

        answers.innerHTML = "";

        nextBtn.style.display = "none";
      }
    });
 