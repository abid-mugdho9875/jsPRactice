const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(json => displayCountries(json))
        .catch(err => console.log(err))

}
loadCountry()
const displayCountries = (data) => {

    const countriesDiv = document.getElementById('countries')
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML =
            `
        <h3> ${country.name} </h3>
        <p> ${country.capital}</p>
        <button onclick="loadByCapital('${country.capital}')"> Details </button>

        `

        countriesDiv.appendChild(div)

    });

}

const loadByCapital = (data) => {
    url = ` https://restcountries.eu/rest/v2/capital/${data}`;
    fetch(url)
        .then(response => response.json())
        .then(json => displayCountriesByCapital(json[0]))
        .catch(err => console.log(err))


}
const displayCountriesByCapital = (data) => {
    console.log(data)
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
    <h3>${data.name}</h3>
    <img src="${data.flag}">`
}