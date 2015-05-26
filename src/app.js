var app = (function() {
	var data = [];

	function add(name, text) {
		data.push({name: name, text: text});
	}

	function update() {
		var result = data.map(function(row) {
			return "<p>" + row.name + ": <i>" + row.text + "</i>";
		});
		document.getElementById('result').innerHTML = result;
	}

	document.addEventListener("DOMContentLoaded", update);

	return {add: add}
})();