var favicon_images = [
                    '../images/favicons/favicon1.gif',
                    '../images/favicons/favicon2.gif',
                    '../images/favicons/favicon3.gif',
                    '../images/favicons/favicon4.gif',
                    '../images/favicons/favicon5.gif',
                    '../images/favicons/favicon6.gif',
                    '../images/favicons/favicon7.gif',
                ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
    
	// If last image then goto first image
	// Else go to next image    
	if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 200);
