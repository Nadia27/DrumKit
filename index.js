// Store NodeList in array
var drums = document.getElementsByClassName("drum");

// If it contains items
if (drums.length > 0) {
  // Loop through each item and addEventListener
  for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleClick);
  }
}

// Handle button mouse clicks
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  soundPlayback(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Detect keyboard presses
document.addEventListener("keypress", function(event) { //callback function
  soundPlayback(event.key);
  buttonAnimation(event.key);

});

// Create function that play sound according to letter or button clicks
function soundPlayback(key) {
  switch (key) {
    case "w":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "a":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// Button animations w/ timer
function buttonAnimation (currentKey) {

  // Grab class attribute of button pressed
  var activeButton = document.querySelector("." + currentKey);

  // Add a class of "pressed" to active button
  activeButton.classList.add("pressed");

  // Apply animation for 1 second
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000);
}
