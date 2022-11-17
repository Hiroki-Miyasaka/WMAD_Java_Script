// ---navbar---

const navbar = ["Night", "Sunset", "Genus altostratus (AS)", "Monsoons", "Lightning", "Wind", "Rain", "Cloud formation", "Party Cloudy", "Genus cirrus (Ci)", "Drizzle", "Mountain effects", "Haze", "Genus cirrocumulus (Cc)", "Polar deserts", "", "Sunny", "Genus altocumulus (Ac)", "Rainforests"]

let navbarArea = document.getElementById("navbar_area");
let nav = ""
navbar.forEach(function(value){
    nav += `<p>${value}</p>`
})

navbarArea.innerHTML = nav;


// ---main---

let night = {
    icon: ".images/climate/night.png",
    title: "Night",
    description: 'Night (also described as night time, unconventionally spelled as "nite") is the period of ambient darkness from sunset to sunrise during each 24-hour day, when the Sun is below the horizon. The exact time when night begins and ends depends on the location and varies throughout the year, based on factors such as season and latitude.',
    images:""
};

// let evening = {
//     icon: undefined,
//     title: "Night",
//     description: "lsdkfjalkdfjalkjdfas",
//     images: ["./images/image_name_1.jpg", "/images/image_name_2.jpg"]
    
// }

// let day = {
//     icon: "fa-solid fa-clouds",
//     title: "Night",
//     description: "Lightning is a naturally occurring electrostatic discharge during which two electrically charged regions, both in the atmosphere or with one on the ground, temporarily neutralize themselves, causing the instantaneous release of an average of one gigajoule of energy. This discharge may produce a wide range of electromagnetic radiation, from heat created by the rapid movement of electrons, to brilliant flashes of visible light in the form of black-body radiation. Lightning causes thunder, a sound from the shock wave which develops as gases in the vicinity of the discharge experience a sudden increase in pressure. Lightning occurs commonly during thunderstorms as well as other types of energetic weather systems, but volcanic lightning can also occur during volcanic eruptions.",
//     images: []
// }

// let allSections = [night, day]

// let container = document.getElementById("container")

// allSections.forEach((item) => { 
//     let icon = "";
//     if (item.icon != undefined) { 
//         icon = `<i class="${item.icon}"></i>`
//     } 
    
//     let heading = `<h1>${item.title}</h1>`
//     let paragraph = `<p>${item.description}</p>`
    

//     let allTheImages = ''

//     item.images.forEach((item) => { 
//         allTheImages += `<img src="${item}" class="gallery_image"></img>`
//     })

//     let div = `<div>${icon}<br>${heading}<br>${paragraph}<br>${allTheImages}</div>`

//     container.innerHTML = div
    
// })

