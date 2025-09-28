document.querySelector(".btn-outline-info").addEventListener("click",gradeQuiz);

var score = 0;
var attempts = localStorage.getItem("total_attempts");

displayQ1Options();

function displayQ1Options(){
    
    let q1Choices = ["Twilight", "Dracula", "Nosferatu"];
    q1Choices = _.shuffle(q1Choices);

    for (let i=0; i < q1Choices.length; i++){
        document.querySelector("#q1Choices").innerHTML += ` <input type="radio" name="q1" id="${q1Choices[i]}"
        value="${q1Choices[i]}"> <label for="${q1Choices[i]}"> ${q1Choices[i]}</label>`;
    }


}

function isFormValid(){
    let isValid = true;

    let userAnswer1 = document.querySelector("input[name=q1]:checked");

    let userAnswer4 = document.querySelector("#q4").value;

    let userAnswer3 = document.querySelector("#q3").value.toLowerCase();

    let userAnswer5 = document.querySelector("#q5").value;

    if (!userAnswer1){
        isValid = false;
   
    } else if (userAnswer4 == "" || userAnswer5 == "" || userAnswer3 == "" ){
        isValid = false;
    } else if (!document.querySelector("#hungerGames").checked && !document.querySelector("#divergent").checked && 
        !document.querySelector("#mazeRunner").checked && !document.querySelector("#pride").checked){
        isValid = false;
    }
    return isValid;


}

function rightAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
    document.querySelector(`#q${index}Feedback`).className = "bg-success text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
    score += 20;
}

function wrongAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect!";
    document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='Checkmark'>";
}

function gradeQuiz(){
    document.querySelector("#validation").innerHTML = "";
    if (!isFormValid()){
        document.querySelector("#validation").innerHTML = "Answer all the questions";
        return;
    }

    score = 0;

    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;

    let userAnswer4 = document.querySelector("#q4").value;

    let userAnswer3 = document.querySelector("#q3").value.toLowerCase();

    let userAnswer5 = document.querySelector("#q5").value;

    if (userAnswer1 == "Twilight"){
        rightAnswer(1);
    } else {
        wrongAnswer(1);
    }

    if (document.querySelector("#hungerGames").checked && document.querySelector("#divergent").checked && 
        !document.querySelector("#mazeRunner").checked && !document.querySelector("#pride").checked){
        rightAnswer(2);
    } else {
        wrongAnswer(2);
    }

    
    if (userAnswer3 == "woody"){
        rightAnswer(3);
    } else {
        wrongAnswer(3);
    }

    if (userAnswer4 == 4){
        rightAnswer(4);
    } else {
        wrongAnswer(4);
    }

    if (userAnswer5 == "titanic"){
        rightAnswer(5);
    } else {
        wrongAnswer(5);
    }
    if (score > 80){
        document.querySelector("#totalScore").innerHTML = `CONGRATS! Your Total Score is: ${score}`;
    } else{
        document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
    }
    document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
    localStorage.setItem("total_attempts", attempts);



}
