//image fetch
function loadImageApi() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => loadImage(json))
        .catch(err => console.log(err))
}

//select html element
let imageButton = document.getElementById('img-btn');


function loadImage(data) {
    let imageDiv = document.getElementById('image-section');
    let imageTag = document.createElement('img');

    for (const photo of data) {
        console.log(photo)

        imageTag.src = photo.url
        imageDiv.appendChild(imageTag)
    }

}