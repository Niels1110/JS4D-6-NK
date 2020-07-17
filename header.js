const headerLogo = document.querySelector("header img");

document.addEventListener("scroll", () => {
  const distScrolled = window.pageYOffset;
  if (distScrolled > 80) {
    headerLogo.classList.add("small");
  } else {
    headerLogo.classList.remove("small");
  }
});
