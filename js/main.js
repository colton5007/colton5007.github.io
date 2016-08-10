var current = 1;
var max = 0;
function Project(name, infoText, picture) {
	this.name = name;
	this.infoText = infoText;
	this.picture = picture;

	var project = document.createElement('div');

	var width = window.innerWidth * 0.9 + 'px';
	var height = '600px';

	project.style.backgroundColor = '#222222';

	project.style.width = width;
	project.style.height = height;

	var header = document.createElement('h2');
	var headerContent = document.createTextNode(name);
	header.style.left = window.innerWidth * 0.60 + "px";
	header.style.top = "-20px";
	header.style.color = '#FFFFFF';
	header.style.backgroundColor = '#222222';
	header.style.textDecoration = "underline";
	header.appendChild(headerContent);
	project.setAttribute('class', 'projContent');

	var info = document.createElement('p');
	var infoContent = document.createTextNode(infoText);
	info.appendChild(infoContent);
	info.style.left = window.innerWidth * 0.60 + "px";
	info.style.top = "15px";
	info.style.color = "#CFCFCF";
	info.style.backgroundColor = '#222222';

	var a = document.createElement('a');
	a.setAttribute("href", "bio/index.html");

	var image = document.createElement('img');
	image.setAttribute('height', '600px');
	image.setAttribute('width', window.innerWidth * 0.6 + 'px');
	image.setAttribute('src', picture);
	image.style.zIndex = "-1";
	
	a.appendChild(image);

	var next = document.createElement('div');
	next.setAttribute('id', 'projFoward');
	next.setAttribute('onclick', 'moveProject(+1)');
	var nextImg = document.createElement('img');
	nextImg.setAttribute('src', 'img/nextArrow.png');
	next.appendChild(nextImg);
	next.style.top = "276px";
	next.style.left = (window.innerWidth * 0.6) - 64 + 'px';
	next.style.background = "none";
	next.style.zIndex = "1000";
	next.style.width = "64px";

	var back = document.createElement('div');
	back.setAttribute('id', 'projBack');
	back.setAttribute('onclick', 'moveProject(-1)');
	var backImg = document.createElement('img');
	backImg.setAttribute('src', 'img/backArrow.png');
	back.appendChild(backImg);
	back.style.top = "276px";
	back.style.background = "none";
	back.style.zIndex = "1000";

	this.div = project;
	var listItem = document.createElement('li');

	project.appendChild(a);
	project.appendChild(header);
	project.appendChild(info);
	project.appendChild(back);
	project.appendChild(next);
	listItem.appendChild(project);
	document.getElementById('projList').appendChild(listItem);
	max++;
}

function moveProject(direction) {

	document.getElementById('projList').childNodes[current].firstChild.setAttribute('class', 'projContent');

	if (current + direction === max + 1) {
		current = 1;
		document.getElementById('projList').childNodes[current].firstChild.setAttribute('class', 'displayProj');
		return;
	} else if (current + direction === 0) {
		current = max;
		document.getElementById('projList').childNodes[current].firstChild.setAttribute('class', 'displayProj');
		return;
	} else {
		current += direction;
		document.getElementById('projList').childNodes[current].firstChild.setAttribute('class', 'displayProj');
		return;
	}

}

function setupProjects() {
	var proj1 = new Project('AP Biology Summer Vocab Quiz', 'Quiz Yourself on the Vocab terms for the AP Bio summer assignment (Click on the image)', 'img/project1.jpg');
	document.getElementsByClassName('projContent')[0].setAttribute('class', 'displayProj');
}

function setupPage() {
	this.setText();
	this.setupProjects();
	this.checkHide();
	this.writeAbout();
	document.getElementById('homeButton').style.top = window.innerHeight - 84 + 'px';
	document.getElementById('homeButton').style.left = window.innerWidth - 84 + 'px';
	document.getElementById('c1').style.width = window.innerWidth/2 - 16 + 'px';
	document.getElementById('c2').style.width = window.innerWidth/2 - 16 + 'px';
}

function scrollTo(element, to, duration) {
	var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;

	var animateScroll = function() {
		currentTime += increment;
		var val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
	t /= d / 2;
	if (t < 1)
		return c / 2 * t * t + b;
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

function scroll(element, temp) {
	var y = element.getBoundingClientRect().top;
	var offset = document.body.getBoundingClientRect().top - y;
	var i = getScrollMultiplier(element);
	if (temp === 0) {
		scrollTo(document.body, y, 1500 * i);
	}else{
		scrollTo(document.body, y, 1500 * temp);
	}
}

function setText() {
	var size = Math.round((window.innerWidth * window.innerHeight) / 30000);
	var nodes = document.body.getElementsByClassName('navButton');
	for (var i = 0; i < nodes.length; i++) {
		nodes[i].style.fontSize = size + "px";
	}
	
	var homeTextSize = window.innerHeight / 12;
	var top = window.innerHeight - Math.round(homeTextSize * 6.8);
	
	
	document.getElementById('homeText').style.fontSize = homeTextSize + "px";
	document.getElementById('homeText').style.marginTop = top + "px";
	
	document.getElementById('titleContent').style.fontSize = Math.round(size * 1.5) + 'px';
};

function checkHide() {
	var scrolledOffset = window.scrollY;
	var button = document.getElementById('homeButton');
	if (scrolledOffset > 5) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}

}

function getScrollMultiplier(element) {
	var scrolledAmount = Math.abs(window.pageYOffset - element.getBoundingClientRect().top);
	return 0.001 * scrolledAmount;
}

function Paragraph(content, collumn){
	var p = document.createElement('p');
	p.innerHTML = content;
	document.getElementById('c' + collumn).appendChild(p);
}

function writeAbout(){
	var about = document.getElementById('about');
	new Paragraph("Hello, I am Colton Sandvik, I'm a high school student at Bethany High School. This website is currently pending a lot of changes in the project section.", 1);
}

function openProj(i) {
	if(i == 1) {
		
	}
}

