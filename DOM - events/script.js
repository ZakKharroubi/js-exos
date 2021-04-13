"use strict";

// Créer des events listeners pour :
// au clic dans #wrapper (n'importe où), dupliquer le <span>

let span = document.getElementsByTagName("span");
let wrapper = document.getElementById("wrapper");

span[0].addEventListener("click", function () {
  let newSpan = span[0].cloneNode(true);
  wrapper.appendChild(newSpan);
});

// au clic sur le lien #inner, ajouter dans la console le texte "Le lien a été cliqué", mais sans dupliquer le span

let inner = document.getElementById("inner");
inner.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Le lien a été cliqué");
});

// lorsqu'on tape quelque chose dans le champ email, afficher le contenu du champ #email dans #form-result (pendant que l'on tape ou lorsqu'on sort du champ)
let email = document.getElementById("email");
let formResult = document.getElementById("form-result");
email.oninput = function (event) {
  event.preventDefault();
  formResult.innerHTML = email.value;
};

// ajouter (en js) l'attribut type="submit" au bouton et afficher le contenu du champ email quand le formulaire est soumis (et éviter le rechargement de la page)
let button = document.getElementsByTagName("button");
button.setAttribute("type", "submit");
