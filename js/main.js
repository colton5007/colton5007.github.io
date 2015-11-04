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
new Question("Is the statement: Katherine must be married before Bianca, true or false?", [new Choice(true, "True"), new Choice(false, "False")])
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
	createSoundFile(cur, questionDiv);
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
		displayQueston(cur);
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
	//end.textContent=deathMsgs[num-1] + '\n You completed ' + (score-1) + ' Labor' + labor + ' of Hercules';
	//TODO ADD GAME OVER SCREEN INCLUDING CHARACTER ALIGNMENT
	end.textContent="Score: "+score;
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
