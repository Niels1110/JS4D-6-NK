const midPoint = window.innerHeight / 2;
const sections = document.querySelectorAll("section");

const addMovement = function () {
  // Calculate how far down the page, we're down the page
  // and calculate the middle of the viewport
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  sections.forEach((section) => {
    // calculate the top of each section on the page
    // and calculate the middle of each section
    const topOfSection = section.offsetTop;
    const middleOfSection = topOfSection - section.offsetHeight / 2;

    // middle of viewport's relation to the middle of
    // each section
    const distanceToMiddle = midViewport - middleOfSection;

    // pick the tags
    const image = section.querySelector("img");
    const contentDiv = section.querySelector("div");

    //apply the parallax effect using rotate and literals
    image.style.transform = `rotate(${distanceToMiddle / 100}deg)`;
  });
};

// Call addMovement on page load
addMovement();

// Call addMovement on scroll
document.addEventListener("scroll", () => {
  addMovement();
});

// Call addMovement on windowResize, so we can make sure
// to achieve the desired scroll effect regardless of
// browser size

document.addEventListener("resize", () => {
  addMovement();
});

// c
//

//   sections.forEach((section) => {
//     const topPos = section.offsetTop;

//   });
