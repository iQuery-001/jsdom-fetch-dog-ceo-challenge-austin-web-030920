console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => handleJson(json));
});

function handleJson(json) {
    const dogImages = json.message
    const el = document.getElementById('dog-image-container');

    dogImages.forEach(url => handleImages);
}

function handleImages(url) {
    console.log('URL', url)
    const img = document.createElement('img')
}