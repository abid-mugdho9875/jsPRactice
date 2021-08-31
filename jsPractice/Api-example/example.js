//select button
let kanyeBtn = document.getElementById('get-api')
//load api function
const loadKanyeWest = () => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(json => displayQuotes(json))
        .catch(err => console.log(err))

}
const displayQuotes = (data) => {
    let blockQuotes = document.getElementById('quote');
    blockQuotes.innerText = data.quote;
}