let number = 0;

const stamps = [
  "assets/circles.svg",
  "assets/heart.svg",
  "assets/moon.svg",
  "assets/rainbow.svg",
  "assets/shooting-star.svg",
  "assets/waves.svg",
];

// Where we want to add the samps
const stampsTag = document.querySelector("div.stamps");

const addStamp = function (x, y) {
  // Create image from scratch
  const img = document.createElement("img");

  img.setAttribute("src", stamps[number]);
  // Add the new img to the stampsTag
  stampsTag.appendChild(img);

  // Place the stamp
  img.style.left = x - window.innerWidth / 2 + "px";
  img.style.top = y + "px";

  //  Loop through the stamps array, restart by the end of it
  number = number + 1;
  if (number > stamps.length - 1) {
    number = 0;
  }

  //   Add Audio on click
  const audio = document.createElement("audio");
  audio.setAttribute("src", "assets/plop.mp3");
  audio.play();
};

document.addEventListener("click", function (event) {
  // On click, capture the pageX and pageY values of the
  // click event and pass it to the addStamp() function
  addStamp(event.pageX, event.pageY);
});
