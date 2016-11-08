var menu;

function loadMenu() {
	var json_path = "menu.json";

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', json_path, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			//console.log(xobj.responseText);
			//callback(xobj.responseText);
			test(xobj.responseText);
		}
	};
	xobj.send();	

	function test(text) {
		this.menu = JSON.parse(text);
		drawMenu();
	}

}

function drawMenu() {
	for (ii = 0; ii < menu.menu.length; ii++) {
		var jj = document.createElement("li");
		jj.innerHTML = menu.menu[ii].category;
		document.getElementById('ul1').appendChild(jj);
	}

}