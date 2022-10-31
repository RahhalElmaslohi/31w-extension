(function(){
console.log('carrousel');
let elmBtnModale = document.querySelector(".btn_modale");
let elmCarrousel = document.querySelector(".carrousel");
let elmBtnModaleFermer = document.querySelector(".btn_fermer");
let elmCarrousel__figure = document.querySelector(".carrousel__figure");
let elmCarrousel__form = document.querySelector(".carrousel__form");


/* ---------------------------------------- Les éléments de la galerie */
  /* Le conteneur principal de la galerie */
  let elmGalerie = document.querySelector(".galerie");
  let elmGalerieImg = document.querySelectorAll(".galerie figure img");

  /* ----------------------------- Étape 1 parcourir les images de la galerie */
  for (const elmImg of elmGalerieImg) {
    console.log(elmImg.getAttribute("src"));
    ajouter_img_carrousel(elmImg)
    ajouter_radio_carrousel() 

    
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

   /**
   * Ajoute un radio bouton dans le carrousel
   */
    function ajouter_radio_carrousel() {
        let elmCarrousel__form__radio = document.createElement("input");
        elmCarrousel__form__radio.setAttribute("name", "carrousel__form__radio");
        elmCarrousel__form__radio.setAttribute("class", "carrousel__form__radio");
        elmCarrousel__form__radio.setAttribute("type", "radio");
        elmCarrousel__form__radio.dataset.index = index;
        index++;
        elmCarrousel__form.appendChild(elmCarrousel__form__radio);
        /* ------------------------ écouteur sur radio pour afficher une nouvelle image */
        elmCarrousel__form__radio.addEventListener("mousedown", function () {
          console.log(this.dataset.index);
    
          if (dernierIndex != -1) {
            elmCarrousel__figure.children[dernierIndex].classList.remove(
              "carrousel__figure__img--activer"
            );
          }
    
          elmCarrousel__figure.children[this.dataset.index].classList.add(
            "carrousel__figure__img--activer"
          );
          console.log(index);
          dernierIndex = this.dataset.index;
        });
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