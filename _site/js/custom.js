
window.onload = function() {
	newTabLinks();
}


function newTabLinks() {
	var links = document.getElementsByTagName('a');
	links.setAttribute("target", "_blank");
}