function newTabLinks() {
	var links = document.getElementsByTagName('a');
	links.setAttribute("target", "_blank");
}

window.onload = function() {
	newTabLinks();
}
