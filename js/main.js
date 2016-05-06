var score = 0;
var cur = 0;
function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}


// set up some squares
var cuerpo = document.getElementById('cuerpo');
var context = cuerpo.getContext('2d');
var img = new Image();
img.onload = function() {
	context.drawImage(img, 0, 0);
};
img.src = "css/body.png";
img.crossOrigin = "anonymous";


$('#cuerpo').click(function(e) {
    var pos = findPos(this);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;
    var c = this.getContext('2d');
    var p = c.getImageData(x, y, 1, 1).data; 
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    check(hex);
    console.log(hex);
});

function start() {
	updateScore();
	nextQuestion();
	document.getElementById('start').style.visibility='hidden';
}

function check(hex) {
	console.log(hex == questions[cur].hex);
	if(hex == questions[cur].hex) {
		score++;
	} else {
		score = 0;
	}
	console.log(score);
	updateScore();
	nextQuestion();
}
function updateScore() {
	document.getElementById('score').innerHTML = score;
}

function nextQuestion() {
	var prev = cur;
	while(prev == cur) {
		cur = Math.floor(Math.random() * (1 + 9 - 0));
	}
	document.getElementById('question').innerHTML = questions[cur].display;
}


function Question(display, hex) {
	this.display = display;
	this.hex = hex;
}

var questions = [new Question("La Cabeza", "#00fffe"),
new Question("El Cuello", "#d03af8"),
new Question("La Mano", "#f6ff4a"),
new Question("El Codo", "#00ccbc"),
new Question("El Brazo", "#d3186b"),
new Question("El Pecho", "#29ff5f"),
new Question("El Est&Ograve;mago", "#233ec6"),
new Question("Los Dedos de los Pies", "#81045a"),
new Question("El Pie", "#3a7f52"),
new Question("La Pierna", "#ff1b20")];

