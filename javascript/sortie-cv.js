function retPage(location) {
  gsap.to(".changement-retour", {
    x: -1905,
    duration: 1,
    opacity: 1,
    ease: "slow(0.7, 0.7, false)",
    onComplete: () => {

      document.location.href = location;
      gsap.to(".changement-retour", {
        x: 0,
        delay: 2
      });
    }
  });
};

function RetourchgtPage() {
  gsap.to(".changement", {
    x: -1905,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}


function main() {
  gsap.registerPlugin(ScrollTrigger);

  RetourchgtPage();

  // On set le scroll horizontal sur le div "horizontal-box"
  gsap.to(".horizontal-box", {
    x: innerWidth,
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-box",
      start: "top top",
      end: () => innerWidth,
      scrub: true,
      pin: true
    }
  });

console.log(innerWidth);

  // Animation du logo pour l'apparition au slide
  gsap.to(".logo", {
    opacity: 1,
    duration: 0.2,
    // onComplete: () => {gsap.to(".logo", {opacity: 0})},
    scrollTrigger: {
      trigger: ".page-2",
      scrub: 1,
      start: "30% center",
      end: "bottom center"
    }
  });

  var logo = document.querySelector('.logo');
  logo.addEventListener('mouseover', ev => {
    gsap.to(".logo", {
      rotation: 360,
      ease: "elastic.out(1.2, 0.4)",
      duration: 3
    });
  });

  logo.addEventListener('mouseout', ev => {
    gsap.to(".logo", {
      rotation: 0,
      ease: "elastic.out(1.2, 0.4)",
      duration: 3
    });

  });

  logo.addEventListener('click', ev => {
    retPage("./index.html");
  });

  // Parallax se déplaçant sur la position de la souris
  var divIntro = document.querySelector('.introduction');

  divIntro.addEventListener('mousemove', (ev) => {

    //Retourne la valeur absolue
    var xpos = (Math.abs((screen.width / 2) - ev.pageX));

    xpos = xpos / 70;

    gsap.to(".parallax-1", {
      x: xpos
    });

    xpos = -(ev.pageX / 100);

    gsap.to(".parallax-2", {
      x: xpos
    });

    xpos = (ev.pageX / 50);

    gsap.to(".titre-parallax-1", {
      x: xpos
    });

    xpos = (ev.pageX / 30);

    gsap.to(".titre-parallax-2", {
      x: xpos
    });
  });


  // End main
};

window.addEventListener('load', ev => {
  main();
});
