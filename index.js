let rating = 0;

const calculateStarRating = (btnId, action) => {
  //Select star icons
  const stars = document.querySelectorAll(".material-icons");

  //Only save rating when start is clicked. Ignore on hover since you don't want to save preview state.
  if (action === "save") rating = btnId.slice(4);

  //Determine stars length based on button selection
  let starLength = btnId.slice(4) / 2;

  // Handles full and empty stars
  for (let i = 0; i < stars.length; i++) {
    if (i < Math.floor(starLength)) {
      stars[i].textContent = "star";
    } else {
      stars[i].textContent = "star_border";
    }
  }

  //Handles final half star
  if (starLength % 1 !== 0)
    stars[Math.floor(starLength)].textContent = "star_half";
};

const btnElements = document.querySelectorAll(".btn");

btnElements.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    calculateStarRating(btn.id);
  });

  btn.addEventListener("mouseleave", () => {
    calculateStarRating(`btn-${rating}`);
  });
});
