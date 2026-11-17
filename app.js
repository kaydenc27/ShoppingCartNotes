const animalListings = [
    { name: "Labrador", cost: 2800, size: "Medium", img: "Labrador.png"},
    { name: "Husky", cost: 3000, size: "Medium", img: "husky.webp"},
    { name: "Rotweiler", cost: 2500, size: "Medium", img: "Rottweiler.webp"},
    { name: "Golden Retriever", cost: 2750, size: "Medium", img: "Golden Retriever.jpeg"},
    { name: "Chihuahua", cost: 3100, size: "Small", img: "Chihuahua.jpg"},
    { name: "Pomeranian", cost: 2100, size: "Small", img: "Pomeranian.avif"},
    { name: "Pug", cost: 850, size: "Small", img: "Pug.jpg"},
    { name: "German Shepherd", cost: 2600, size: "Large", img: "German Shepherd.avif"},
    { name: "Shih Tzu", cost: 5000, size: "Small", img: "Shih Tzu.webp"},
    { name: "French Bulldog", cost: 4000, size: "Small", img: "French Bulldog.webp"},
    { name: "Dachshund", cost: 1000, size: "Small", img: "Dachshund.jpg"},
    { name: "Akita", cost: 5000, size: "Medium", img: "Akita.avif"},
    { name: "Beagle", cost: 1800, size: "Medium", img: "Beagle.jpg"},
    { name: "Belgian Malinois", cost: 3000, size: "Large", img: "Belgian Malinois.webp"},
    { name: "Boston Terrier", cost: 2700, size: "Small", img: "Boston Terrier.jpg"},
    { name: "Cane Corso", cost: 3000, size: "Large", img: "Cane Corso.jpg"},
    { name: "Bulldog", cost: 1400, size: "Small", img: "Bulldog.jpg"},
    { name: "Dalmation", cost: 1600, size: "Medium", img: "Dalmation.avif"},
    { name: "Greyhound", cost: 2500, size: "Large", img: "Greyhound.jpg"},
    { name: "Mastiff", cost: 6000, size: "Large", img: "Mastiff.jpg"}
]

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-item="${item.name}">
        <h2 class="card-header">${item.name}</h2>
        <img class ="img"src="${item.img}" alt="" />
        <p>${item.size}</p>
        <p>${item.cost}</p>
        <button class="btn">Add to Cart</button>
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