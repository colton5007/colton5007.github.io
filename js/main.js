
function startup() {
	document.getElementById("main").style.width = (window.innerHeight * 0.85 * (400 / 705)) + 'px';
	document.getElementById("main").style.left = (window.innerWidth - (window.innerHeight * 0.80 * (400 / 705))) / 2 + 'px';
	
	var back = document.getElementById('back');
	var next = document.getElementById('next');
	var returnButton = document.getElementById('return');
	
	back.style.width = (Math.round(window.innerWidth * 0.04) + 'px');
	back.style.height = (Math.round(window.innerWidth * 0.04) + 'px');
	back.style.top = (document.getElementById('info').clientHeight - back.clientHeight) + 'px';
	back.style.left = '0px';

	next.style.width = (Math.round(window.innerWidth * 0.04) + 'px');
	next.style.height = (Math.round(window.innerWidth * 0.04) + 'px');
	next.style.top = (document.getElementById('info').clientHeight - next.clientHeight) + 'px';
	next.style.left = (next.clientWidth + 20) + 'px';
	
	returnButton.style.width = (Math.round(window.innerWidth * 0.04) + 'px');
	returnButton.style.height = (Math.round(window.innerWidth * 0.04) + 'px');
	returnButton.style.top = (document.getElementById('info').clientHeight - returnButton.clientHeight) + 'px';
	returnButton.style.left = (document.getElementById('info').clientWidth - returnButton.clientWidth) + 'px';
}

function highlight(id) {
	document.getElementById("main").style.backgroundImage = "url('css/as-" + id +".png')";
}

function unhighlight() {
	document.getElementById("main").style.backgroundImage = "url('css/as-o.png')";
}

function Info(topic, work, text, url) {
	this.topic = topic;
	this.work = work;
	this.text = text;
	this.imageURL = url;
}
cur = 0;

var infos = [new Info("Fear", "The Village", "The creatures are used by the elders to create fear in the people in order to subdue the people\'s desire to leave the village.", "fear-village.png"),
new Info("Fear", "The Giver", "In The Giver, the elders completely eliminate emotion. With the lack of fear, love, and desire the people won\'t have any drive to rebel or reform their society.", "fear-giver.png"),
new Info("Fear", "The City of Ember", "In The City of Ember, the Builders created a subterranean city and told the people that the outside world was dangerous and that they would die if they left the city.", 'fear-ember.png'),
new Info("Fear", "I am Legend", "In I am Legend, Dr. Robert Neville is confined to his home in fear of the mutants. While this does directly represent a figure of authority asserting control over Dr. Neville, it shows that entity has the ability to control through fear.", 'fear-legend.png'),
new Info("Boundaries", "The Village", "The fence around Covington in The Village is in place not only to keep the people from leaving, but to provide a feeling of security. These boundaries keep the people from wanting to leave and allows the governing individuals to keep control over the population.", "boundaries-village.png"),
new Info("Boundaries", "The Giver", "In The Giver, the boundary of memories is the boundary that the residents of the Community are not allowed to leave. If the boundary of memories is crossed, memories and emotions will be released and the elders would no longer have control over the people.", "boundaries-giver.png"),
new Info("Boundaries", "The City of Ember", "In The City of Ember, the inhabitants are confined to the city and are not allowed to leave. The builders have given them boundaries in order to keep control.", "boundaries-ember.png")
];

function loadInfo(id) {
	var info = document.getElementById('info');
	var visual = document.getElementById('visual');
	info.style.visibility = "visible";
	visual.style.visibility = "visible";
	var buttons = document.getElementsByClassName('button');
	for(b = 0; b < 4; b++) {
		buttons[b].style.visibility = 'hidden';
	}
	document.getElementById('main').style.visibility = 'hidden';
	document.getElementById('title').style.visibility = 'hidden';
	var backButton = document.getElementById("back");
	var nextButton = document.getElementById('next');
	var returnButton = document.getElementById("return");
	var heading = document.createElement('h1');
	heading.innerText = (infos[id].topic) + "- " + infos[id].work;
	info.innerHTML = "";
	info.appendChild(heading);
	info.innerHTML = info.innerHTML + infos[id].text;
	info.appendChild(returnButton);
	info.appendChild(backButton);
	info.appendChild(nextButton);
	visual.style.backgroundImage = 'url(css/' + infos[id].imageURL + ')';
	cur = id;
}

function buttonClick(id) {
	loadInfo(id);
}

function next() {
	if(cur < infos.length-1) {
		cur++;
	} else {
		cur = 0;
	}
	loadInfo(cur);
}

function previous() {
	if(cur > 0) {
		cur--;
	} else {
		cur = infos.length-1;
	}
	loadInfo(cur);
}

function exit() {
	var info = document.getElementById('info');
	var visual = document.getElementById('visual');
	info.style.visibility = "hidden";
	visual.style.visibility = "hidden";
	var buttons = document.getElementsByClassName('button');
	for(b = 0; b < 4; b++) {
		buttons[b].style.visibility = 'visible';
	}
	document.getElementById('main').style.visibility = 'visible';
	document.getElementById('title').style.visibility = 'visible';
}
