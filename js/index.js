// Header Section

const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".hamberger")

menu.addEventListener("click", () =>{
    navRight.classList.toggle("active");
})

// Scroll animation
    const entranceCards = document.querySelectorAll('.dish-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    entranceCards.forEach(card => observer.observe(card));


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
