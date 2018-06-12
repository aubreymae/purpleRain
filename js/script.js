// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var img = document.getElementById('myImg');

// Get the <span> element that closes the modal
var span = document.getElementByClassName("close")[0];

var captionText = document.getElementById("caption");
img.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function()
{
	modal.style.display = "none";
}

window.onclick = function(event)
{
	if (event.target == modal)
	{
		modal.style.display = "none";
	}
}

window.open("https://www.w3schools.com");