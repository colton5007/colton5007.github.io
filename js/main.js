var mapWidth = 0;
var mapHeight = 0;
var current = [];
var cur = 0;

function setup() {
	var map = document.getElementById('map');
	var dracMap = document.getElementById("dracMap");
	var returnButton = document.getElementById('return');
	mapWidth = dracMap.children[0].clientWidth;
	mapHeight = dracMap.children[0].clientHeight;
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

setup();
function Event(x, y, name, text) {
	this.x = Math.round((x / 767) * mapWidth);
	this.y = Math.round((y / 543) * mapHeight);
	this.name = name;
	this.text = text;
}

var events = [
new Event(313, 175, "Home of Van Helsing", "A bridge between the East and West"),
new Event(597, 340, "Castle Dracula", 'Located in Transylvania in the far east. Large, scary, and menacing. Houses Dracula most of the time until his hunt for Mina.'),
new Event(631, 355, "Varna", "Starting point of the Demeter and the loading point for the 50 boxes of Dracula earth, as well as the intended, albeit not actual, destination of the Czarina Catherine."), 
new Event(625, 308, "Galatz", "The actual destination of the Czarina Catherine, north of Varna."), 
new Event(266, 233, "Paris", "Start of the Orient Express, a train that travels from Paris to Varna-- a land connection of the West and East."), 
new Event(622, 331, "Veresti", "Town arrived at by Van Helsing and Mina. Hones in on Dracula. North of the Castle Dracula."), 
new Event(475, 282, "Buda-Pest", "Harker reappears here with his so called brain fever where Mina goes to join him. Along the route of the Orient Express."), 
new Event(247, 182, "London", "Contains a bustle of Western life and culture. Includes the insane asylum that houses Dr. Seward and Renfield. Dracula is first spotted in England here by Harker. Dracula owns two houses here in which 21 boxes of Dracula's homeland is stored."),
new Event(217, 183, "Exeter", "Harker's home location and referenced as the home location of Harker's employer as well."), 
new Event(256, 132, "Whitby", "Trading port and the final destination of the Demeter. Lucy stays for a period of time here. The Demeter is found here missing the entire crew and having a dead captain. The method of which Dracula gets to England."), 
new Event(260, 140, "Carfax", "The primary estate that Dracula buys in England where the 50 boxes of earth is shipped. Renfield is found several times at the chapel waiting for his master."), 
new Event(573, 325, "Borgo Pass", "The entrance into Dracula's realm and the location at which Harker is first dropped off at to wait for his carriage.")];

function displayEvent(id) {
	document.getElementById('event' + id).style.visibility = 'visible';
}

function displayEvents(id) {
	for (var i = 0; i < events.length; i++) {
		displayEvent(id);
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
		e.style.visibility = 'visible';
		document.getElementById('dracMap').appendChild(e);
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
	} else {
		document.getElementById('start').style.visibility = 'hidden';
		loadEventInfo(0);
	}
}

start();

placeEvents();
displayEvents(0);

