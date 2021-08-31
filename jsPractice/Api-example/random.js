//load api from server
const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(json => displayRandomUser(json))
        .catch(err => console.log(err))

}
//load DOM
loadRandomUser()
//display random user
const displayRandomUser = (data) => {
    let randomDiv = document.getElementById('random-user');
    const buddies = data.results
    for (const user of buddies) {
        let createPtag = document.createElement('p')
        console.log(user.name.last)
        createPtag.innerText = `${user.name.title}  ${user.name.last} :::: ${user.email}`
        randomDiv.appendChild(createPtag);
    }


}