window.onload = function() {
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
}

function displaySection(sectionId, button, color) {
  // Hide all elements with class="tabcontent" by default */
  let sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  let buttons = document.getElementsByClassName("tablink");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(sectionId).style.display = "block";

  // Add the specific color to the button used to open the tab content
  button.style.backgroundColor = color;
}