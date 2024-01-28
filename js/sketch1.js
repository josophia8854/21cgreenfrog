var image = document.getElementById("image");
var images = ["asset/frog2.jpg", "asset/frog3.jpg", "asset/frog4.jpg", "asset/frog5.jpg", "asset/frog1.jpg"];
var index = 0;
function updateImage() {
image.src = images[index];
index = (index + 1) % images.length;
}
setInterval(updateImage, 4000);