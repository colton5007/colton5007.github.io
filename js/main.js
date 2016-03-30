function startup() {
	document.getElementById("main").style.width = (window.innerHeight * 0.85 * (400 / 705)) + 'px';
	document.getElementById("main").style.left = (window.innerWidth - (window.innerHeight * 0.80 * (400 / 705))) / 2 + 'px';
	document.getElementById('title').style.left = (window.innerWidth-document.getElementById('title').offsetWidth)/2 + 'px';
}

function buttonClick(id) {
	if (id == 0) {

	} else if (id == 1) {
		
	} else if (id > 1) {

	}
}

function highlight(id) {
	document.getElementById("main").style.backgroundImage = "url('css/as-" + id +".png')";
}

function unhighlight() {
	document.getElementById("main").style.backgroundImage = "url('css/as-o.png')";
}
