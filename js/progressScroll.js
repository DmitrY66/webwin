const hl_1 = document.querySelector(".hl-1");
const hl_2 = document.querySelector(".hl-2");
const hl_3 = document.querySelector(".hl-3");
const hl_4 = document.querySelector(".hl-4");
const hl_5 = document.querySelector(".hl-5");
const section_1_1_span = document.querySelector(".section-1-1 span");
const section_1_2_span = document.querySelector(".section-1-2 span");
const section_1_a = document.querySelector(".section-1 a");
const section_2_1_span = document.querySelector(".section-2-1 span");
const section_2_2_span = document.querySelector(".section-2-2 span");
const section_3_container_1_h6 = document.querySelector(".section-3-container-1 h6");
const section_3_container_1_h4 = document.querySelector(".section-3-container-1 h4");
const section_3_flex = document.querySelector(".section-3-flex");
const btn_up = document.querySelector(".btn-up");
const myFooter_h6 = document.querySelector(".myFooter h6");
const myFooter_h4 = document.querySelector(".myFooter h4");
const myFooter_form = document.querySelector(".myFooter form");

window.addEventListener("scroll", progressBar);

function progressBar(e) {
  let windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progScroll = (windowScroll / windowHeight) * 100;

  if (progScroll <= 10) {
    hl_1.classList.add("active-hl");
  } else {
    hl_1.classList.remove("active-hl");
  }

  if (progScroll > 10) {
    hl_2.classList.add("active-hl");
    section_1_1_span.classList.add("a_fadeInLeft");
    section_1_1_span.classList.remove("section-1-span-hidden");
    section_1_2_span.classList.add("a_fadeInRight");
    section_1_2_span.classList.remove("section-1-span-hidden");
    section_1_a.classList.add("a_move_in_down");
    section_1_a.classList.remove("section-1-span-hidden");
    btn_up.classList.add("btn-up-vis");
  } else {
    hl_2.classList.remove("active-hl");
    btn_up.classList.remove("btn-up-vis");
  }

  if (progScroll > 35) {
    hl_2.classList.remove("active-hl");
    hl_3.classList.add("active-hl");
    section_2_1_span.classList.add("a_fadeInLeft");
    section_2_1_span.classList.remove("section-2-span-hidden");
    section_2_2_span.classList.add("zoomIn");
    section_2_2_span.classList.remove("section-2-span-hidden");
  } else {
    hl_3.classList.remove("active-hl");
  }

  if (progScroll >= 50) {
    hl_3.classList.remove("active-hl");
    hl_4.classList.add("active-hl");
    section_3_container_1_h6.classList.add("a_fadeInLeft");
    section_3_container_1_h6.classList.remove("section-3-hidden");
    section_3_container_1_h4.classList.add("a_fadeInRight");
    section_3_container_1_h4.classList.remove("section-3-hidden");
    section_3_flex.classList.add("zoomInUp");
    section_3_flex.classList.remove("section-3-hidden");
  } else {
    hl_4.classList.remove("active-hl");
  }

  if (progScroll >= 86) {
    hl_4.classList.remove("active-hl");
    hl_5.classList.add("active-hl");
    myFooter_h6.classList.add("a_fadeInRight");
    myFooter_h6.classList.remove("myFooter-hidden");
    myFooter_h4.classList.add("a_fadeInLeft");
    myFooter_h4.classList.remove("myFooter-hidden");
    myFooter_form.classList.add("flipInX");
    myFooter_form.classList.remove("myFooter-hidden");
  } else {
    hl_5.classList.remove("active-hl");
  }
}
