
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
new Info("Fear", "The City of Ember", "In The City of Ember, the Builders created a subterranean city and told the people that the outside world was dangerous and that they would die if they left the city. Additionally, giant mutated creatures such as moles and moths keep the citizens from venturing too much in the sewers or the outer regions", 'fear-ember.jpg'),
new Info("Fear", "I am Legend", "In I am Legend, Dr. Robert Neville is confined to his home in fear of the mutants. While this does directly represent a figure of authority asserting control over Dr. Neville, it shows that entity has the ability to control through fear.", 'fear-legend.jpg'),
new Info("Boundaries", "The Village", "The fence around Covington in The Village is in place not only to keep the people from leaving, but to provide a feeling of security. These boundaries keep the people from wanting to leave and allows the governing individuals to keep control over the population.", "boundaries-village.jpg"),
new Info("Boundaries", "The Giver", "In The Giver, the boundary of memories is the boundary that the residents of the Community are not allowed to leave. If the boundary of memories is crossed, memories and emotions will be released and the elders would no longer have control over the people.", "boundaries-giver.jpg"),
new Info("Boundaries", "The City of Ember", "In The City of Ember, the inhabitants are confined to the city and are not allowed to leave. The builders have given them boundaries in order to keep control.", "boundaries-ember.jpg"),
new Info("Boundaries", "I am Legend", "Dr. Neville in I Am Legend has a time boundary. He must be locked in the house by sundown. The mutants have control over him by limiting the time he is allowed to be outside of his home walls.", "boundaries-legend.jpg"),
new Info("Isolation", "The Village", "In The Village, Covington is isolated from the rest of the world. This is necessary for the control of the people because it keeps the people from gaining new ideas that may challenge the principles that Covington is founded on.", "isolation-village.jpg"),
new Info("Isolation", "The Giver", "As in Covington, the Community in The Giver uses boundaries to protect the people from getting a new perspective on life that may threaten the strength of the community.", "isolation-giver.jpg"),
new Info("Isolation", "The City of Ember", "In The City of Ember, the city is isolated from the rest of the world because of its location underground. The isolation keeps the inhabitants from learning the truth about the city and prevents them from leaving.", "isolation-ember.jpg"),
new Info("Isolation", "I am Legend", "The isolation felt by Dr. Neville in I Am Legend keep his emotions subdued and allow the environment to have control over his emotions.", "isolation-legend.jpg"),
new Info("Distractions", "The Village", "Throughout The Village, the people of Covington are constantly in over-the-top celebrations. These celebrations distract the people from any issues that they could see otherwise, such as the fact that they are being lied to by their elders.", "distractions-village.jpg"),
new Info("Distractions", "The Giver", "The leaders in The Giver use different form of distractions to control the people. The distractions, such as the injections and the assigned jobs keep the people of the city from noticing the lack of emotion and free will that they have.", "distractions-giver.jpg"),
new Info("Distractions", "The City of Ember", "The mayor of Ember uses singing festivals and forced job assignments to distract the people of Ember from their issues such as the generator degration and food supply shortage", "distractions-ember.jpg"),
new Info("Distractions", "I am Legend", "Dr. Neville uses his dog, San, and his quest to find a cure for the infection to distract himself from the lonely apocalyptic world surrounding him.", "distractions-legend.jpg")
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
