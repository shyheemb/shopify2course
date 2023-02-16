const mobileMenuTL = gsap.timeline({
  
});
mobileMenuTL
  .fromTo(
    "#mobile-menu",
    {
      x: "-100%",
    },
    {
      x: 0,
      duration: .8,
    }
  )
  .fromTo(
    "#mobile-menu .menu .link",
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .2
    }
  );
  const openMobileMenu = document.querySelector(".open-mobile-menu");
openMobileMenu.addEventListener("click", () => {
  console.log("openMobileMenu");
  mobileMenuTL.play();
});
const closeMobileMenu = document.querySelector(".closing-mobile-menu");
closeMobileMenu.addEventListener("click", () => {
  console.log("closeMobileMenu");
  mobileMenuTL.reverse();
});
mobileMenuTL.pause();
/* END Mobile Menu ANIMATION */