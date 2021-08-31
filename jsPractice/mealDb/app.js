const searchField = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';
    if (searchValue == '') {
        alert('ha ha')
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(res => displayResult(res.meals))

    }

}

const displayResult = (meals) => {
    const searchResult = document.getElementById('searchresult');
    searchResult.innerHTML = ''

    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
            `
        <div class="card w-75 h-50 rounded ">
            <img src="${meal.strMealThumb}"    onclick=loadDetails(${meal.idMeal}) class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                
                <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                </div>
        </div>
        `
        searchResult.appendChild(div)
    });

}
const loadDetails = data => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`
    fetch(url)
        .then(res => res.json())
        .then(res => displayDetails(res))

}

function displayDetails(data) {
    console.log(data.meals[0])
    const detailsBtn = document.getElementById('details-button');
    const div = document.createElement('div');
    div.classList.add('modal-dialog')
    div.innerHTML = `
    <div class="card w-75 h-50 rounded ">
            
            <div class="card-body">
                <h5 class="card-title">${data.meals[0].strMeal}</h5>
                
                <p class="card-text">${data.meals[0].strInstructions.slice(0,100)}</p>
                </div>
        </div>
    

    `
    detailsBtn.appendChild(div)
    console.log(detailsBtn)


}