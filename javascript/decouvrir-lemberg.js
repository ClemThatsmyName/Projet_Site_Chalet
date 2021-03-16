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
  macarte = L.map('MapsOpen').setView([lat, lon], 14);
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
  }).addTo(macarte);

  //On ajoute un marqueur à notre latitude et longitude
  var chalet = L.marker([lat, lon])
    .bindPopup('<a href="../refuge-chalet.html" style="color: red;font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Chalet du club Vosgien</a>')
    .addTo(macarte);
  //On ajoute les différents marqueurs des points remarquables
  var marqueurCO = L.marker([49.00653391874575, 7.386530814106136])
    .bindPopup('<a href="#cascade-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Cascade des ondines</a>')
    .addTo(macarte);
  var marqueurHelloh = L.marker([49.0036412881089, 7.38617676251617])
    .bindPopup('<a href="#lavoirH-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Lavoir du Helloch</a>')
    .addTo(macarte);
  var marqueurMatrone = L.marker([49.00112857476931, 7.394577441150814])
    .bindPopup('<a href="#matroneB-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Matrone gallo Romaine</a>')
    .addTo(macarte);
  var marqueurLG = L.marker([48.99851091775016, 7.395527080297053])
    .bindPopup('<a href="#lavoirG-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Lavoir Grébil</a>')
    .addTo(macarte);
  var marqueurStele = L.marker([49.00894355423139, 7.407563827872754])
    .bindPopup('<a href="#steleA-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Stèle Américaine</a>')
    .addTo(macarte);
  var marqueurMai = L.marker([49.01116728614475, 7.410573831610012])
    .bindPopup('<a href="#mailfelsen-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Croix du Mailfelsen</a>')
    .addTo(macarte);
  var marqueurCSH = L.marker([49.01532352807607, 7.418051314578302])
    .bindPopup('<a href="#croix-SH-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Croix Saint Hubert</a>')
    .addTo(macarte);
  var marqueurTR = L.marker([49.017754768737554, 7.419730579821282])
    .bindPopup('<a href="#tombeR-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Tombe Russe</a>')
    .addTo(macarte);
  var marqueurSH = L.marker([49.015261232242274, 7.376261555296821])
    .bindPopup('<a href="#source-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Source Saint Hubert</a>')
    .addTo(macarte);
  var marqueur3FG = L.marker([49.02120904066734, 7.38638155156345])
    .bindPopup('<a href="#rocherF-lien" style="font-family: Poppins, sans-serif; font-weight: 700;font-size: 20px;text-decoration: none;">Le rocher des trois figures</a>')
    .addTo(macarte);
}

function RetourchgtPage() {
  gsap.to(".changement", {
    xPercent: -100,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
    onComplete: () => {
      gsap.to("#MapsOpen", {
        opacity: 1
      });
    }
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
          gsap.to(".changement-retour", {x: 0, delay: 2});
        }
      });
};

function AffichageTitre(nomClasse) {
  gsap.to("." + nomClasse, {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: "." + nomClasse,
      toggleActions: "restart",
      start: "top 80%"
    }
  });
}

window.addEventListener('load', ev => {
  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap();

  RetourchgtPage();

  AffichageTitre("titre-SH");
  AffichageTitre("titre-CSH");
  AffichageTitre("titre-On");
  AffichageTitre("titre-R3F");
  AffichageTitre("titre-SA");
  AffichageTitre("titre-mailfelsen");
  AffichageTitre("titre-LH");
  AffichageTitre("titre-TR");
  AffichageTitre("titre-LG");
  AffichageTitre("titre-MB");
  AffichageTitre("titre-W");


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
    gsap.to("#MapsOpen", {
      opacity: 0
    });
    retPage("./index.html");
  });



  //gsap.to("#MapsOpen", {opacity: 1});
});
