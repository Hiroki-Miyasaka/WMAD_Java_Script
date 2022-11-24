// destination 

let container = document.getElementById("destination_select")
var allTheOptions = "";
let planets = ["Mars", "Jupiter", "Mercury"];

planets.forEach(value => {
    allTheOptions += `<option>${value}</option>`;
});

container.innerHTML = allTheOptions;