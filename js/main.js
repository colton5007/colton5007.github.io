var score = 0;
var cur = 0;
var cuerpoWidth = 0;
var cuerpoHeight = 0;

function start() {
	updateScore();
	nextQuestion();
	document.getElementById('startButton').style.visibility = 'hidden';
	var cuerpo = document.getElementById("cuerpo");
	cuerpoWidth = cuerpo.children[0].clientWidth;
	cuerpoHeight = cuerpo.children[0].clientHeight;
	placeEvents();
}


function placeEvents() {
	for (var i = 0; i < questions.length; i++) {
		var e = document.createElement("div");
		e.setAttribute('id', 'part' + i);
		e.setAttribute('class', 'part');
		e.setAttribute('onclick', 'check(' + i + ')');
		e.style.position = "absolute";
		e.style.left = Math.round(((questions[i].x) / 594) * cuerpoWidth) + 'px';
		e.style.top = Math.round(((questions[i].y) / 762) * cuerpoHeight) + 'px';
		e.style.visibility = 'visible';
		document.getElementById('cuerpo').appendChild(e);
	}
}

function check(id) {
	
	if (id == cur) {
		score++;
	} else {
		score = 0;
	}
	console.log(score);
	updateScore();
	nextQuestion();
}

function updateScore() {
	document.getElementById('score').children[0].innerHTML = score;
}

function nextQuestion() {
	var prev = cur;
	while (prev == cur) {
		cur = Math.floor(Math.random() * (1 + 9 - 0));
	}
	document.getElementById('question').children[0].innerHTML = "Toca " + questions[cur].display + ".";
}

function Question(display, id, x, y) {
	this.display = display;
	this.id = id;
	this.x = x;
	this.y = y;
}

var questions = [new Question("la cabeza", 0, 287, 159), new Question("el cuello", 1, 287, 232), new Question("la mano", 2, 97, 372), new Question("el codo", 3, 393, 370), new Question("el brazo", 4, 208, 335),
 new Question("el pecho", 5, 287, 300), new Question("el est&oacute;mago", 6, 287, 409), new Question("los dedos de los pies", 7, 192, 702), new Question("el pie", 8, 340, 689),
 new Question("la pierna", 8, 320, 559)];

