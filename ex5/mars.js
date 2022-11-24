let container = document.getElementById("age_select")
var allTheOptions = "";


for (let i = 0; i<100; i++) { 
    allTheOptions += `<option>${i+1}</option>`;
}
console.log(allTheOptions);
container.innerHTML = allTheOptions;