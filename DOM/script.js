// Question 1 //

let footer = document.querySelector("footer#footer");
footer.classList.add("footer");

// Question 2 //

let main = document.querySelector("main#main");

let newParagraph = document.createElement("p");
newParagraph.innerHTML =
  "Ceci est un contenu <strong> très important </strong>";

main.appendChild(newParagraph);
// Question 3 //

let allParagraphs = document.querySelectorAll("p");
for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].style.color = "#FF0000";
  allParagraphs[i].classList.replace("paragraph", "text");
}

// Question 4 //

let newList = document.createElement("ul");
newList.setAttribute("id", "important-list");
newList.classList.add("list");

for (let j = 0; j < 4; j++) {
  let newLi = document.createElement("li");
  newLi.classList.add("list__element");
  newLi.dataset.num = j + 1;
  newLi.textContent = "Ceci est l'élément n°" + j;
  newList.appendChild(newLi);
}

let header = document.getElementById("header");
header.appendChild(newList);
