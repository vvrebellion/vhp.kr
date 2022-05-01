let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".front-page",
      start: "top",
      end: "100%",
      scrub: "true",
      pin: true,
    },
  });
  
  tl.fromTo(
    ".front-page",
    {
      clipPath: "circle(20%)",
    },
    {
      clipPath: "circle(80%)",
      duration: 2,
    }
  );
  
  tl.fromTo(
    ".music-note",
    {
      scale: 0.074,
    },
    {
      scale: 0,
      opacity: 0,
      duration: 1,
    },
    "-=2"
  );
  
  tl.fromTo(
    ".title",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    }
  );
  
  tl.fromTo(
    ".sub-title",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    }
  );
  
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-page",
      start: "0%",
      end: "100000%",
      scrub: 1,
      pin: true,
      pinSpacing: false,
    },
  });