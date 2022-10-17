// Init Controller......................................

var controller = new ScrollMagic.Controller();

// Build Scene...........................................

// var ourScene = new ScrollMagic.Scene({
//   triggerElement: "#project1",
//   duration: "90%",
//   triggerHook: 0.9,
// })
//   .setClassToggle("#project1", "fade-in") // Add Class to #project1..............
//   .addIndicators({
//     name: "Fade Scene",
//     colorTrigger: "Black",
//     // indent: 20,
//     colorStart: "green",
//     colorEnd: "red",
//   }) // This Require a Plugin..................
//   .addTo(controller);

//   Parallax Scene...............................

var slideParallaxScene = new ScrollMagic.Scene({
  triggerElement: ".bcg-parallax",
  triggerHook: 1,
  duration: "100%",
})
  .setTween(TweenMax.from(".bcg", 1, { y: "-50%", ease: Power0.easeNone }))
  .addTo(controller);

// LEFT-SCROLL SECTION.................................................

var tween3 = TweenMax.to("#left", 0.5, { className: "+=left-after" });

var scene = new ScrollMagic.Scene({
  triggerElement: "#left",
  duration: "50%",
  triggerHook: 0.8,
})
  .setTween(tween3)
  // .addIndicators({
  //   name: "Left Scene",
  //   colorTrigger: "Black",
  //   colorStart: "green",
  //   colorEnd: "red",
  // })
  .addTo(controller);

// RIGHT-SCROLL SECTION................................................

var tween4 = TweenMax.to("#right", 0.5, { className: "+=right-after" });

var scene = new ScrollMagic.Scene({
  triggerElement: "#right",
  duration: "50%",
  triggerHook: 0.8,
})
  .setTween(tween4)
  // .addIndicators({
  //   name: "Right Scene",
  //   colorTrigger: "Black",
  //   colorStart: "green",
  //   colorEnd: "red",
  // })
  .addTo(controller);

// SCALE SECTION STARTS.................................................

var tween2 = TweenMax.to("#target2", 0.5, { className: "+=fade-in" });

var scene = new ScrollMagic.Scene({
  triggerElement: "#target2",
  duration: 500,
  triggerHook: 0.7,
})
  .setTween(tween2)
  // .addIndicators()
  .addTo(controller);

// OVERLAP-PINNED SECTION.........................................................

var slides = document.querySelectorAll(".overlap-1");

for (var i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i],
    triggerHook: "onLeave",
    // duration: "200%",
  })
    .setPin(slides[i], { pushFollowers: false })
    // .addIndicators()
    .addTo(controller);
}
