
function startup() {
	document.getElementById("main").style.width = (window.innerHeight * 0.85 * (400 / 705)) + 'px';
	document.getElementById("main").style.left = (window.innerWidth - (window.innerHeight * 0.80 * (400 / 705))) / 2 + 'px';
	
	var back = document.getElementById('back');
	var next = document.getElementById('next');
	var returnButton = document.getElementById('return');
	
	back.style.width = (Math.round(window.innerWidth * 0.06) + 'px');
	back.style.height = (Math.round(window.innerWidth * 0.06) + 'px');
	back.style.top = (document.getElementById('info').clientHeight - back.clientHeight) + 'px';
	back.style.left = '0px';

	next.style.width = (Math.round(window.innerWidth * 0.06) + 'px');
	next.style.height = (Math.round(window.innerWidth * 0.06) + 'px');
	next.style.top = (document.getElementById('info').clientHeight - next.clientHeight) + 'px';
	next.style.left = (next.clientWidth + 20) + 'px';
	
	returnButton.style.width = (Math.round(window.innerWidth * 0.06) + 'px');
	returnButton.style.height = (Math.round(window.innerWidth * 0.06) + 'px');
	returnButton.style.top = (document.getElementById('info').clientHeight - returnButton.clientHeight) + 'px';
	returnButton.style.left = (document.getElementById('info').clientWidth - returnButton.clientWidth) + 'px';
}

function highlight(id) {
	document.getElementById("main").style.backgroundImage = "url('css/as-" + id +".png')";
}

function unhighlight() {
	document.getElementById("main").style.backgroundImage = "url('css/as-o.png')";
}

function Info(topic, work, text) {
	this.topic = topic;
	this.work = work;
	this.text = text;
	this.imageURL = topic + "-" + work;
}
cur = 0;

var infos = [];

function loadInfo(id) {
	var info = document.getElementById('info');
	var visual = document.getElementById('visual');
	info.style.visibility = "visible";
	visual.style.visibility = "visible";
	var heading = document.createElement('h1');
	heading.innerText = (infos[id].topic) + "- " + infos[id].work;
	info.innerHTML = "";
	info.appendChild(heading);
	info.innerHTML = info.innerHTML + infos[id].text;
	visual.style.backgroundImage = 'url(css/' + infos[id].imageURL + '.jpg)';
	cur = id;
}

function buttonClick(id) {
	if (id == 0) {

	} else if (id == 1) {
		
	} else if (id > 1) {
		loadInfo(id);
	}
}

function next() {
	if(cur < infos.length) {
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
}
