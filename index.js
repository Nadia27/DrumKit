// Store NodeList in array
var drums = document.getElementsByClassName("drum");

// If it contains items
if (drums.length > 0) {
  // Loop through each item and addEventListener
  for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleClick);
  }
}

function handleClick () {
  alert("I was clicked");
}
