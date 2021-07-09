function hasClass(ele, cls) {
	return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
	if (!hasClass(ele, cls)) ele.className += ' ' + cls;
}

function removeClass(ele, cls) {
	if (hasClass(ele, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		ele.className = ele.className.replace(reg, ' ');
	}
}

//Add event from js the keep the marup clean
function init() {
	document.getElementById('navigator-trigger').addEventListener('click', toggleMenu);
	document.getElementById('navigator-overlay').addEventListener('click', toggleMenu);
}

//The actual fuction
function toggleMenu() {
	var ele = document.getElementsByTagName('body')[0];
	if (!hasClass(ele, 'open')) {
		addClass(ele, 'open');
	} else {
		removeClass(ele, 'open');
	}
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function () {
	if (document.readyState === 'complete') {
		init();
	}
});

var navItem = document.querySelectorAll('.navigator-item');
navItem.forEach((i) => i.addEventListener('click', clickHandle, false));

function clickHandle(e) {
	e.stopPropagation();
	var linkItem = document.querySelectorAll('.navigator-item');
	var frame = document.querySelectorAll('.frame');
	for (i = 0; i < linkItem.length; i++) {
		linkItem[i].parentNode.className = '';
	}
	this.parentNode.classList.add('active');
	const url = this.dataset.ref;
	frame[0].src = url;
}

// toggle navigator item
var navBlocks = document.querySelectorAll('.navigator-block');

function navToggleHandle() {
	this.classList.toggle('active');
}
navBlocks.forEach((e) => {
	e.addEventListener('click', navToggleHandle);
});
