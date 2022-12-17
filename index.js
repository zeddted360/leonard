let barIcon = document.querySelector(".bar-icon");

let barLinks = document.querySelector(".bar-links");

barIcon.addEventListener("click", () => {
    barLinks.classList.toggle("hidden")
})
//console.log(barLinks)