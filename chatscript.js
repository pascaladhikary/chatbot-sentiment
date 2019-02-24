var sentimood = new Sentimood();

var questionNum = 0; // keep count of question, used for IF condition.
var question = "<h1 class='question'>Hi there! What is your name?</h1>"; // first question

var output = document.getElementById("output"); // store id="output" in output variable
output.innerHTML = question; // ouput first question

function bot() {
    var input = document.getElementById("input").value;
    var positivity = sentimood.positivity(input);

    console.log(input);
    if(questionNum<3){
        document.getElementById("responses").innerHTML += "<h1>" + question + "</h1>"; //Question
    }
    else{
        document.getElementById("responses").innerHTML += document.getElementById("output").innerHTML;
        document.getElementById("output").innerHTML = "";
    }
    document.getElementById("responses").innerHTML += "<h1 class='userInput' id='in'>" + input + "</h1>"; //RESPONSE
    document.getElementById("input").value = "";

    if (questionNum == 0) {
        output.innerHTML = "<h1 class='question'>Hello " + input + ". Nice to meet you!</h1>"; // output response
        document.getElementById("input").value = ""; // clear text box
        question = "<h1 class='question'>How are you feeling today?</h1>"; // load next question
        setTimeout(timedQuestion, 2000); // output next question after 2sec delay

    } else if (questionNum == 1) {
        //output.innerHTML = "<h1 class='question'>We can direct you to an expert.</h1>";
        document.getElementById("input").value = "";
        if(positivity>0) {
            question = "<h1 class='question'>That's really good! I'm glad you're feeling well. Does your mood require a professional?</h1>";
        }
        else{
            question = "<h1 class='question'>That must be hard. Does your mood require a professional?</h1>";
        }
        setTimeout(timedQuestion, 2000);

    } else if (questionNum == 2) {
        document.getElementById("input").value = "";
        if (input.includes("Yes")) {
            output.innerHTML = "<h1 class='question'>Please call this number for more help: 555-555-000<br>How else can I help?</h1>";

        } else {
            output.innerHTML =
                "<h1 class='question'>That's great! Go check out our other pages with mood surveys and positive exercises!<br>How else can I help?</h1>";
        }
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
    if (e.which == 13) {
        bot(); // run bot function when enter key pressed
        questionNum++; // increase questionNum count by 1
    }
});
