var cur = 0;
var score = 0;
var count = 1;
var dif = 0;
var lastTrials = false;

function Choice(correct, words) {
	this.correct = correct;
	this.words = words;
}

var questions = ['a-, an-', 
'ab-', 
'-aceous', 
'-al', 
'ambi-, amphi-', 
'amyl-', 
'archae-', 
'arthr-', 
'auto-', 
'bi-', 
'bio-', 
'-blast', 
'cardi-', 
'cata-', 
'-cell-', 
'centi-', 
'cephala-', 
'cervic-', 
'chloro-',
'chondr-', 
'co-', 
'di-, dipl- (latin)', 
'dis-', 
'dors-', 
'ecto-', 
'-emia', 
'en-, endo-, ent-', 
'enter-', 
'epi-', 
'eu-', 
'ex-', 
'gastro-', 
'geo-', 
'-gen, -gine', 
'-gene-', 
'-gest-', 
'gluc-, glyc-', 
'gymno-',
'halo-', 
'hemi-', 
'hetro-', 
'holo-', 
'homo-', 
'hydro-', 
'hyper-', 
'hypo-', 
'iso-', 
'-kary-', 
'kilo-', 
'lact-', 
'-lys, -lyt, -lyst', 
'macr-', 
'micro-', 
'milli-', 
'mono-',
'morph-',
'myc-',
'necr-',
'neo-',
'nuc-',
'omni-', 
'oo-', 
'oste-', 
'-ped-',
'phag-', 
'pheno-', 
'-phil-', 
'photo-', 
'pino-', 
'-pod', 
'pro-', 
'pseudo-', 
'schis-, schiz-', 
'-scribe, -script', 
'semi-', 
'-sperm-, -spore-', 
'spir-, -spire', 
'stat-, -stasis', 
'stom-, -stome', 
'sub-',
'sym-, syn-', 
'tax-', 
'telo-', 
'therm-',
'trans-',
'-troph-',
'vas-',
'vect-',
'ventr-',
'vit-, viv-',
'zyg-'
];

var answers = ['no, not', 
'away from', 
'of, pertaining to', 
'having the character of', 
'both', 
'starch', 
'primitive, ancient', 
'joint', 
'self', 
'two', 
'life', 
'sprout, bud', 
'heart', 
'breakdown', 
'chamber',
'hundredth', 
'head', 'neck', 
'green', 
'cartilige', 
'with, together', 
'two, double', 
'apart',
'back',
'outside',
'blood',
'into, within',
'intestine, gut',
'upon, above, over',
'true',
'out, away', 
'stomach', 
'land, earth', 
'producer', 
'origin, birth',
 'carry, produce', 
'sweet', 
'naked, bare', 
'salt',
'half', 
'different', 
'whole', 
'same', 
'water', 
'above', 
'below, under', 
'equal', 
'cell nucleus', 
'thousand', 
'milk', 
'decompose, split, burst', 
'large', 
'small, millionth', 
'thousandth',
'one, single',
'shape, form',
'fungus',
'dead, corpse',
'new',
'center',
'all', 
'egg', 
'bone', 
'foot, child', 
'eat', 
'show',
'loving', 
'light', 
'drink', 
'foot', 
'before', 
'false', 
'split', 
'write', 
'half, partly', 
'seed', 
'breathe', 
'standing, staying', 
'mouth', 
'under, above', 
'together', 
'arrange',
'end',
'heat',
'across',
'nourishment',
'vessel',
'carry',
'underside',
'life',
'joined',
];

function displayChoice1(choice) {
	var button1 = document.getElementById("button1");
	button1.textContent = choice;
}

function displayChoice2(choice) {
	var button2 = document.getElementById("button2");
	button2.textContent = choice;
}

function displayChoice3(choice) {
	var button3 = document.getElementById("button3");
	button3.textContent = choice;
}

function displayChoice4(choice) {
	var button4 = document.getElementById("button4");
	button4.textContent = choice;
}

function setQuestionStyle(dif) {
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");
	var button4 = document.getElementById("button4");
	var text = document.getElementById("textInput");
	var submit = document.getElementById("submitButton");

	if (dif == 1) {
		button1.style.visibility = 'visible';
		button2.style.visibility = 'visible';
		button3.style.visibility = 'visible';
		button4.style.visibility = 'visible';
		text.style.visibility = 'hidden';
		submit.style.visibility = 'hidden';
	} else {
		button1.style.visibility = 'hidden';
		button2.style.visibility = 'hidden';
		button3.style.visibility = 'hidden';
		button4.style.visibility = 'hidden';
		text.style.visibility = 'visible';
		submit.style.visibility = 'visible';
	}
}

function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayQuestion() {
	answerLength = answers.length;
	var question = questions[cur];
	var questionDiv = document.getElementById("info");
	document.getElementById("questionNum").textContent = score;
	questionDiv.innerHTML = question;
	setQuestionStyle(dif);
	if (dif == 1) {
		var c = [answers[getRandomArbitrary(0, answerLength-1)]];
		while(c.length < 4) {
			var temp = answers[getRandomArbitrary(0, answerLength-1)];
			var x;
			var y = true;
			for(x in c) {
				if(x==temp) {
					y = false;
					break;
				}
			}
			if(y) c[c.length] = temp;
		}
		var change = true;
		var z = 0;
		for(z = 0; z < c.length; z++) {
			if(c[z] == answers[cur]) change = false;
		}
		if(change) c[getRandomArbitrary(0, 3)] = answers[cur];
		displayChoice1(c[0]);
		displayChoice2(c[1]);
		displayChoice3(c[2]);
		displayChoice4(c[3]);
		console.log(c);
	} else {
		document.getElementById("textBox").value = "";
	}

}

function displayCorrect(cur) {
	alert("The correct answer is: \n" + answers[cur-1]);
}

function checkQuestion(buttonId) {
	document.getElementById('info').innerHTML = '';
	cur++;
	var temp = true;
	if (buttonId == 5) {
		var input = document.getElementById("textBox").value.trim();
		var a = answers[cur-1].split(',');
		console.log(a);
		var x;
		for(x = 0; x < a.length; x++) {	
			var ans = a[x].trim();
			console.log(ans + ", " + input);
			if(ans.toLowerCase() === input.toLowerCase()) {
				score++;
				
				displayQuestion();
				temp = false;
				break;
			}
		}
		if(temp) {
			displayCorrect(cur)
			
			displayQuestion();
		}
		
	} else if (answers[cur - 1] == document.getElementById('button' + buttonId).innerText) {
		score++;
		
		displayQuestion();
	} else {
		displayCorrect(cur);
		
		displayQuestion();
	}
	if(cur == questions.length) {
		gameOver();
	}
}

function gameOver() {
	document.getElementById('info').style.visibility='hidden';
	document.getElementById('questionNum').style.visibility='hidden';
	document.getElementById('button1').style.visibility='hidden';
	document.getElementById('button2').style.visibility='hidden';
	document.getElementById('button3').style.visibility='hidden';
	document.getElementById('button4').style.visibility='hidden';
	var end = document.getElementById('end');
	end.style.visibility='visible';
	var restartButton = document.getElementById('again');
	end.textContent="You scored a "+Math.round(score/questions.length*100) + "% on the AP Biology Summer Assignment Vocab Quiz, retry for a better score!";
	end.appendChild(restartButton);
}

function restart() {
	score = 0;
	cur = 0;
	document.getElementById("end").style.visibility = "hidden";
	start();
}

function start() {
	document.getElementById('start').style.visibility = 'visible';
}

function startGame(d) {

	document.getElementById('info').style.visibility = 'visible';
	document.getElementById('questionNum').style.visibility = 'visible';
	document.getElementById('start').style.visibility = 'hidden';

	dif = d;
	displayQuestion();
}

start();
