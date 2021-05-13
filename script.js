window.addEventListener("load", function(){
	var nodes = document.querySelectorAll("article > *");
	for(var i=0; i<nodes.length; i++){
		var clone = nodes[i].cloneNode(true);
		var newNode = document.createElement("span");
		newNode.setAttribute("data-tag",clone.tagName.toLowerCase());
		newNode.appendChild(clone);
		nodes[i].parentNode.replaceChild(newNode, nodes[i]);
	}
});
