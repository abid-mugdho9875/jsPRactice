function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => displayData(json))

}
//load user function
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json))
}
//load comments section
function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => displayComments(json))
}
//display data
function displayData(data) {
    let head = document.getElementById('ui');
    let child = document.createElement('h1');
    child.innerHTML = `${data.title}`
    head.appendChild(child);
}
//display user
function displayComments(data) {

    console.log(data)
    let head = document.getElementById('ui');

    for (const user of data) {
        let child = document.createElement('li');
        console.log(user)
        child.innerText = `${user.name}: ${user.id}, ${user.email} `;
        head.appendChild(child);


    }

}