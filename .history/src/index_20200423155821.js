console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => handleImages(json));
});

function handleImages(json) {
    const dogImages = json.message
    const el = document.getElementById('dog-image-container');

    dogImages.forEach(url => {
        
    });
}