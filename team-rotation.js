const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let scrollIndex = 0; // Track the current scroll position as an index

function scrollCarousel(direction) {
  const boxes = document.querySelectorAll('.team-member-box');
  const boxWidth = boxes[0].offsetWidth + 20; // Including the gap
  const visibleCount = Math.floor(carousel.offsetWidth / boxWidth); // Number of visible boxes at once
  const totalBoxes = boxes.length;

  if (direction === 'next') {
    scrollIndex += 1;
    if (scrollIndex >= totalBoxes) {
      scrollIndex = 0; // Loop back to the start
    }
  } else if (direction === 'prev') {
    scrollIndex -= 1;
    if (scrollIndex < 0) {
      scrollIndex = totalBoxes - visibleCount; // Loop to the end
    }
  }

  carousel.scrollTo({
    left: scrollIndex * boxWidth,
    behavior: 'smooth',
  });
}

prevButton.addEventListener('click', () => scrollCarousel('prev'));
nextButton.addEventListener('click', () => scrollCarousel('next'));
