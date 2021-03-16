function chgtPage(location) {
  gsap.to(".changement", {
    xPercent: -100,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
    onComplete: () => {
      gsap.to(".logo-pat", {
        opacity: 1,
        duration: 2,
        onComplete: () => {
          document.location.href = location;
          gsap.to(".logo-pat", {opacity: 0});
          gsap.to(".changement", {x: 0, delay: 2});
          gsap.to(".explication-accueil>span", {opacity: 0});
        }
      });
    }
  });
}

function main() {
  gsap.registerPlugin(ScrollTrigger);

  var doc = document.querySelector('.accueil');

  doc.addEventListener('mousemove', (ev) => {

    var xpos = -(ev.pageX / 50);
    var ypos = -(ev.pageY / 50);

    gsap.to(".av1", {
      x: xpos,
      y: ypos
    });

    xpos = -(ev.pageX / 35);
    ypos = -(ev.pageY / 35);

    gsap.to(".av2", {
      x: xpos,
      y: ypos
    });

    xpos = -(ev.pageX / 40);
    ypos = -(ev.pageY / 40);

    gsap.to(".txtclubvosg", {
      x: xpos,
      y: ypos
    });

  });

  //Retour de chaque autre page:
  gsap.to(".changement-retour", {
    xPercent: -100,
    duration: 1,
    ease: "slow(0.7, 0.7, false)"
  });


  //Animation du sous titre en dessous du menu

  gsap.to(".titre-menu", {
    y: -10,
    duration: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: ".titre-menu",
      toggleActions: "restart"
    }
  });

  //Animation du logo

  gsap.to(".logo", {
    y: 300,
    scrollTrigger: {
      trigger: ".logo",
      start: "top top",
      end: "top 33%",
      endTrigger: ".titre-menu",
      scrub: 1
    }});

  gsap.to(".explication-accueil>span", {
    duration: 1,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".titre-menu",
      start: "center bottom",
      scrub: 1
    }
  });



  // Animation de la Première image: Histoire Chalet
  var divHistoireChalet = document.querySelector('.img-histoire-chalet');

  divHistoireChalet.addEventListener('mouseover', ev => {
    gsap.to(".txtHistoireChalet", {
      duration: 1,
      x: 40,
      ease: "circ.out"
    });
    gsap.to(".fleche-1", {
      duration: 1,
      x: 20,
      ease: "circ.out"
    });
  });

  divHistoireChalet.addEventListener('mouseout', ev => {
    gsap.to(".txtHistoireChalet", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
    gsap.to(".fleche-1", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
  });

  divHistoireChalet.addEventListener('click', ev => {
    document.location.href = "";
  });

  // Animation de la Deuxième image: Refuge du CV

  var divRefugeCV = document.querySelector('.img-refuge-cv');

  divRefugeCV.addEventListener('mouseover', ev => {
    gsap.to(".txtRefugeCV", {
      duration: 1,
      x: 40,
      ease: "circ.out"
    });
    gsap.to(".fleche-2", {
      duration: 1,
      x: 20,
      ease: "circ.out"
    });
  });

  divRefugeCV.addEventListener('mouseout', ev => {
    gsap.to(".txtRefugeCV", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
    gsap.to(".fleche-2", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
  });

  divRefugeCV.addEventListener('click', ev => {
    chgtPage("refuge-chalet.html");
  });

  // Animation de la troisième image: Randonner à Lemberg
  var divRandonnerLemberg = document.querySelector('.img-randonner-lemberg');

  divRandonnerLemberg.addEventListener('mouseover', ev => {
    gsap.to(".txtRandonnerL", {
      duration: 1,
      x: 40,
      ease: "circ.out"
    });
    gsap.to(".fleche-3", {
      duration: 1,
      x: 20,
      ease: "circ.out"
    });
  });

  divRandonnerLemberg.addEventListener('mouseout', ev => {
    gsap.to(".txtRandonnerL", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
    gsap.to(".fleche-3", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
  });

  divRandonnerLemberg.addEventListener('click', ev => {
    chgtPage("randonner-lemberg.html");
  });

  // Animation de la quatrième image: Découvrir Lemberg
  var divDecouvrirLemberg = document.querySelector('.img-decouvrir-lemberg')

  divDecouvrirLemberg.addEventListener('mouseover', ev => {
    gsap.to(".txtDecouvrirL", {
      duration: 1,
      x: 40,
      ease: "circ.out"
    });
    gsap.to(".fleche-4", {
      duration: 1,
      x: 20,
      ease: "circ.out"
    });
  });

  divDecouvrirLemberg.addEventListener('mouseout', ev => {
    gsap.to(".txtDecouvrirL", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
    gsap.to(".fleche-4", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
  });

  divDecouvrirLemberg.addEventListener('click', ev => {
    chgtPage("decouvrir-lemberg.html");
  });

  // Animation de la Cinquième image: Sorties du CV
  var divSortieCV = document.querySelector('.img-sortie-CV');

  divSortieCV.addEventListener('mouseover', ev => {
    gsap.to(".txtSortieCV", {
      duration: 1,
      x: 40,
      ease: "circ.out"
    });
    gsap.to(".fleche-5", {
      duration: 1,
      x: 20,
      ease: "circ.out"
    });
  });

  divSortieCV.addEventListener('mouseout', ev => {
    gsap.to(".txtSortieCV", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
    gsap.to(".fleche-5", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
  });

  divSortieCV.addEventListener('click', ev => {
    chgtPage("sortie-cv.html");
  });

  // Animation de la Sixième image: liens Amis/Contact
  var divLienAmis = document.querySelector('.img-lien-amis');

  divLienAmis.addEventListener('mouseover', ev => {
    gsap.to(".txtLienAmis", {
      duration: 1,
      x: 40,
      ease: "circ.out"
    });
    gsap.to(".fleche-6", {
      duration: 1,
      x: 20,
      ease: "circ.out"
    });
  });

  divLienAmis.addEventListener('mouseout', ev => {
    gsap.to(".txtLienAmis", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
    gsap.to(".fleche-6", {
      duration: 1,
      x: 0,
      ease: "circ.out"
    });
  });

  divLienAmis.addEventListener('click', ev => {
    chgtPage("amis-contact.html");
  });

}

window.addEventListener('load', ev => {
  main();
});
