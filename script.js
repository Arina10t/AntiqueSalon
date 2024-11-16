let bMenu = document.querySelector(".header-mob-lines");
let menuModal = document.querySelector(".menu-modal");
let menuMobNum = document.querySelector(".header-mob-tel");
bMenu.addEventListener("click", function(){
	if (bMenu.classList.contains('active')){
    bMenu.classList.remove('active');
    menuModal.style.display = "none";
		menuMobNum.style.display = "flex";
  } else {
    bMenu.classList.add('active');
    menuModal.style.display = "flex";
		menuMobNum.style.display = "none";
  }
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	spaceBetween: 22,
	slidesPerView: 1.5,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper_mob = new Swiper('.swiper-mob', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	spaceBetween: 10,
	slidesPerView: 1.1,
  // Navigation arrows
	scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
// let swiper_cont = document.querySelector('swiper-wrapper');
// let next_button = document.querySelector('swiper-button-next');
// swiper_cont.addEventListener('mouseover',function(e){
// 	next_button.style.display = "block";
// })

// let wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       0,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
//       // the callback is fired every time an animation is started
//       // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null // optional scroll container selector, otherwise use window
//   }
// );
// wow.init();

// let arrow_prev = document.querySelector('.swiper-button-prev');
// arrow_prev.addEventListener("mouseover", function(){
// 	arrow_prev.style.display = "flex";
// })
// arrow_prev.addEventListener("mouseout", function(){
// 	arrow_prev.style.display = "none";
// })
