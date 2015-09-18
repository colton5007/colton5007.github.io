var score = 1;
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

function Question(words, choice1, choice2) {
	this.words = words;
	this.choice1 = choice1;
	this.choice2 = choice2;
}

var questions = [new Question('Question 1', new Choice(true, 'True Answer'), new Choice(false, 'False Answer')), 
new Question('Question 2', new Choice(false, 'False Answer'), new Choice(true, 'True Answer')), 
new Question('Question 3', new Choice(false, 'False Answer'), new Choice(true, 'True Answer')),
new Question('Question 4', new Choice(true, 'True Answer'), new Choice(false, 'False Answer'))];

function displayChoice1(choice) {
	var button1 = document.getElementById("button1");
	button1.textContent = choice.words;
}

function displayChoice2(choice) {
	var button2 = document.getElementById("button2");
	button2.textContent = choice.words;
}

function displayQuestion(num) {
	if (questions.length < num) {
		win();
	} else {
		var question = questions[num - 1];
		var questionDiv = document.getElementById("info");
		document.getElementById("questionNum").textContent = num;
		questionDiv.innerHTML = question.words;
		createSoundFile(num, questionDiv);
		displayChoice1(question.choice1);
		displayChoice2(question.choice2);
	}
}

function checkQuestion(buttonId) {
	var question = questions[score - 1];
	document.getElementById('info').innerHTML='';
	if (buttonId == 1) {
		if (question.choice1.correct) {
			score++;
			displayQuestion(score);
			console.log('Correct Answer Picked for Question: ' + (score-1));
		} else {
			gameOver(score);
		}
	} else {
		if (question.choice2.correct) {
			score++;
			displayQuestion(score);
			console.log('Correct Answer Picked for Question: ' + (score-1));
		} else {
			gameOver(score);
		}
	}
}

function gameOver(num) {
	document.getElementById('info').style.visibility='hidden';
	document.getElementById('questionNum').style.visibility='hidden';
	document.getElementById('button1').style.visibility='hidden';
	document.getElementById('button2').style.visibility='hidden';
	var end = document.getElementById('end');
	end.style.visibility='visible';
	var restartButton = document.getElementById('again');
	var labor = 's';
	if(score==2) labor='';
	end.textContent='You completed ' + (score-1) + ' Labor' + labor + ' of Hercules';
	end.appendChild(restartButton);
}

function win() {
	document.getElementById('info').style.visibility='hidden';
	document.getElementById('questionNum').style.visibility='hidden';
	document.getElementById('button1').style.visibility='hidden';
	document.getElementById('button2').style.visibility='hidden';
	var end = document.getElementById('end');
	end.style.visibility='visible';
	var restartButton = document.getElementById('again');
	end.textContent='You have completed the 12 Labors of Hercules';
	end.appendChild(restartButton);
}

function restart() {
	if(document.getElementById('end').style.visibility=='visible') {
		displayQuestion(1);
		score=1;
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
	displayQuestion(1);
	score=1;
	document.getElementById('info').style.visibility='visible';
	document.getElementById('questionNum').style.visibility='visible';
	document.getElementById('button1').style.visibility='visible';
	document.getElementById('button2').style.visibility='visible';
	document.getElementById('start').style.visibility='hidden';
	document.getElementById('start').innerHTML='';
}

start();
