function RetourchgtPage() {
  gsap.to(".changement", {
    xPercent: -100,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

function retPage(location) {
  gsap.to(".changement-retour", {
    xPercent: -100,
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

function main() {
  RetourchgtPage();

  gsap.to(".stitre-lienAmis>p", {
    y: 0,
    duration: 1,
    opacity: 1,
  });

  gsap.to(".stitre-contact>p", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".stitre-contact>p",
      toggleActions: "restart"
    }
  });

  // Animation du logo permettant de retourner à l'accueil
  var logo = document.querySelector('.logo');
  logo.addEventListener('mouseover', ev => {
    gsap.to(".logo", {
      rotation: 360,
      ease: "elastic.out(1.2, 0.4)",
      duration: 3
    });

    gsap.to(".retour-accueil", {
      y: 30,
      ease: "power1.in",
      duration: 0.2,
      opacity: 1
    });
  });

  logo.addEventListener('mouseout', ev => {
    gsap.to(".logo", {
      rotation: 0,
      ease: "elastic.out(1.2, 0.4)",
      duration: 3
    });

    gsap.to(".retour-accueil", {
      y: 0,
      ease: "power1.in",
      duration: 0.2,
      opacity: 0
    });
  });

  logo.addEventListener('click', ev => {
    retPage("./index.html");
  });
}

window.addEventListener('load', main());
