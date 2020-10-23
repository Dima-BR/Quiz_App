const quizData =[

    {
        question:'1 Why so JavaScript and Java have similar name?',
        a:'JavaScript is a stripped-down version of Java',
        b:'JavaScript’s syntax is loosely based on Java’s',
        c:'They both originated on the island of Java',
        d:'None of the above',
        correct:'c',
    },
    {
        question:'2 JavaScript is also called client-side JavaScript.',
        a:'Microsoft',
        b:'Navigator',
        c:'LiveWire',
        d:'Native',
        correct:'b',
    },
    {
        question:'3 Which of the following can’t be done with client-side JavaScript?',
        a:'Validating a form',
        b:'Sending a form’s contents by email',
        c:'Storing the form’s contents to a database file on the server',
        d:'None of the above', 
        correct: 'c',
    },
    {
        question:'4 Which of the following are capabilities of functions in JavaScript?',
        a:'Return a value',
        b:'Accept parameters and Return a value',
        c:'Accept parameters',
        d:'None of the above',   
        correct:'c',
    },
    {
        question:'5 Which types of image maps can be used with JavaScript?',
        a:'Server-side image maps',
        b:'Client-side image maps',
        c:'Server-side image maps and Client-side image maps',
        d:'None of the above',   
        correct:'b',
    }
];
const questionEl = document.getElementById('question');
const a_text     = document.getElementById('a_text');
const b_text     = document.getElementById('b_text');
const c_text     = document.getElementById('c_text');
const d_text     = document.getElementById('d_text');
const submitBtn  = document.getElementById('btn');
const quiz       = document.getElementById('quiz');

const answerEls   = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuize();

function loadQuize(){
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQuiz++;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click",() => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuize();
        }else{
            // show the result
            quiz.innerHTML = `<h2> You got ${score} out of ${quizData.length}</h2>
            <button onclick="location.reload()">Reload</button>
            `;
            
        
        }

    }
    

    
});