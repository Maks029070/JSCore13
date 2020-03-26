function changeBackground() {
	var links = document.getElementsByTagName('a');
	for (let i of links) {
		if (i.href.includes('http://') || i.href.includes('ftp://')) {
			if (i.href.includes('http://internal.com')) {
				continue;
			}
			i.classList.add("external-red");
		}
	}
}