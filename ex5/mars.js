// destination 

let container = document.getElementById("destination_select")
var allTheOptions = "";
let planets = ["Mars", "Jupiter", "Mercury", "Saturn"];

planets.forEach(value => {
    allTheOptions += `<option>${value}</option>`;
});

container.innerHTML = allTheOptions;