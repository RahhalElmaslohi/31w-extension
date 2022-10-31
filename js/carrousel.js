(function(){
console.log('carrousel');
let elmBtnModale = document.querySelector(".btn_modale");
let elmCarrousel = document.querySelector(".carrousel");
let elmBtnModaleFermer = document.querySelector(".btn_fermer");
let elmCarrousel__figure = document.querySelector(".carrousel__figure");


/* ---------------------------------------- Les éléments de la galerie */
  /* Le conteneur principal de la galerie */
  let elmGalerie = document.querySelector(".galerie");
  let elmGalerieImg = document.querySelectorAll(".galerie figure img");

  /* ----------------------------- Étape 1 parcourir les images de la galerie */
  for (const elmImg of elmGalerieImg) {
    console.log(elmImg.getAttribute("src"));
    ajouter_img_carrousel(elmImg) 

    
}

  /**
   * Ajoute une image dans le carrousel
   * @param {*} elmImg  une image de la galerie
   */
   function ajouter_img_carrousel(elmImg) {
    // elmImg représente une image de la galerie */
   
    let elmCarrousel__figure__img = document.createElement("img");
    elmCarrousel__figure__img.setAttribute("src", elmImg.getAttribute("src"));
    elmCarrousel__figure__img.classList.add("carrousel__figure__img");
   
    elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
  }


elmBtnModale.addEventListener("mousedown", function () {
    console.log("bouton boîte modale");
    elmCarrousel.classList.add("carrousel--ouvrir");
    
  });
   //////////////////////////////////////////////////
   elmBtnModaleFermer.addEventListener("mousedown", function () {
    elmCarrousel.classList.remove("carrousel--ouvrir");
  });

})()