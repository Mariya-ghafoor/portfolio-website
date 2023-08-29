/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuToggleHandler() {
  console.log("i m in my function");
  var x = document.getElementById("navbar-links");
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
  var w = parseInt(window.innerWidth);
  var x = document.getElementById("navbar-links");
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

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction();
};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }

// Run the script only when DOM is finished loading

window.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");

  // Add a :) to the logo when mouse enters
  logo.addEventListener(
    "mouseenter",
    () => (logo.innerHTML = " Mariya Abdul Ghafoor :)")
  );

  // Remove the :) when mouse leaves
  logo.addEventListener(
    "mouseleave",
    () => (logo.innerHTML = " Mariya Abdul Ghafoor")
  );
});

//******Text appear slowly when page loads  */
// window.onload = function () {
//   let currentTextClass = "";
//   //This will give the id of current navlink
//   const currentHash = window.location.hash;

//   //If user has not yet clicked any link this will be empty then we can assign it 'container__text--home' class
//   if (currentHash == "") {
//     currentTextClass = "container__text--home";
//   } else {
//     console.log(currentHash.slice(1));
//     currentTextClass = "container__text--" + currentHash.slice(1);
//   }
//   console.log(document.getElementsByClassName(currentTextClass)[0]);
//   document
//     .getElementsByClassName(currentTextClass)[0]
//     .classList.add("appear-text");
//   // document
//   //   .getElementsByClassName("container__text--landing")[0]
//   //   .classList.add("appear-text");
// };

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
};
