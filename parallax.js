const midPoint = window.innerHeight / 2;
const sections = document.querySelectorAll("section");
const bodyTag = document.querySelector("body");

const addMovement = function () {
  // Calculate how far down the page, we're down the page
  // and calculate the middle of the viewport
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  // Loop through sections, add 'index' to enable us to
  // distinguish betwween odd and even numbered sections
  sections.forEach((section, index) => {
    // calculate the top of each section on the page
    // and calculate the middle of each section
    const topOfSection = section.offsetTop;
    const middleOfSection = topOfSection - section.offsetHeight / 2;

    // middle of viewport's relation to the middle of
    // each section
    const distanceToMiddle = midViewport - middleOfSection;

    // Weight down distance of the rotation
    let rotation = distanceToMiddle / 100;

    // Weigth the content div so it goes reversr (up rather
    // than down)
    let contentDist = (-1 * distanceToMiddle) / 4;

    // pick the tags
    const image = section.querySelector("img");
    const contentDiv = section.querySelector("div");

    // Rotate all even numbered sections the opposite way
    // by checking of if their 'index' is divisible by 2
    // Use Modulo operator: The remainder is 0 = Even, 1 = Odd
    if (index % 2 == 0) {
      rotation = rotation * -1;
    }

    //apply the parallax effect using rotate and literals
    image.style.transform = `rotate(${rotation}deg)`;
    contentDiv.style.top = `${contentDist}px`;

    // Rotate the content in the opposite direction of the imgs
    contentDiv.style.transform = `rotate(${-1 * rotation}deg)`;

    // 👨‍🎨 BG Color, Check if we've scrolled
    // to the middle of each section - 100,
    // then set the bg color of the body to the data
    // attribute of the section as defined in the HTML
    if (distanceToMiddle > -100) {
      const dataBg = section.getAttribute("data-bg");
      bodyTag.style.backgroundColor = dataBg;
    }
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
