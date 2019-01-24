function handleClick () {
  alert("I was clicked");
}

var drums = document.getElementsByClassName("drum");

if (drums.length > 0) {
  for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleClick);
  }
}
