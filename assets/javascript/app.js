$(document).ready(function () {

    var trivia = [
        {
            question: "What is the hottest planet in the solar system?",
            choices: ["Mars", "Venus", "Saturn", "Jupiter"],
            answer: "Venus",
        },
        {
            question: "2",
            choices: ["Mars", "Venus", "Saturn", "Jupiter"],
            answer: "Mars",
        },
        {
            question: "3",
            choices: ["Mars", "Venus", "Saturn", "Jupiter"],
            answer: "Saturn",
        },
        {
            question: "4",
            choices: ["Mars", "Venus", "Saturn", "Jupiter"],
            answer: "Jupiter",
        }
    ]

    var questionnumber;
    var question;
    var timer;
    var correctanswer;
    var incorrectanswer;
    var noanswer;
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
        for (let i=0; i < trivia.length; i++  ){
            $("#question").append(`<h3> ${trivia[i].question} </h3>`)
            for (let j =0; j < trivia[i].choices.length; j++){
                if (trivia[i].choices[j] === trivia[i].answer){
                    $("#question").append(`<button class="yes"> ${trivia[i].choices[j]} </button>`)
                    
                } else {
                    $("#question").append(`<button class="no"> ${trivia[i].choices[j]} </button>`)
                    
                }


            }
           
        }
        checkQuestions()

    }


function checkQuestions(){
    $( ".yes" ).click(function() {
        correctanswer++
        console.log(correctanswer)
      });

      $( ".no" ).click(function() {
        incorrectanswer++
        console.log(incorrectanswer)
      });

}

})

