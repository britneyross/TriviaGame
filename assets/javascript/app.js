$(document).ready(function () {

    var trivia = [
        {
            question: "What is the hottest planet in the solar system?",
            choices: ["Mars", "Venus", "Saturn", "Jupiter"],
            answer: "Venus",
        },
        {
            question: "How many bones are in the human body?",
            choices: ["206", "205", "201", "209"],
            answer: "206",
        },
        {
            question: "Which ocean is the largest?",
            choices: ["Indian", "Pacific", "Atlantic", "Arctic"],
            answer: "Pacific",
        },
        {
            question: "What is the lognest river in the world?",
            choices: ["Amazon", "Congo", "Nile", "Hudson"],
            answer: "Nile",
        },
        {
            question: "How many elements are there in the periodic table?",
            choices: ["112", "118", "120", "143"],
            answer: "118",
        },
        {
            question: "How many time zones are there in the world?",
            choices: ["7", "24", "23", "9"],
            answer: "24",
        },
        {
            question: "In 2016, a musician won the Nobel Peace Prize for Literature. Who was it?",
            choices: ["Eric Clapton", "Elton John", "Lenny Kravitz", "Bob Dylan"],
            answer: "Bob Dylan",
        },
        {
            question: "How many people have walked on the moon?",
            choices: ["10", "8", "12", "14"],
            answer: "12",
        },
        {
            question: "How many soccer players are on the field per team during a match?",
            choices: ["8", "12", "11", "10"],
            answer: "11",
        }
    ];

    var questionnumber;
    var question;
    var timeLeft;
    var correctanswer;
    var incorrectanswer;
    var noanswer;
    var seconds;
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
    };

    function questions() {
        for (let i = 0; i < trivia.length; i++) {
            $("#question").append(`<h3> ${trivia[i].question} </h3>`)
            for (let j = 0; j < trivia[i].choices.length; j++) {
                if (trivia[i].choices[j] === trivia[i].answer) {
                    $("#question").append(`<button class="yes"> ${trivia[i].choices[j]} </button>`)

                } else {
                    $("#question").append(`<button class="no"> ${trivia[i].choices[j]} </button>`)

                }


            }

        }
        checkQuestions()

    }


    function checkQuestions() {
        $(".yes").click(function () {
            correctanswer++;
            console.log(correctanswer)
        });

        $(".no").click(function () {
            incorrectanswer++;
            console.log(incorrectanswer)
        });

    }

    function timeLeft(){
        seconds = 20;
        $("#countdown").html("<h2>Time Remaining: " + seconds + "<h2>");
        if(seconds < 1){
            answers = true;
            time = setInterval (count, 1000);
        }
    };

    function count(){
        seconds --; 

    }
})



    /*
    //  Start on click.
    $("#beginGame").on("click", function () {
        //  Set the button alert's timeout to run ten seconds after the function's called.
        delayButtonAlert = setTimeout(function () {
            alert("Time's up!");
        }, 10000);
    });
});


    function timeUp() {
        // in the element with an id of time-left add an h2 saying Time's Up!
        // console log done
        console.log("done");
        $("#time-left").append("<h2>Time's Up!</h2>");
        console.log("time is up");
    })*/

