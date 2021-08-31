//Function to help user to load
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => displayData(json))
}
//load when dom is loaded
loadUser()
//Display data in DOM
function displayData(data) {
    let displaySection = document.getElementById('post-block');
    for (const post of data) {
        let displayDiv = document.createElement('div');
        displayDiv.classList.add('post')
        displayDiv.innerHTML = `
        <h2 id="title">${post.title}</h2>
        <p id="description">${post.body}</p>`
        displaySection.appendChild(displayDiv)

        console.log(post.title)
    }



}