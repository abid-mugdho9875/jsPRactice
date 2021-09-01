//select button
const randomUser = document.getElementById('user-search')
const loadUser = () => {
    //Fetch api from server
    fetch(`https://randomuser.me/api/?results=5000`)
        .then(res => res.json())
        .then(res => displayUser(res))
}

//display function
const displayUser = (data) => {
    const displayDetails = document.getElementById('displayDetails');
    const User = data.results
    // console.log(User)
    User.forEach(element => {
        console.log(element)
        const getImage = element.picture;
        const getName = element.name;
        const getLocation = element.location;
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <div class="w-50 h-50 mx-auto">
        <img src="${getImage.thumbnail}" class="card-img-top img-fluid" alt="...">
        </div>
       
        <div class="card-body mx-auto">
            <h5 class="card-title text-center">${getName.title,getName.last}</h5>
            <h6 class="card-text">${getLocation.country}</h6>
            <p class="card-text">${getLocation.city}</p>
            <p class="card-text">Email: ${element.email}</p>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `
        displayDetails.appendChild(div)


    });

}