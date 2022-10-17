window.addEventListener('DOMContentLoaded', function () {

  //Menu
  const burgerBtn = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close');

  let tlMenu = gsap.timeline({paused: true});

  tlMenu.fromTo('.menu', {
    y: 100
  }, {
    y: 0,
    duration: .6,
    opacity: 1,
    visibility: 'visible',
  });

  tlMenu.from('.menu__top', {
    y: -100,
    opacity: 0,
    duration: .4,
    ease: "circ"
  }, "-=.4");

  tlMenu.from('.menu__nav', {
    y: 100,
    opacity: 0,
    duration: .5,
    ease: "circ"
  });

  tlMenu.from('.social, .menu__right', {
    y: 100,
    opacity: 0,
    duration: .3,
    ease: "circ"
  });

  burgerBtn.onclick = function() {
    tlMenu.play();
  }

  closeBtn.onclick = function() {
    tlMenu.reverse();
  }

  //Loading page
  gsap.from('.hero__title, .hero__btn', {
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from('.hero__descr', {
    opacity: 0,
    duration: 1,
    delay: .6,

  });

  gsap.from('#photo1', {
    opacity: 0,
    scale: .8,
    duration: .7,
    delay: .8,
  });

  gsap.from('#photo2', {
    opacity: 0,
    scale: .8,
    duration: .7,
    delay: 1,
  });

  gsap.from('#photo3', {
    opacity: 0,
    scale: .8,
    duration: .7,
    delay: 1.2,
  });

  gsap.from('.photos__author', {
    opacity: 0,
    duration: .7,
    delay: 1.2,
  });

})
