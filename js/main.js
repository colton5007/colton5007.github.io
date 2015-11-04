var cur = 1;
var score = 0;
var lastTrials = false;

function Choice(correct, words) {
	this.correct = correct;
	this.words = words;
}

function createSoundFile(num, element) {
	var audio = document.createElement('audio');
	var source = document.createElement('source');
	source.setAttribute('src', 'audio/question' + num + '.mp3');
	source.setAttribute('type', 'audio/mpeg');
	audio.setAttribute('autoplay', '');
	audio.appendChild(source);
	element.appendChild(audio);
}

function Question(words, choices) {
	this.words = words;
	this.choices = choices;
	this.count = choices.length;
}

var questions = [
new Question("Who is the shrew in the story?", [new Choice(false, "Bianca"), new Choice(true, "Katherine")]),
new Question("Is the statement: Katherine must be married before Bianca, true or false?", [new Choice(true, "True"), new Choice(false, "False")]),
new Question("Does the story take place in Mantua?", [new Choice(false, "Yes"), new Choice(true, "No")]),
new Question("Who is Bianca's father?", [new Choice(false, "Shakespeare"), new Choice(false, "Petruchio"), new Choice(true, "Baptista"), new Choice(false, "Lucentio")]),
new Question("Does Petruchio originally agree to marry Katherine for money?", [new Choice(true, "Yes"), new Choice(false, "no")]),
new Question("Who is late to Katherine and Petruchio’s wedding?", [new Choice(true, "Petruchio"), new Choice(false, "Katherine"), new Choice(false, "Baptista"), new Choice(false, "The Priest")]),
new Question("What does Lucentio disgues himself as to get closer to Bianca?", [new Choice(true, "A teacher"), new Choice(false, "A priest")]),
new Question("Why does Petruchio prevent Katherine from eating after their marriage?", [new Choice(false, "She is overweight and needs to eat less"), new Choice(false, "The food is poisoned"), new Choice(true, "The food is not good enough for her"), new Choice(false, "Petruchio does what he wants without any reason")]),
new Question("Petruchio convinces Katherine to say what about the sun?", [new Choice(false, "That it is purple"), new Choice(false, "That it is the source of all evil"), new Choice(true, "That it is the moon"), new Choice(false, "That the earth revolves around")]),
new Question("Lucentio’s primary servant is named:", [new Choice(false, "Carlo"), new Choice(true, "Tranio"), new Choice(false, "Baptista"), new Choice(false, "Shakespeare")]),
new Question("Which of these were not a suitor of Bianca?", [new Choice(false, "Germio"), new Choice(false, "Hortensio"), new Choice(true, "Biondella"), new Choice(false, "Lucentio")]),
new Question("Whose wife is the first to answer the summons from her spouse at the end of the play?", [new Choice(false, "Hortensio’s"), new Choice(false, "Lucentio’s"), new Choice(false, "Baptista’s"), new Choice(true, "Petruchio’s")])
];

function displayChoice1(choice) {
	var button1 = document.getElementById("button1");
	button1.textContent = choice.words;
}

function displayChoice2(choice) {
	var button2 = document.getElementById("button2");
	button2.textContent = choice.words;
}

function displayChoice3(choice) {
    var button3 = document.getElementById("button3");
    button3.textContent = choice.words;
}

function displayChoice4(choice) {
    var button4 = document.getElementById("button4");
    button4.textContent = choice.words;
}

function setQuestionStyle(count) {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    button1.style.visibility='visible';
    button2.style.visibility='visible';
    if(count==2) {
        button3.style.visibility='hidden';
        button4.style.visibility='hidden';
        button1.top='60%';
        button2.top='60%';
    } else {
        button3.style.visibility='visible';
        button4.style.visibility='visible';
        button1.top='50%';
        button2.top='50%';
    }
}

function displayQuestion() {
	if (questions.length < cur) {
		gameOver();
		return;
	} 
	var question = questions[cur - 1];
	var questionDiv = document.getElementById("info");
	document.getElementById("questionNum").textContent = cur;
	questionDiv.innerHTML = question.words;
	setQuestionStyle(question.count);
	if(question.count==2) {
	    displayChoice1(question.choices[0]);
	    displayChoice2(question.choices[1]);
	} else {
	    displayChoice1(question.choices[0]);
	    displayChoice2(question.choices[1]);
	    displayChoice3(question.choices[2]);
	    displayChoice4(question.choices[3]);
	}
}

function checkQuestion(buttonId) {
	var question = questions[cur - 1];
	document.getElementById('info').innerHTML='';
	cur++;
	if (question.choices[buttonId-1].correct) {
		score++;
		displayQuestion(cur);
	} else {
		displayQuestion(cur);
	}
}

function gameOver(num) {
	document.getElementById('info').style.visibility='hidden';
	document.getElementById('questionNum').style.visibility='hidden';
	document.getElementById('button1').style.visibility='hidden';
	document.getElementById('button2').style.visibility='hidden';
	document.getElementById('button3').style.visibility='hidden';
	document.getElementById('button4').style.visibility='hidden';
	var end = document.getElementById('end');
	end.style.visibility='visible';
	var restartButton = document.getElementById('again');
	//end.textContent=deathMsgs[num-1] + '\n You completed ' + (score-1) + ' Labor' + labor + ' of Hercules';
	//TODO ADD GAME OVER SCREEN INCLUDING CHARACTER ALIGNMENT
	end.textContent="You scored a : "+Math.round(score/12*100) + "% on the Taming of the Shrew Quiz, retry for a better score!";
	end.appendChild(restartButton);
}

function win() {
	/*document.getElementById('info').style.visibility='hidden';
	document.getElementById('questionNum').style.visibility='hidden';
	document.getElementById('button1').style.visibility='hidden';
	document.getElementById('button2').style.visibility='hidden';
	var end = document.getElementById('end');
	end.style.visibility='visible';
	var restartButton = document.getElementById('again');
	end.textContent='You have completed the 12 Labors of Hercules';
	end.appendChild(restartButton);*/
	gameOver(cur);
}

function transition() {
	var trans = document.getElementById('transition');
	createSoundFile('Transition', trans);
	trans.style.visibility='visible';
	document.getElementById('info').style.visibility='hidden';
	document.getElementById('questionNum').style.visibility='hidden';
	document.getElementById('button1').style.visibility='hidden';
	document.getElementById('button2').style.visibility='hidden';
}
function continueGame() {
	lastTrials = true;
	displayQuestion(11);
	document.getElementById('info').style.visibility='visible';
	document.getElementById('questionNum').style.visibility='visible';
	document.getElementById('button1').style.visibility='visible';
	document.getElementById('button2').style.visibility='visible';
	document.getElementById('transition').style.visibility='hidden';
}

function restart() {
	if(document.getElementById('end').style.visibility=='visible') {
	    cur = 1;
		displayQuestion(cur);
		score=0;
		document.getElementById('info').style.visibility='visible';
		document.getElementById('questionNum').style.visibility='visible';
		document.getElementById('button1').style.visibility='visible';
		document.getElementById('button2').style.visibility='visible';
		document.getElementById('end').style.visibility='hidden';
	}
}

function start() {
	document.getElementById('start').style.visibility='visible';
}

function startGame() {
	document.getElementById('info').style.visibility='visible';
	document.getElementById('questionNum').style.visibility='visible';
	document.getElementById('start').style.visibility='hidden';
	document.getElementById('start').innerHTML='';
	displayQuestion(cur);
}

start();
