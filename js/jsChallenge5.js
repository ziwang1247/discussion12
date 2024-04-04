// Hover over the images and display both the image and the alt text on top of the image
// Update the html so that you can tab to all of the images
// When the mouse goes over an image the image should no longer be visible – but it should still take up the same amount of space.

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', function() {
        let altText = img.getAttribute('alt');
    })
})