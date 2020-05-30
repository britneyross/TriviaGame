$(document).ready(function () {

    var trivia = [
        {
            question: "What is the hottest planet in the solar system?",
            choices: ["Mars", "Venus", "Saturn", "Jupiter"],
            answer: "Venus",
            group: "1"
        },
        {
            question: "How many bones are in the human body?",
            choices: ["206", "205", "201", "209"],
            answer: "206",
            group: "2"
        },
        {
            question: "Which ocean is the largest?",
            choices: ["Indian", "Pacific", "Atlantic", "Arctic"],
            answer: "Pacific",
            group: "3"
        },
        {
            question: "What is the longest river in the world?",
            choices: ["Amazon", "Congo", "Nile", "Hudson"],
            answer: "Nile",
            group: "4"
        },
        {
            question: "How many elements are there in the periodic table?",
            choices: ["112", "118", "120", "143"],
            answer: "118",
            group: "5"
        },
        {
            question: "How many time zones are there in the world?",
            choices: ["7", "24", "23", "9"],
            answer: "24",
            group: "6"
        },
        {
            question: "In 2016, a musician won the Nobel Peace Prize for Literature. Who was it?",
            choices: ["Eric Clapton", "Elton John", "Lenny Kravitz", "Bob Dylan"],
            answer: "Bob Dylan",
            group: "7"
        },
        {
            question: "How many people have walked on the moon?",
            choices: ["10", "8", "12", "14"],
            answer: "12",
            group: "8"
        },
        {
            question: "How many soccer players are on the field per team during a match?",
            choices: ["8", "12", "11", "10"],
            answer: "11",
            group: "9"
        }
    ];

    var questionnumber;
    var question;
    var correctanswer;
    var incorrectanswer;
    $("#endGame").hide();

    $("#begingame").on("click", function () {
        $("#begingame").hide();
        $("#endGame").show();
        startGame();
    });

    function startGame() {
        $("#timesup").empty();
        $("#rightanswer").empty();
        $("#wronganswer").empty();
        $("#noanswer").empty();
        questionnumber = 0;
        correctanswer = 0;
        incorrectanswer = 0;
        questions();
        startTimer();
    };

    function questions() {
        for (let i = 0; i < trivia.length; i++) {
            $("#question").append(`<h3> ${trivia[i].question} </h3>`)
            for (let j = 0; j < trivia[i].choices.length; j++) {
                if (trivia[i].choices[j] === trivia[i].answer) {
             
                    $("#question").append(`<input type="radio" class="yes" id=${trivia[i].choices[j]} name=${trivia[i].group} value=${trivia[i].choices[j]}>`)
                    $("#question").append(`<label for=${trivia[i].choices[j]}>${trivia[i].choices[j]}</label><br></br>`)
                } else {
                    $("#question").append(`<input type="radio" class="no" id=${trivia[i].choices[j]} name=${trivia[i].group} value=${trivia[i].choices[j]}>`)
                    $("#question").append(`<label for=${trivia[i].choices[j]}>${trivia[i].choices[j]}</label><br></br>`)

                }
            }
        }
        checkQuestions()
    }


    function checkQuestions() {
        $(".yes").click(function () {
            correctanswer++;
            $(this).css('background-color', 'lightblue');
            console.log(correctanswer)
        });

        $(".no").click(function () {
            incorrectanswer++;
            $(this).css('background-color', 'lightblue');
            console.log(incorrectanswer)
        });
    }

    function startTimer() {
        var counter = 60;
        var timerCountdown = setInterval(function () {
            console.log(counter);
            document.querySelector('#countdown').innerHTML = ("Timer: " + counter + " seconds");
            counter--
            if (counter < 0) {
                alert("Time's up!");
                displayResults();
                clearInterval(timerCountdown);
            }            
        }, 1000);

        $("#endGame").click(function () {
            displayResults();
            clearInterval(timerCountdown);
        });
    }

    function displayResults() {
        var question_div = document.getElementById("question");

        question_div.style.display = "none";
        var countdown_div = document.getElementById("countdown");
        countdown_div.style.display = "none";
        var endgame_div = document.getElementById("endGame");
        endgame_div.style.display = "none";

        var correct_p = document.createElement("p");                 
        var correct_node= document.createTextNode(`Number of correct questions: ${correctanswer}`);       
        correct_p.appendChild(correct_node);                              
        document.getElementById("stats").appendChild(correct_p);

        var incorrect_p = document.createElement("p");                 
        var incorrect_node= document.createTextNode(`Number of incorrect questions: ${incorrectanswer}`);       
        incorrect_p.appendChild(incorrect_node);                              
        document.getElementById("stats").appendChild(incorrect_p);
    }

})


