// get both pupils
const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 200 + "px";
    var y = (e.pageY - rect.top) / 200 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});