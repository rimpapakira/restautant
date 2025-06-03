// Header Section

const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".hamberger")

menu.addEventListener("click", () =>{
    navRight.classList.toggle("active");
})


// Review Section

var swiper = new Swiper("#mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
