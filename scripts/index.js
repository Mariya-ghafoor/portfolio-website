/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuToggleHandler() {
  console.log("i m in my function");
  let x = document.getElementById("navbar-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.flexDirection = "column";
  }
}

//if screen size increases while on hamburger menu we need to close it
function screen_resize() {
  //   // var h = parseInt(window.innerHeight);
  let w = parseInt(window.innerWidth);
  let x = document.getElementById("navbar-links");
  console.log("screen resize");

  if (w > 641) {
    x.style.display = "flex";
    x.style.flexDirection = "row";
    console.log("screen widened");
  }
  if (w <= 641) {
    x.style.display = "none";
  }
}

//*****Highlight the nav link of current page *****/
let lastActiveLinkClassList = 0;
const navLinkHandler = (event) => {
  //Remove the active class from last clicked link
  if (lastActiveLinkClassList != 0) {
    lastActiveLinkClassList.remove("active");
  }

  //Add the active class to the current clicked link
  event.target.classList.add("active");
  lastActiveLinkClassList = event.target.classList;

  // Close the hamburger menu after a link is clicked only if we are on small screen size
  let w = parseInt(window.innerWidth);
  if (w <= 641) menuToggleHandler();
};
