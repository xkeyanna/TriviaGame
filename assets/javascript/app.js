

/* Pseudo Code 
 
Click to Start
Timer begins at 60 seconds and countdown
Player goes through all 10 questions
player can only guess one answer per question
Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
	ques: "When should you book your flight tickets for the best price?",
	ans: ["ASAP", "The day before", "6 months ahead", "2 weeks ahead"],
	name: "when",
	correct: "ASAP",
	divClass: ".when"
},
{
	ques: "How early can you check in for your flight, typically?",
	ans: ["48 hours", "24 hours", "12 hours", "72 hours"],
	name: "checkIn",
	correct: "24 hours",
	divClass: ".checkIn"
},
{
	ques: "How many lbs is your cabin-pet allowed to weigh?",
	ans: ["10 lbs", "15 lbs", "20 lbs", "30 lbs"],
	name: "pounds",
	correct: "20 lbs",
	divClass: ".pounds"
},
{
	ques: "When did airplane travel go commercial?",
	ans: ["1912", "1895", "1942", "1914"],
	name: "commercial",
	correct: "1914",
	divClass: ".commercial"
},
{
	ques: "Who was the first female pilot?",
	ans: ["Amelia Warner", "Amelia Campbell", "Amelia Earhart", "Amelia Hall"],
	name: "firstFemale",
	correct: "Amelia Earhart",
	divClass: ".firstFemale"
},
{
	ques: "Who created airplanes that could fly?",
	ans: ["The Wright Brothers", "Brian McKnight", "Tinker Hatfield", "The Right Brothers"],
	name: "whoCreated",
	correct: "writeBrothers",
	divClass: ".whoCreated"
},
{
	ques: "How many continents are there?",
	ans: ["4", "12", "127", "7"],
	name: "continents",
	correct: "7",
	divClass: ".continents"
},
{
	ques: "Which airline is the largest in the world?",
	ans: ["Delta Airlines", "American Airlines", "US Airways", "British Airways"],
	name: "largestAirline",
	correct: "American Airlines",
	divClass: ".largestAirline"
},
{
	ques: "When is the cheapest time to travel?",
	ans: ["Early December", "Mid-June", "Early April", "Late February"],
	name: "cheapMonth",
	correct: "Early December",
	divClass: ".cheapMonth"
},
{
	ques: "Which country has the highest passenger tax?",
	ans: ["Mexico", "USA", "UK", "China"],
	name: "tax",
	correct: "UK",
	divClass: ".tax"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
	$(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
	$('.container').fadeOut(500);
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;

	// loop through correctArray & radioName to match html elements & answers
	for (var i = 0; i < 10; i++) {

		if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

			correctAnswers++;
			console.log("this is correct! number:" + i)
		} else {
			wrongAnswers++;
			console.log("this is wrong! number:" + i)
		};
	}
	$('#correctTimesUp').append(correctAnswers);
	// display wrongAnswers
	$('#wrongTimesUp').append(wrongAnswers);
	$('#timesUp').fadeIn(1000).show();

	// alert("Times Up!");
	clearInterval(timer);
	return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

	correctAnswers++;
} else {
	wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); 
// end
