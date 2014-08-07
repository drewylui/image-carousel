/*
Stage 1: Build a set of divs for each image, style the divs
Stage 2: Hide all images and show one at a time
Stage 3: Implement left/right controls
Stage 4: Build a set of 'circle' controls for each image div that can be clicked to show the div
Stage 5: Implement settimeout to automatically show images
Extra
Stage 6: Read an image file from directory, create a div referencing the image. See http://jqfaq.com/how-to-load-all-files-from-directory-using-jquery/
Stage 7: Read all image files from directory, build a set of divs referencing the images, style the divs

*/

var path = 'images/'

var imageSet = {
	image1: 'choc1.jpeg',
	image2: 'choc2.jpeg',
	image3: 'choc3.jpeg',
	image4: 'choc4.jpeg',
	image5: 'choc5.jpeg',
};

function buildCarousel (images) {
	var count = 0;
	for (var image in images) {
		divStr = "<div class='image' id='pic" + count + "''><img src='" + path + images[image] + "'></div>"
		console.log(divStr);
		$('#carousel-frame').append(divStr);
	}
}


$(document).ready(function(){
	console.log("hello");
	buildCarousel(imageSet);
})






