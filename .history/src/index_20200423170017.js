console.log('%c HI', 'color: firebrick')

const breedsList = []

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    // get dog images
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => handleJson(json));

    // get dog breeds
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json));
});

function handleJson(json) {
    const dogImages = json.message
    const list = document.getElementById('dog-image-container');

    dogImages.forEach((url, index) => {
        console.log('URL', url)
        const img = document.createElement('img');
        img.setAttribute('src', url)
        img.setAttribute('id', `dog_${index}`)
        list.appendChild(img)
    });
}

function addBreeds(json) {
    const breeds = json.message;
    breedsList = Object.keys(breeds);
    displayBreeds(breedsList)
}

function displayBreeds(list) {
    const breedsUL = document.getElementById('dog-breeds');
    breedsUL.innerHTML = '';
    breedsUL.addEventListener('click', changeColor)

    list.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed;
        breedsUL.appendChild(li);
    });
}

function changeColor(event) {
    event.target.style.color = 'red';
}

function filterDogs(event) {
    console.log(event.target.value);

    displayBreeds(breedsList.filter((e) => e.startsWith(event.target.value)));
}