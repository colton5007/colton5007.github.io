var active = 'Eu';
var mapWidth = 0;
var mapHeight = 0;
var current = [];
var cur = 0;

function setup() {
	var map = document.getElementById('map');
	var mapEu = document.getElementById("mapEu");
	var mapNa = document.getElementById("mapNa");
	var button = document.getElementById('regionSwitchButton');
	var returnButton = document.getElementById('return');
	button.style.width = (Math.round(window.innerWidth * 0.06) + 'px');
	button.style.height = (Math.round(window.innerWidth * 0.06) + 'px');
	button.style.top = (window.innerHeight * 0.76) - (Math.round(window.innerWidth * 0.06)) + 'px';
	mapWidth = mapEu.children[0].clientWidth;
	mapHeight = mapEu.children[0].clientHeight;
	returnButton.style.width = (Math.round(window.innerWidth * 0.06) + 'px');
	returnButton.style.height = (Math.round(window.innerWidth * 0.06) + 'px');
	returnButton.style.top = (document.getElementById('info').clientHeight - returnButton.clientHeight) + 'px';
	returnButton.style.left = (document.getElementById('info').clientWidth - returnButton.clientWidth) + 'px';

	var back = document.getElementById('back');
	var next = document.getElementById('next');
	back.style.width = (Math.round(window.innerWidth * 0.06) + 'px');
	back.style.height = (Math.round(window.innerWidth * 0.06) + 'px');
	back.style.top = (document.getElementById('info').clientHeight - back.clientHeight) + 'px';
	back.style.left = '0px';

	next.style.width = (Math.round(window.innerWidth * 0.06) + 'px');
	next.style.height = (Math.round(window.innerWidth * 0.06) + 'px');
	next.style.top = (document.getElementById('info').clientHeight - next.clientHeight) + 'px';
	next.style.left = (next.clientWidth + 20) + 'px';
}

function switchView() {
	var eu = document.getElementById('mapEu');
	var na = document.getElementById('mapNa');
	var button = document.getElementById('regionSwitchButton');
	if (active == 'Na') {
		eu.style.visibility = 'visible';
		na.style.visibility = 'hidden';
		button.style.backgroundImage = 'url(css/eu.png)';
		active = 'Eu';
		displayEvents(cur);

	} else {
		na.style.visibility = 'visible';
		eu.style.visibility = 'hidden';
		button.style.backgroundImage = 'url(css/na.png)';
		active = 'Na';
		displayEvents(cur);

	}
	console.log(active);
}

setup();
function Event(x, y, name, region, text, date) {
	this.x = Math.round((x / 1920) * mapWidth);
	this.y = Math.round((y / 840) * mapHeight);
	this.name = name;
	this.region = region;
	this.text = text;
	this.date = date;
}

var events = [new Event(1410, 581, "Birth of Jon Von Neumann (December 28, 1903)", 'Eu', "John von Neumann was born in Budapest, Hungary on December 28, 1903 under the name Janos von Neumann. His father was Max Neumann, a banker, who had him raised by his extended family.", 1903), new Event(1410, 581, "Lutheran Gymnasium (1911)", "Eu", 'Neumann attended school at the Lutheran Gymnasium for the majority of his schooling. He was admitted at the age of 8 and graduated the facility at the age of 18 in 1922. Additionally he published his first paper there the same year he graduated', 1911), new Event(1270, 530, "Flee to Austria (1919)", "Eu", "Neumann and his family fled to Austra for a few months to escape the new Hungarian rule.", 1919), new Event(1410, 481, "University of Budapest (1921)", "Eu", "Neumann was accepted into the University of Budapest even with a very limited amount of Jewish acceptions permitted. At the university he studied mathematics although he never attended any lectures. In 1923 he published a definition for ordinal numbers that is still used today. In 1926 he received his doctorate of mathematics with a focus on set theory", 1921), new Event(1160, 220, "University of Berlin (1921)", "Eu", "After his father became enraged that his son wouldn't follow in his father's footsteps as a banker, Max Neumann hired a man to speak with Jon to convince him to change his mind. They ended up settling on a middle ground between mathematics and fincance with chemistry in which von Neumann studied for 2 years at the University of Berlin", 1921), new Event(904, 560, "Technische Hochschule (1923)", "Eu", "Transfering from the University of Berlin, Neumann studied chemistry until 1926 when he got his degree in chemical engineering.", 1923), new Event(920, 560, "An Axiomatization of Set Theory (1925)", "Eu", "Neumann established two techniques to prove that sets cannot belong to themselves-the axiom of foundation and the notion of class. The axiom of foundation made it impossible to construct a set of itself in itself by a mannerr that one must come before the other reducing all recursion; he demonstrated this with a method he developed called the method of inner models, a crucial tool in set theory. However these two methods would turn out to be incomplete and disproved by Kurt Godel in 1930", 1925), new Event(1142, 227, "Teaching in Berlin (1928)", "Eu", "Neumann started lectures as a privatdozent, or an independent speaker that is not recognized as a professor. He lectured in both mathematics and chemical engineering during the 3 year span he was there.", 1926), new Event(1781, 463, "Teaching at Princeton (1929)", 'Na', "In 1929, he briefly became a privatdozent at the University of Hamburg, in hopes of becoming a tenured professor, however in October he was invited to Princeton University in Princeton, New Jersey.", 1929), new Event(1781, 463, "Quantum Mechainic Contributions (1932)", "Na", "Neumann established a series of axioms known as the Dirac-von Neumann axioms based on his paper 'Mathematical Foundations of Quantum Mechanics.' These axioms confronted the issue between determinism and non-determinsm, something that would be argued over until this date. He established a mathematical framework for the field that some mathematicians at the time thought to be silly.", 1932), new Event(1781, 420, "Quantum Logic (1936)", "Na", "Neumann along with the assistance of Garrett Brikhoff created a famous paper that defined the laws for quantum logic, in which standard logic is no applicable in all cases due to Heisenber's Uncertainty Principle.", 1936), new Event(630, 710, "The Manhattan Project (1943)", "Na", "Along with the assitance of several scientists von Neumann designed an explosive lens that was used to compress the plutonium core of the Fat Man used on Nagasaki.", 1943), new Event(1781, 463, "Game Theory (1944)", "Na", "Neumann founded the field of game theory by proving that zero-sum games with perfect information are possible always win or always lose based on calculations. Along with Oskar Morgenstern, he wrote 'Theory of Games and Economic Behavior.'", 1944), new Event(1590, 460, "ENIAC (1944)", "Na", "Von Neumann assisted in the creation of the Electronic Numerical Integtrator and Computer designed by the US Army. During its development Neumann created the foundations for Neumann Architecture as well as self replicating machines.", 1944), new Event(1590, 460, "Cancer and Death (1955-1957)", "Na", "Von Neumann was diagnosed with bone cancer in 1955. Even after his diagnosis he continued teaching and participating on multiple boards. In 1956 he received the Enrico Fermi Award for his dedication to the development of energy. He shortly converted to Roman Catholicsm before his death as he believed religion explains more things that it doesn't. He died on February 8, 1957.", 1957)];

function setupTimeline() {
	var timeline = document.getElementById('timeline');
	var width = timeline.clientWidth;
	var height = timeline.clientHeight;
	for (var i = 0; i < 6; i++) {
		var temp = document.createElement('div');
		temp.setAttribute('id', 'timeline' + i);
		temp.setAttribute('class', 'timeline');
		temp.style.width = width / 6 + 'px';
		temp.style.height = height + 'px';
		temp.style.left = ((width / 6) * i) + 'px';
		temp.setAttribute('onmouseover', 'timelineHover(' + i + ', true)');
		temp.setAttribute('onmouseleave', 'timelineHover(' + i + ', false)');
		temp.setAttribute('onclick', 'displayEvents(' + i + ')');
		var tempText = document.createElement('p');
		tempText.innerText = 1900 + (10 * i) + "'s";
		temp.appendChild(tempText);
		timeline.appendChild(temp);
	}
}

function displayEvent(id, bool) {
	if (bool && events[id].region == active) {
		document.getElementById('event' + id).style.visibility = 'visible';
	} else {
		document.getElementById('event' + id).style.visibility = 'hidden';
	}

}

function displayEvents(id) {
	document.getElementById('timeline' + cur).style.backgroundColor = '#222222';
	document.getElementById('timeline' + cur).children[0].style.backgroundColor = '#222222';
	document.getElementById('timeline' + (id)).style.backgroundColor = '#228822';
	document.getElementById('timeline' + (id)).children[0].style.backgroundColor = '#228822';
	cur = id;
	for (var i = 0; i < events.length; i++) {
		console.log('Trying to display event ' + i + " | " + ((events[i].date - ((events[i].date - 1900) % 10) - 1900) / 10 == id) + " | " + (events[i].region == active));
		if ((events[i].date - ((events[i].date - 1900) % 10) - 1900) / 10 == id && events[i].region == active) {
			displayEvent(i, true);
		} else {
			displayEvent(i, false);
		}
	}

}

function placeEvents() {
	for (var i = 0; i < events.length; i++) {
		var e = document.createElement("div");
		e.setAttribute('id', 'event' + i);
		e.setAttribute('class', 'event');
		e.setAttribute('onclick', 'loadEventInfo(' + i + ')');
		e.style.position = "absolute";
		e.style.left = events[i].x + 'px';
		e.style.top = events[i].y + 'px';
		e.style.visibility = 'hidden';
		if (events[i].region == 'Eu') {
			document.getElementById("mapEu").appendChild(e);
		} else {
			document.getElementById('mapNa').appendChild(e);
		}
		console.log('Created Event ' + i);
	}
}

function loadEventInfo(id) {
	var info = document.getElementById('info');
	var visual = document.getElementById('visual');
	info.style.visibility = "visible";
	visual.style.visibility = "visible";
	var heading = document.createElement('h1');
	heading.innerText = (events[id].name);
	var backButton = document.getElementById("back");
	var nextButton = document.getElementById('next');
	var returnButton = document.getElementById("return");
	info.innerHTML = "";
	info.appendChild(heading);
	info.innerHTML = info.innerHTML + events[id].text;
	info.appendChild(returnButton);
	info.appendChild(backButton);
	info.appendChild(nextButton);
	visual.style.backgroundImage = 'url(css/visual' + id + '.jpg)';
}

function exit() {
	var info = document.getElementById('info');
	var visual = document.getElementById('visual');
	info.style.visibility = "hidden";
	visual.style.visibility = "hidden";
}

function timelineHover(id, bool) {
	var t = document.getElementById('timeline' + id);
	if (bool) {
		t.style.backgroundColor = '#228822';
		t.children[0].style.backgroundColor = '#228822';
	} else {
		if (cur != id) {
			t.style.backgroundColor = '#222222';
			t.children[0].style.backgroundColor = '#222222';
		}
	}
}

function next() {
	cur++;
	loadEventInfo(cur);
}

function previous() {
	if (cur > 0) {
		cur--;
		loadEventInfo(cur);
	}
}

function start() {
	var start = document.getElementById('start');
	document.getElementById('regionSwitchButton').style.visibility = 'hidden';
	start.style.visibility = 'visible';
	var worksCited = document.createElement('div');
	var normal = document.createElement('div');
	var present = document.createElement('div');
	worksCited.setAttribute('class', 'startb');
	normal.setAttribute('class', 'startb');
	present.setAttribute('class', 'startb');
	worksCited.setAttribute('onclick', 'startButton(0)');
	normal.setAttribute('onclick', 'startButton(1)');
	present.setAttribute('onclick', 'startButton(2)');
	worksCited.innerText = "Works Cited";
	normal.innerText = "Start";
	present.innerText = "Present";
	worksCited.style.left = '2%';
	normal.style.left = '34%';
	present.style.left = '66%';
	start.appendChild(worksCited);
	start.appendChild(normal);
	start.appendChild(present);
}

function startButton(id) {
	if (id == 0) {
		document.getElementById('start').children[0].innerText = 'Works Cited';
		document.getElementById('start').children[1].innerText = "Encyclopedia Britannica. 'John Von Neumann | Biography'. N. p., 2015. Web. 31 Jan. 2016. \n St. Andrews. 'Von_Neumann Biography'. N. p., 2016. Web. 31 Jan. 2016.\n Informs. 'Who Was John Von Neumann?'. N. p., 2016. Web. 31 Jan. 2016. \n Famous Scientists. 'John Von Neumann'. N. p., 2016. Web. 31 Jan. 2016.\n Famous Mathematicians. 'John Von Neumann.' N.p., 2016. Web. 31 Jan. 2016.";
	} else if (id == 1) {
		document.getElementById('start').style.visibility = 'hidden';
		document.getElementById('regionSwitchButton').style.visibility = 'visible';
	} else {
		document.getElementById('start').style.visibility = 'hidden';
		document.getElementById('regionSwitchButton').style.visibility = 'visible';
		loadEventInfo(0);
	}
}

start();

setupTimeline();
placeEvents();
displayEvents(0);

