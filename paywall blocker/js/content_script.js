function cleanup() {
	var colorbox = document.getElementById("colorbox");
	var cboxWrapper = document.getElementById("cboxWrapper");
	var cboxOverlay = document.getElementById("cboxOverlay");
	
	colorbox.parentNode.removeChild(colorbox);
	cboxWrapper.parentNode.removeChild(cboxWrapper);
	cboxOverlay.parentNode.removeChild(cboxOverlay);
}

cleanup()
