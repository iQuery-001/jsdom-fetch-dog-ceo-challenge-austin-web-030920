console.log('%c HI', 'color: firebrick');
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breedsList = [];
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dog-breeds').addEventListener('click', changeColor);
  let dropdown = document.getElementById('breed-dropdown');
  dropdown.addEventListener('change', filterDogs);
  // get four dog images
  fetch(imgUrl)
    .then((response) => response.json())
    .then(addDogImages);
  // get all the breeds
  fetch(breedUrl)
    .then((res) => res.json())
    .then(addBreeds);
});
function changeColor(event) {
  event.target.style.color = 'red';
}
function addDogImages(json) {
  const images = json.message;
  const list = document.getElementById('dog-image-container');
  images.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    list.appendChild(img);
  });
}
function addBreeds(json) {
  const breedsObj = json.message;
  breedsList = Object.keys(breedsObj);
  displayBreeds(breedsList);
}
function displayBreeds(list) {
  const breedsUl = document.getElementById('dog-breeds');
  breedsUl.innerHTML = '';
  list.forEach((breed) => {
    const li = document.createElement('li');
    li.innerText = breed;
    breedsUl.appendChild(li);
  });
}
function filterDogs(event) {
  displayBreeds(breedsList.filter((e) => e.startsWith(event.target.value)));
}