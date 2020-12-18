document.querySelector(".hamburger").addEventListener("click", function (e) {
  e.preventDefault();
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
    document.querySelector("#nav-m").classList.remove("nav-main_active");
  }
  else {
    this.classList.add("is-active");
    document.querySelector("#nav-m").classList.add("nav-main_active");
  }
});
