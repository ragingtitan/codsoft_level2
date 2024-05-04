
const options = {
    method: 'GET',
    mode: 'no-cors'
  };

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let questions; // Declare questions globally

async function fetchQuestions() {
    try {
        let url='./symptoms.json';
        const response = await fetch(url,options); // Replace with the actual path to your JSON file
        const data = await response.json();
        questions = data; // Assign data to the global variable
    } catch (error) {
        console.error('Error fetching questions:', error);
        questions = [];
    }
}

async function startQuiz() {
    await fetchQuestions(); // Wait for questions to be fetched
    if (questions.length > 0) {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    } else {
        console.error('No questions available.');
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.state === "correct" || answer.state === "incorrect") {
            button.dataset.state = answer.state;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    
    if (selectedBtn.dataset.state == "correct") {
        console.log("correct answer!")
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
    nextButton.innerHTML="Next";
}

function showScore() {
    resetState();
    // Add your score-based logic here
    if(score>=0 && score <=3)
    {
        questionElement.innerHTML=`<p class="text-red-500 text-center">Your score is ${score}. You seem to know very little about Lionel Messi. Try again.</p>`;
        
    }
    else if(score>3 && score <=6)
    {
        questionElement.innerHTML=`<p class="text-yellow-500 text-center">Your score is ${score}. You have some knowledge about Lionel Messi.</p>`;
        

    }
    else if(score>6 && score<=10)
    {
        questionElement.innerHTML=`<p class="text-green-500 text-center">Your score is ${score}.You have good knowledge about Lionel Messi. You are his true fan!</p>`;
       
    }
    else{

    }
    console.log(score);
    nextButton.innerHTML = 'Restart Quiz';
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
//new

let startQuizBtn = document.querySelector('.loading-btn');
let welcome=document.querySelector('.welcome');
let app=document.querySelector('.app');
startQuizBtn.addEventListener('click',()=>{
    let startQuizWrapper=document.querySelector('.start-btn-wrapper')
    startQuizWrapper.classList.remove('scale');
    setTimeout(()=>{
        app.style.animationName = 'anim1';
        app.style.animationDuration ='0.5s';
        welcome.classList.add('hidden');
        app.classList.remove('hidden');
    },2000)
    
})
function toggleLoading() {
    var btn = document.querySelector('.loading-btn');
    btn.disabled = true;
    btn.textContent = '';
    btn.classList.add('loading');
    setTimeout(function() {
      btn.classList.remove('loading');
    }, 3000);
  }

  function stopQuiz() 
  {
    let ask = confirm('Are you sure you want to stop the quiz?');
    if(ask)
    {
        startQuiz();
        app.classList.add('hidden');
        welcome.classList.remove('hidden');
        startQuizBtn.disabled = false;
        startQuizBtn.textContent = 'Start Quiz';
    }
  }