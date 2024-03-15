const calculateStarRating = (btnId) => {
  //Select star icons
  const stars = document.querySelectorAll(".material-icons");

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
