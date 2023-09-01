const slides = document.getElementsByClassName("slides");

let index = slides.length - 1;

function slideshowHandler() {
  console.log("index is " + index);

  if (index == 0) {
    resetSlideshowHandler();
  }

  slides[index].classList.remove("active");
  index--;

  console.log(`index at the end is ${index}`);
}

function resetSlideshowHandler() {
  console.log("i m in reset");
  // index = slides.length - 1;
  // for (x = index; x >= 0; x--) {
  //   slides[x].classList.add("active");
  // }
  slides[1].classList.add("active");
  // console.log("index now is " + index);
}
