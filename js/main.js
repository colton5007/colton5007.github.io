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

function Question(words, choice1, choice2) {
	this.words = words;
	this.choice1 = choice1;
	this.choice2 = choice2;
}

var questions = [new Question('You are on a quest to kill the Nemean lion, who is believed to have invincible skin. The lion has been terrorizing through the hills, how do you proceed?', 
	new Choice(true, 'Yes'), 
	new Choice(false, 'No')), 
new Question('You must now kill the nine-headed hydra, whenever you kill one head two more come back, how do you proceed?', 
	new Choice(false, 'Yes'), 
	new Choice(true, 'No')), 
new Question('Eurystheus ordered you to bring him the Hind(Female Deer) of Ceryneia(small town 50 miles North of Mycenae). You must capture it without hurting it so that Artemis won\'t be enraged. How do you proceed?', 
	new Choice(false, 'Yes'), 
	new Choice(true, 'No')),
new Question('Eursytheus has ordered that you capture the Erymanthian Boar, a beast that gouges the people of the countryside with his tusks. How do you proceed?',
	new Choice(true, 'Yes'), 
	new Choice(false, 'No')),
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
	displayChoice1(question.choice1);
	displayChoice2(question.choice2);
}

function checkQuestion(buttonId) {
	var question = questions[cur - 1];
	document.getElementById('info').innerHTML='';
	if (buttonId == 1) {
		if (question.choice1.correct) {
			score++;
			cur++;
			displayQuestion(cur);
			console.log('Correct Answer Picked for Question: ' + (cur));
		} else {
			cur++;
			displayQueston(cur)
		}
	} else {
		if (question.choice2.correct) {
			score++;
			cur++;
			displayQuestion(cur);
			console.log('Correct Answer Picked for Question: ' + (score-1));
		} else {
			cur++;
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
