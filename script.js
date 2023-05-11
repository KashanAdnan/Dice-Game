function getResult() {
  var RandomNumber = Math.floor(Math.random() * 5);

  if (RandomNumber === 0) {
    document.getElementById(
      "result"
    ).innerHTML = `<img src="./images/dice1.png" />`;
  }
  if (RandomNumber === 1) {
    document.getElementById(
      "result"
    ).innerHTML = `<img src="./images/download (1).png" />`;
  }
  if (RandomNumber === 2) {
    document.getElementById(
      "result"
    ).innerHTML = `<img src="./images/download (2).png" />`;
  }
  if (RandomNumber === 3) {
    document.getElementById(
      "result"
    ).innerHTML = `<img src="./images/download.png" />`;
  }
  if (RandomNumber === 4) {
    document.getElementById(
      "result"
    ).innerHTML = `<img src="./images/images (1).png" />`;
  }
  if (RandomNumber === 5) {
    document.getElementById(
      "result"
    ).innerHTML = `<img src="./images/images.png" />`;
  }
}
