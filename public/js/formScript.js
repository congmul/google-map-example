const startingPointEl = document.getElementById('starting-point');
const destinationPointEl = document.getElementById('destination-point');

const buttons = document.getElementsByClassName('btn');
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = onclickSubmit
}
async function onclickSubmit(event) {
    event.preventDefault();
    initMap(event.target.dataset)
}