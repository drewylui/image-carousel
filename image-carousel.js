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

var path = 'images/';

var imageSet = {
	image1: 'choc1.jpeg',
	image2: 'choc2.jpeg',
	image3: 'choc3.jpeg',
	image4: 'choc4.jpeg',
	image5: 'choc5.jpeg',
};

var imageCount;
var imageIndex;


// Build a set of hidden divs for each image in the object that is passed in.
function buildCarousel (images) {
	imageCount = 0;
	for (var image in images) {
		divStr = "<div class='image' id='pic" + imageCount + "' style='display:none'><img src='" + path + images[image] + "'></div>"
		console.log(divStr);
		$('#carousel-frame').append(divStr);
		imageCount++;
	}
	
	$('#pic0').show(); // show the first image
	imageIndex = 0; // set the index to 0, as the first image is shown
}

// Show the image at the index that is passed in. Hide all other images.
function showImage(index) {
	var count = 0;
	$('.image').each(function() {
		if (count === index) {
			$(this).show();
		}
		else {
			$(this).hide();
		}
		count++;
	});
}

function prevnextImage(div) {
	if ($(div).attr('id') === 'prev') {
		prevImage();
	}
	else if ($(div).attr('id') === 'next') {
		nextImage();
	}
	else {
		console.log ("Can't identify prev/next div");
	}
}

function prevImage() {
	if (imageIndex === 0) {
		imageIndex = imageCount-1;
	}
	else {
		imageIndex--;
	}
	showImage(imageIndex);
	console.log(imageIndex);
}

function nextImage() {
	if (imageIndex === (imageCount-1)) {
		imageIndex = 0;
	}
	else {
		imageIndex++;
	}
	showImage(imageIndex);
	console.log(imageIndex);
}

$(document).ready(function(){
	console.log("hi");
	buildCarousel(imageSet);
	$('.arrow').on('click',function() {
		prevnextImage(this);
	});
	$('.arrow').hover(function() {
		$(this).css('cursor','pointer');
	});

})






