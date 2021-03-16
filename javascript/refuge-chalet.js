//La librairie Leaflet est un projet open-source permettant d'utiliser des fonctions js pour les cartes, contrairment à google maps
//elle permet d'avoir une carte complète gratuitement, ce qui suffit dans notre utilisation (et convient mieux à une association)
// -- https://leafletjs.com/ --

// On initialise la latitude et la longitude du Chalet (centre de la carte) qu'on aurait pu mettre directement en paramètre de macarte
var lat = 49.00568710008271;
var lon = 7.384707013780214;
//On initialise la variable carte en même temps
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
  // On met les différentes valeurs de la carte puis on l'insère dans l'élément HTML qui a l'ID "MapsOpen"
  macarte = L.map('MapsOpen').setView([lat, lon], 15);
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
  }).addTo(macarte);

  //On ajoute un marqueur à notre latitude et longitude
  var marqueur = L.marker([lat, lon])
  .bindPopup('<p style="font-family: Poppins, sans-serif; font-weight: 500;font-size: 20px;">Chalet du club Vosgien</p>')
  .addTo(macarte);
}

function RetourchgtPage() {
  gsap.to(".changement", {
    xPercent: -100,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

function retPage(location) {
  gsap.to("#MapsOpen", {opacity: 0});

  gsap.to(".changement-retour", {
    xPercent: -100,
    duration: 1,
    opacity: 1,
    ease: "slow(0.7, 0.7, false)",
    onComplete: () => {

          document.location.href = location;
          gsap.to(".changement-retour", {x: 0, delay: 2});
          gsap.to("#MapsOpen", {opacity: 1, delay: 2});
        }
      });
};


function main() {
  RetourchgtPage();

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

  //Animation du div carte de Lemberg pour ouvrir un pdf
  var carteL = document.querySelector('.img-acces-CVL');
  carteL.addEventListener('click', ev => {
    window.open('img/Archive/PlanLemberg.pdf');
  });

}

window.addEventListener('load', ev => {
  initMap();
  main();
});
