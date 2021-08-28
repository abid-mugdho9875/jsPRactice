//select button
// const addBorder = document.getElementById('add-border')
const addBackground = document.getElementById('add-background')
const friendName = document.getElementById('friend-name')

//add event handeler
document.getElementById("add-border").addEventListener('click', function () {
    document.getElementById("friends-area").style.border = "thick solid #0000FF";
    console.log('ok')
})