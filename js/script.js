// Get the image elements
const images = document.querySelectorAll('.grid-image');

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', showSingleImage);
});

// Function to show a single image
function showSingleImage(event) {
  // Get the clicked image source
  const clickedImageSrc = event.target.src;

  // Create a new image element
  const singleImage = document.createElement('img');
  singleImage.src = clickedImageSrc;

  // Clear the existing images in the gallery
  const galleryContainer = document.querySelector('.gallery-container');
  galleryContainer.innerHTML = '';

  // Append the single image to the gallery container
  galleryContainer.appendChild(singleImage);
}
