function newTabLinks() {
	var links = document.getElementById('new_tab')
	
	for (var i = 0; i < links.length; i++) {
		links[i].setAttribute("target", "_blank");
	};
}

window.onload = function() {
	newTabLinks();
}
// ul(#social_links & #site_menu) li a 