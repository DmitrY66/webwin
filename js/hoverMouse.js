let section_3_img_filter = document.querySelectorAll(".section-3-img-filter");
let img_filter_p = document.querySelectorAll(".img-filter-p");
let img_filter = document.querySelectorAll(".img-filter");


for (let i = 0; i < section_3_img_filter.length; i++) {

  section_3_img_filter[i].addEventListener("mouseenter", function (e) {

    for (let j = 0; j < img_filter_p.length; j++) {
      if (i == j) {
        img_filter_p[j].classList.add("fadeInUp");
        img_filter_p[j].style.opacity = 1;
      }
    }

    for (let k = 0; k < img_filter.length; k++) {
      if (i == k) {
        img_filter[k].classList.add("img-filter-hover");
      }
    }

  })

  section_3_img_filter[i].addEventListener("mouseleave", function (e) {

    for (let j = 0; j < img_filter_p.length; j++) {
      if (i == j) {
        img_filter_p[j].classList.remove("fadeInUp");
        img_filter_p[j].style.opacity = 0;
      }
    }

    for (let k = 0; k < img_filter.length; k++) {
      if (i == k) {
        img_filter[k].classList.remove("img-filter-hover");
      }
    }

  })

}
