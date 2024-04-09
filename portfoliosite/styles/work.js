let slideIndex = 1;

// Show the first slide by default
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  // Save the updated slideIndex in the browser's localStorage
  localStorage.setItem('slideIndex', slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  // Save the updated slideIndex in the browser's localStorage
  localStorage.setItem('slideIndex', slideIndex);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  Array.prototype.forEach.call(slides, function(slide) {
    slide.style.display = "none";
  });

  // Remove the active class from all dots
  Array.prototype.forEach.call(dots, function(dot) {
    dot.className = dot.className.replace(" active", "");
  });

  // Show the current slide and add the active class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}