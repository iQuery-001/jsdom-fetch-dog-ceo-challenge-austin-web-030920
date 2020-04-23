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
    const breedsObj = document.getElementById('dog-breeds');
    let dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', )

    const filteredBreeds = breedsList.filter(breed => breed[0] === filterLetter);

    breedsObj.addEventListener('click', changeColor)

    breedsList.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed;
        breedsObj.appendChild(li);

    });
}


function changeColor(event) {
    event.target.style.color = 'red';
}