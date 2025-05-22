function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu) menu.classList.toggle("open");
  if (icon) icon.classList.toggle("open");
}

window.addEventListener("load", () => {
  const bufferingScreen = document.getElementById("buffering-screen");
  if (!bufferingScreen) return;

  if (!sessionStorage.getItem('bufferingSeen')) {
    setTimeout(() => {
      bufferingScreen.classList.add("swipe-up");

      setTimeout(() => {
        bufferingScreen.remove();
        document.body.style.overflow = "auto";
        sessionStorage.setItem('bufferingSeen', 'true');
        document.querySelector('#something')?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }, 1600);
  } else {
    bufferingScreen.remove();
    document.body.style.overflow = "auto";
    document.querySelector('#something')?.scrollIntoView({ behavior: 'smooth' });
  }
});

