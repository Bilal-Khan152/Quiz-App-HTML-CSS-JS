 const quizDB = [
     {
         question: " Q1 : What is the full form of HTML ?",
         a: "Hello To My Land ",
         b: "Hey Text Markup Language",
         c: "Hyper Text Makeup Language ",
         d: "Hyper Text Markup Language",
         ans: "ans4"
     },
     {

         question: " Q2 : What is the full form of CSS ?",
         a: "Cascading Style Sheet ",
         b: "Cascading Style Sheep",
         c: "Cartoon Style Sheet ",
        d: "Cascading Super Sheet",
         ans: "ans1"
     },
     {
         question: " Q3 : What is the full form of HTTP ?",
         a: "Hypertext Transfer Product ",
         b: "Hypertext Test Prtocol",
         c: "Hey Transfer Product ",
         d: "Hyper Text Transfer Prtocol",
         ans: "ans4"
     },
     {

         question: " Q4 : What is the full form JS ?",
         a: "JavaScript ",
         b: "JustScript",
         c: "JohnShoes ",
         d: "JavaSuper",
         ans: "ans1"

    }
 ];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const ShowScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

function loadQuestion() {
    let questionList = quizDB[questionCount];  // quizDB[0]
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;


}
loadQuestion();

const getcheckedAnswer = () => {
    let answer;
    answers.forEach((currentAnsEle) => {
        if(currentAnsEle.checked){
            answer = currentAnsEle.id
            console.log(answer)
        }
    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((currentAnsEle) => currentAnsEle.checked = false)
};
submit.addEventListener("click", () => {
    const CheckedAnswer = getcheckedAnswer();
    //console.log(CheckedAnswer);
 
     if(CheckedAnswer === quizDB[questionCount].ans){
        score++
      //  console.log(score)
     }
    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        ShowScore.innerHTML = `
         <h3>You Socred ${score} / ${quizDB.length}</h3>
         <button class="btn" onclick="location.reload()">Play Again</button>         
        `;
        ShowScore.classList.remove("scoreArea")
    }
});
