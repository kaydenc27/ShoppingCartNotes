const animalListings = [
    { name: "Labrador", cost: 2800, size: "Medium", img: "Labrador.png"},
    { name: "Husky", cost: 3000, size: "Medium", img: "image.png"},
    { name: "Rotweiler", cost: 2500, size: "Medium", img: "Rottweiler.webp"},
    { name: "Golden Retriever", cost: 2750, size: "Medium", img: "Golden Retriever.jpeg"},
    { name: "Chihuahua", cost: 3100, size: "Small", img: "Chihuahua.jpg"},
    { name: "Pomeranian", cost: 2100, size: "Small", img: ""},
    { name: "Pug", cost: 850, size: "Small", img: ""},
    { name: "German Shepherd", cost: 2600, size: "Large", img: ""},
    { name: "Shih Tzu", cost: 5000, size: "Small", img: ""},
    { name: "French Bulldog", cost: 4000, size: "Small", img: ""},
    { name: "Dachshund", cost: 1000, size: "Small", img: ""},
    { name: "Akita", cost: 5000, size: "Medium", img: ""},
    { name: "Beagle", cost: 1800, size: "Medium", img: ""},
    { name: "Belgian Malinois", cost: 3000, size: "Large", img: ""},
    { name: "Boston Terrier", cost: 2700, size: "Small", img: ""},
    { name: "Cane Corso", cost: 3000, size: "Large", img: ""},
    { name: "Bulldog", cost: 1400, size: "Small", img: ""},
    { name: "Dalmation", cost: 1600, size: "Medium", img: ""},
    { name: "Greyhound", cost: 2500, size: "Large", img: ""},
    { name: "Mastiff", cost: 6000, size: "Large", img: ""}
]

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img class ="img"src="${item.img}" alt="" />
        <p>${item.size}</p>
        <p>${item.cost}</p>
      </div> `,
  );
}

animalListings.forEach(inject);

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => 
    button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
    }),
);