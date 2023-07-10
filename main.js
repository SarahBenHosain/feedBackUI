//sélectionne tous les éléments de la page et les stocke dans la variable
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";
//met à jour la notation sélectionnée lorsqu'un élément de classe "rating" est cliqué en ajoutant la classe "active" à l'élément et à son parent
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();//les autres éléments de classe "rating" perdent la classe "active"
    selectedRating =
    event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});
//quand je clique sur le buton un message est mit à jour selon l'id
btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}