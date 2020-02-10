// javascript quiz code inspiration courtesy
// of https://www.sitepoint.com/simple-javascript-quiz/
// and https://simplestepscode.com/javascript-quiz-tutorial

//creating a variable to store HTML output for each question
(function(){
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // creating variable to store possible answers
        const answers = [];
        for(letter in currentQuestion.answers){

          // creating multiple choice format using 'radio' questions
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // I want to tell the user how many questions they got correct at the end
    // so everytime they get a question correct, it will add a point to
    // this variable below
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct, add one to numCorrect and color the answer green
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank, color the answer red
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // after user hits submit, show how many they got correct out of 10
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} correct!`;
  }

// below are the quiz questions
// also, creating constant variables for quiz elements
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. What is the only bird with nostrils at the end of its beak?",
      answers: {
        a: "Kiwi",
        b: "Platypus",
        c: "Yellow-Bellied Sapsucker",
        d: "Emu"
      },
      correctAnswer: "a"
    },
    {
      question: "2. Which bird lays the smallest eggs in the world?",
      answers: {
        a: "Woodpecker",
        b: "Hummingbird",
        c: "Goldcrest",
        d: "Finch"
      },
      correctAnswer: "b"
    },
    {
      question: "3. Which type of penguin is the fastest swimmer?",
      answers: {
        a: "Emperor",
        b: "Gentoo",
        c: "Chinstrap",
        d: "Adelie"
      },
      correctAnswer: "b"
    },
    {
    question: "4. What is the only bird that lays its egg in the middle of winter?",
    answers: {
      a: "Emperor Penguin",
      b: "Ostrich",
      c: "Raven",
      d: "Red-tailed Hawk"
    },
    correctAnswer: "a"
    },
    {
    question: "5. A parliament is a group of",
    answers: {
      a: "Peacocks",
      b: "Emus",
      c: "Owls",
      d: "Bald Eagles"
    },
    correctAnswer: "c"
    },
    {
    question: "6. Which bird has the longest wingspan?",
    answers: {
      a: "Ostrich",
      b: "Emu",
      c: "Wandering Albatross",
      d: "Red-tailed Hawk"
    },
    correctAnswer: "c"
    },
    {
    question: "7. Which bird has the longest migration?",
    answers: {
      a: "Argentine Lake Duck",
      b: "Bar-headed Goose",
      c: "Arctic Tern",
      d: "Griffon Vulture"
    },
    correctAnswer: "c"
    },
    {
    question: "8. Which bird of paradise builds a house to attract a female?",
    answers: {
      a: "Riflebird",
      b: "Astrapia",
      c: "Parotia",
      d: "Bowerbird"
    },
    correctAnswer: "d"
    },
    {
    question: "9. A group of flamingos is called a",
    answers: {
      a: "Party",
      b: "Parade",
      c: "Glitz",
      d: "Flamboyance"
    },
    correctAnswer: "d"
    },
    {
    question: "10. Someone who suffers from 'anatidaephobia' believes what?",
    answers: {
      a: "They will catch a disease from a pigeon.",
      b: "A duck or goose is constantly watching them.",
      c: "They will die in a violent peacock attack.",
      d: "Birds don't exist and are merely government drones."
    },
    correctAnswer: "b"
    },
  ];
  // bird facts courtesy of https://www.factretriever.com/bird-facts

    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();
