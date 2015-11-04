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
new Question('Your next tasks is a bit unusual, because you are required to do some housekeeping work. You have to clean king Augean\'s stables that withholds more livestock then all other ranches\' livestock together in one day. How do you proceed?', 
	new Choice(false, 'Yes'), 
	new Choice(true, 'No')),
new Question('Now you must drive away a flock of man-eating birds which have gathered near the town of Stymphalos. How do you proceed?', 
	new Choice(false, 'Yes'), 
	new Choice(true, 'No')),
new Question('You are ordered to capture the bull of Crete which has caused King Minos to lose his wife\'s love and bore a half-man, half-bull monster. How do you proceed?', 
	new Choice(false, 'Yes'), 
	new Choice(true, 'No')),
new Question('Eurystheus has sent you to steal the man-eating mares of Diomedes, the king of the Brinstones. How do you proceed?', 
	new Choice(false, 'Yes'), 
	new Choice(true, 'No')),
new Question('Hippolyte\'s was notorious for leading the great female warriors called the Amazons, and was gifted a special leather belt by Aris, the war god.  Eurystheus wants to give it to his daughter and commanded you to bring back Hippolyte\'s leather belt. How do you proceed?', 
	new Choice(true, 'Yes'), 
	new Choice(false, 'No')),
new Question('You are supposed to steal the cattle of Geryon, but first you must pass Geryon. How will you kill Geryon?', 
	new Choice(true, 'Yes'), 
	new Choice(false, 'No')),
new Question('The next to last labor (one of the hardest) is to collect golden apples from Hera\'s tree and give it to Eurystheus. After fighting Kyknos, Antaeus, Bursitis, and killing the eagle that pecked at Prometheus\' liver for 30 years, you made a deal with Atlas to hold the weight of the world on your shoulders while he went to get the golden apple. He returns with the apples but insists on returning it to Eurystheus and let you hold up the world\'s weight for eternity. How do you proceed?', 
	new Choice(false, 'Yes'), 
	new Choice(true, 'No')),
new Question('For the twelfth and final labor, you must go to the Underworld and kidnap the beast called Cerberus who guards the entrance to Hades. How do you proceed?', 
	new Choice(true, 'Yes'), 
	new Choice(false, 'No'))
];

var deathMsgs = ['Your arrows do nothing! The lion lunges and the rest is just mythology...',
'You do not have the head of Medusa! It eats you as you fumble through your bag trying to find the nonexisting object.', 
'The delicious goods tempt you while you wait, you decide to try them. They sure are delcious! And poisoness...',
'The boar smashes the seal and gouges your perfect body into a shredded steak.', 
'Apparently you can still smell poop under dirt.',
'You look in your bag to grab one and you notice theres a note, it reads "I owe you 1 thunderbolt -Zeus", before you can think the birds snatch you up and drop you from hundreds of feet in the air.',
'Turns out minotaurs can not see the color red.',
'The horses begin kicking the dirt making a loud noise, the Brinstones notice you,  welp.',
'Because of the temptation the drugs impose you try some, slowly you get addicted. Twelve years later you overdose.',
'You cut your head off by acident as you try to cut his body in ten thousand peices.',
'Daddy says no.',
'Hades trades your life for Cerberus, you die and Cerberus is free.'];

function displayChoice1(choice) {
	var button1 = document.getElementById("button1");
	button1.textContent = choice.words;
}

function displayChoice2(choice) {
	var button2 = document.getElementById("button2");
	button2.textContent = choice.words;
}

function displayChoice3(choice) {
    var button3 = document.getElementyById("button3");
    button3.textContent = choice.words;
}

function displayChoice4(choice) {
    var button4 = document.getElementyById("button4");
    button4.textContent = choice.words;
}

function setQuestionStyle(count) {
    var button1 = document.getElementyById("button1");
    var button2 = document.getElementyById("button2");
    var button3 = document.getElementyById("button3");
    var button4 = document.getElementyById("button4");
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
	setQuestionStyle(count);
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
	if (buttonId == 1) {
		if (question.choice1.correct) {
			score++;
			displayQuestion(cur);
		} else {
			displayQueston(cur)
		}
	} else if (buttonId == 2){
		if (question.choice2.correct) {
			score++;
			displayQuestion(cur);
		} else {
			displayQuestion(cur);
		}
	} else if (buttonId == 3){
		if (question.choice3.correct) {
			score++;
			displayQuestion(cur);
		} else {
			displayQuestion(cur);
		}
	} else if (buttonId == 4){
		if (question.choice4.correct) {
			score++;
			displayQuestion(cur);
		} else {
			displayQuestion(cur);
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
	displayQuestion(cur);
	document.getElementById('info').style.visibility='visible';
	document.getElementById('questionNum').style.visibility='visible';
	document.getElementById('button1').style.visibility='visible';
	document.getElementById('button2').style.visibility='visible';
	document.getElementById('start').style.visibility='hidden';
	document.getElementById('start').innerHTML='';
}

start();
