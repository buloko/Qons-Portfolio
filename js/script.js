// Get all thumbnail images
const thumbnails = document.querySelectorAll('.grid-image');

// Add click event listener to each thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', showFullImage);
});

// Function to show the full-size image
function showFullImage(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag

  // Get the clicked thumbnail image source
  const clickedImageSrc = event.target.src;

  // Create a new image element for the full-size image
  const fullImage = document.createElement('img');
  fullImage.src = clickedImageSrc;
  fullImage.classList.add('full-image'); // Add the "full-image" class

  // Clear the existing image in the container
  const imageContainer = document.querySelector('.image-container');
  imageContainer.innerHTML = '';

  // Append the full-size image to the container
  imageContainer.appendChild(fullImage);

  // Show the image container
  imageContainer.style.display = 'flex';
}

// Get the image container element
const imageContainer = document.querySelector('.image-container');

// Add click event listener to the image container
imageContainer.addEventListener('click', hideFullImage);

// Function to hide the full-size image and image container
function hideFullImage(event) {
  // Check if the click event occurred outside the image
  if (event.target === imageContainer) {
    imageContainer.style.display = 'none';
  }
}

