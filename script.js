function locomitiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.8, // Reduced multiplier to make scrolling less sensitive
    lerp: 0.1, // Adjust lerp for smoother scrolling
    getDirection: true,
    inertia: 0.5 // Added inertia for more natural scrolling
  });

  // Sync ScrollTrigger with Locomotive Scroll
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // Refresh ScrollTrigger and update LocomotiveScroll
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // Clean up on resize
  window.addEventListener("resize", () => {
    locoScroll.update();
    ScrollTrigger.refresh();
  });
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      var interval = setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
          clearInterval(interval);
        }
      }, 27);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 0,
    
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 2,
    delay: 0,
  });
  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    duration: 0.6,
    ease: "power4.out",
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
  tl.from("#hero1 , #page2", {
    opacity:1,
    
  },"-=1.2");
}

// function cursorAnimation() {
//   document.addEventListener("mousemove", function (dets) {
//     gsap.to("#crsr", {
//       left: dets.x,
//       top: dets.y,
//     });
//   });

//   // Only initialize Shery if it's available
//   if (typeof Shery !== 'undefined') {
//     Shery.makeMagnet("#nav-part2 h4");
//   }
// }

// Initialize everything after the page loads
window.addEventListener('DOMContentLoaded', function() {
  loadingAnimation();
  cursorAnimation();
  
  // Initialize Locomotive Scroll after a short delay to ensure everything is loaded
  setTimeout(locomitiveAnimation, 500);
});

function sheryAnimation(){
  Shery.imageEffect(".image-div",{
    style:5,
    debugger:true,
    gooey:true
  })
}
sheryAnimation()