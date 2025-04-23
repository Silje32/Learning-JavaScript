const toggleButton = document.getElementById("toggle-btn");

/*
 * Switch the background of our website
 */

function themeSwitcher() {
  document.body.classList.toggle("dark-mode");
  console.log("The theme switch button was clicked");
}

toggleButton.addEventListener("click", themeSwitcher);
