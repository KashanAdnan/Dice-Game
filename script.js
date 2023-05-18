function getResult() {
  var RandomNumber = Math.floor(Math.random() * 5);
  let arr = [
    "dice1.png",
    "images.png",
    "download.png",
    "download (1).png",
    "download (2).png",
    "images (1).png",
  ];
  var number = document.getElementById("number");
  var image = document.getElementById("result");
  image.src = `./images/${arr[RandomNumber]}`;
  number.innerHTML = `You Have ${RandomNumber + 1}`;
}
