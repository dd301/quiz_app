var getQuiz = function () {
    var qIndex = 0;
    var questions = [
        {
            question: "What is the highest mountain in the world?",
            answer: "Everest"
        },
        {
            question: "What is the highest mountain in Scotland?",
            answer: "Ben Nevis"
        },
        {
            question: "How many munros are in Scotland?",
            answer: "284"
        }
    ];

    return {
        quizMe : function () {
            return questions[qIndex].question;
        },

        showMe : function () {
            return questions[qIndex].answer;
        },

        next : function () {
            qIndex = qIndex + 1;
            return "Ok";
        }
    };
};

var quiz = getQuiz();