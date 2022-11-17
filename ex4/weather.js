// ---navbar---

const navbar = ["Night", "Sunset", "Genus altostratus (AS)", "Monsoons", "Lightning", "Wind", "Rain", "Cloud formation", "Party Cloudy", "Genus cirrus (Ci)", "Drizzle", "Mountain effects", "Haze", "Genus cirrocumulus (Cc)", "Polar deserts", "", "Sunny", "Genus altocumulus (Ac)", "Rainforests"]

let navbarArea = document.getElementById("navbar_area");
let nav = ""
navbar.forEach(function(value){
    nav += `<p>${value}</p>`;
})

navbarArea.innerHTML = nav;


// ---main---

let night = {
    icon: "./images/climate/night.png",
    title: "Night",
    description: 'Night (also described as night time, unconventionally spelled as "nite") is the period of ambient darkness from sunset to sunrise during each 24-hour day, when the Sun is below the horizon. The exact time when night begins and ends depends on the location and varies throughout the year, based on factors such as season and latitude.',
    images: ""
};

let lightning = {
    icon: "./images/climate/lightning.png",
    title: "Lightning",
    description: "Lightning is a naturally occurring electrostatic discharge during which two electrically charged regions, both in the atmosphere or with one on the ground, temporarily neutralize themselves, causing the instantaneous release of an average of one gigajoule of energy. This discharge may produce a wide range of electromagnetic radiation, from heat created by the rapid movement of electrons, to brilliant flashes of visible light in the form of black-body radiation. Lightning causes thunder, a sound from the shock wave which develops as gases in the vicinity of the discharge experience a sudden increase in pressure. Lightning occurs commonly during thunderstorms as well as other types of energetic weather systems, but volcanic lightning can also occur during volcanic eruptions.",
    images: ""
};

let partyCloudy = {
    icon: "./images/climate/party_cloudy.png",
    title: "Party Cloudy",
    description: "In meteorology, a cloud is an aerosol consisting of a visible mass of miniature liquid droplets, frozen crystals, or other particles suspended in the atmosphere of a planetary body or similar space. Water or various other chemicals may compose the droplets and crystals. On Earth, clouds are formed as a result of saturation of the air when it is cooled to its dew point, or when it gains sufficient moisture (usually in the form of water vapor) from an adjacent source to raise the dew point to the ambient temperature.",
    images: ["./images/party_cloudy1", "./images/party_cloudy2", "./images_party_cloudy3"],
};

let haze = {
    icon: "./images/climate/haze.png",
    title: "Haze",
    description: 'Haze is traditionally an atmospheric phenomenon in which dust, smoke, and other dry particulates suspended in air obscure visibility and the clarity of the sky. The World Meteorological Organization manual of codes includes a classification of particulates causing horizontal obscuration into categories of fog, ice fog, steam fog, mist, haze, smoke, volcanic ash, dust, sand, and snow. Sources for particles that cause haze include farming (ploughing in dry weather), traffic, industry, volcanic activity and wildfires. Seen from afar (e.g. an approaching airplane) and depending on the direction of view with respect to the Sun, haze may appear brownish or bluish, while mist tends to be bluish grey instead. Whereas haze often is thought of as a phenomenon occurring in dry air, mist formation is a phenomenon in saturated, humid air. However, haze particles may act as condensation nuclei that leads to the subsequent vapor condensation and formation of mist droplets; such forms of haze are known as "wet haze."',
    images: ""
};

let sunny = {
    icon: "./images/climate/sunny.png",
    title: "Sunny",
    description: "Sunny is a daytime weather condition.",
    images: ""
};

let sunset = {
    icon: "./images/climate/sunset.png",
    title: "Sunset",
    description: "Sunset, also known as sundown, is the daily disappearance of the Sun below the horizon due to Earth's rotation. As viewed from everywhere on Earth (except the North and South poles), the equinox Sun sets due west at the moment of both the Spring and Autumn equinox. As viewed from the Northern Hemisphere, the sun sets to the northwest (or not at all) in the Northern hemisphere's spring and summer, and to the southwest in the autumn and winter; these seasons are reversed for the Southern Hemisphere.",
    images: ""
};

let wind = {
    icon: "./images/climate/wind.png",
    title: "Wind",
    description: "Wind is the natural movement of air or other gases relative to a planet's surface. Winds occur on a range of scales, from thunderstorm flows lasting tens of minutes, to local breezes generated by heating of land surfaces and lasting a few hours, to global winds resulting from the difference in absorption of solar energy between the climate zones on Earth. The two main causes of large-scale atmospheric circulation are the differential heating between the equator and the poles, and the rotation of the planet (Coriolis effect). Within the tropics and subtropics, thermal low circulations over terrain and high plateaus can drive monsoon circulations. In coastal areas the sea breeze/land breeze cycle can define local winds; in areas that have variable terrain, mountain and valley breezes can prevail.",
    images: ""
};

let genusCirrus = {
    icon: "./images/climate/genus_cirrus.png",
    title: "Genus cirrus (Ci)",
    description: 'Night (also described as night time, unconventionally spelled as "nite") is the period of ambient darkness from sunset to sunrise during each 24-hour day, when the Sun is below the horizon. The exact time when night begins and ends depends on the location and varies throughout the year, based on factors such as season and latitude.',
    images: ""
};

let genusCirrocumulus = {
    icon: "./images/climate/genus_cirrocumulus.png",
    title: "Genus cirrocumulus (Cc)",
    description: "Lightning is a naturally occurring electrostatic discharge during which two electrically charged regions, both in the atmosphere or with one on the ground, temporarily neutralize themselves, causing the instantaneous release of an average of one gigajoule of energy. This discharge may produce a wide range of electromagnetic radiation, from heat created by the rapid movement of electrons, to brilliant flashes of visible light in the form of black-body radiation. Lightning causes thunder, a sound from the shock wave which develops as gases in the vicinity of the discharge experience a sudden increase in pressure. Lightning occurs commonly during thunderstorms as well as other types of energetic weather systems, but volcanic lightning can also occur during volcanic eruptions.",
    images: ""
};

let genusAltocumulus = {
    icon: "./images/climate/genus_altocumulus.png",
    title: "Genus altocumulus (Ac)",
    description: 'Haze is traditionally an atmospheric phenomenon in which dust, smoke, and other dry particulates suspended in air obscure visibility and the clarity of the sky. The World Meteorological Organization manual of codes includes a classification of particulates causing horizontal obscuration into categories of fog, ice fog, steam fog, mist, haze, smoke, volcanic ash, dust, sand, and snow. Sources for particles that cause haze include farming (ploughing in dry weather), traffic, industry, volcanic activity and wildfires. Seen from afar (e.g. an approaching airplane) and depending on the direction of view with respect to the Sun, haze may appear brownish or bluish, while mist tends to be bluish grey instead. Whereas haze often is thought of as a phenomenon occurring in dry air, mist formation is a phenomenon in saturated, humid air. However, haze particles may act as condensation nuclei that leads to the subsequent vapor condensation and formation of mist droplets; such forms of haze are known as "wet haze."',
    images: ""
};

let genusAltostratus = {
    icon: "./images/climate/genus_altostratus.png",
    title: "Genus altostratus (As)",
    description: "Sunny is a daytime weather condition.",
    images: ""
};

let rain = {
    icon: "./images/climate/rain.png",
    title: "Rain",
    description: 'Night (also described as night time, unconventionally spelled as "nite") is the period of ambient darkness from sunset to sunrise during each 24-hour day, when the Sun is below the horizon. The exact time when night begins and ends depends on the location and varies throughout the year, based on factors such as season and latitude.',
    images: ["./images/rain1.png", "./images/rain2.png", "./images/rain3.png"]
};

let drizzle = {
    icon: "./images/climate/drizzle.png",
    title: "Drizzle",
    description: "Lightning is a naturally occurring electrostatic discharge during which two electrically charged regions, both in the atmosphere or with one on the ground, temporarily neutralize themselves, causing the instantaneous release of an average of one gigajoule of energy. This discharge may produce a wide range of electromagnetic radiation, from heat created by the rapid movement of electrons, to brilliant flashes of visible light in the form of black-body radiation. Lightning causes thunder, a sound from the shock wave which develops as gases in the vicinity of the discharge experience a sudden increase in pressure. Lightning occurs commonly during thunderstorms as well as other types of energetic weather systems, but volcanic lightning can also occur during volcanic eruptions.",
    images: ""
};

let polarDeserts = {
    icon: "",
    title: "Polar deserts",
    description: "In meteorology, a cloud is an aerosol consisting of a visible mass of miniature liquid droplets, frozen crystals, or other particles suspended in the atmosphere of a planetary body or similar space. Water or various other chemicals may compose the droplets and crystals. On Earth, clouds are formed as a result of saturation of the air when it is cooled to its dew point, or when it gains sufficient moisture (usually in the form of water vapor) from an adjacent source to raise the dew point to the ambient temperature.",
    images: ""
};

let rainforests = {
    icon: "",
    title: "Rainforests",
    description: 'Haze is traditionally an atmospheric phenomenon in which dust, smoke, and other dry particulates suspended in air obscure visibility and the clarity of the sky. The World Meteorological Organization manual of codes includes a classification of particulates causing horizontal obscuration into categories of fog, ice fog, steam fog, mist, haze, smoke, volcanic ash, dust, sand, and snow. Sources for particles that cause haze include farming (ploughing in dry weather), traffic, industry, volcanic activity and wildfires. Seen from afar (e.g. an approaching airplane) and depending on the direction of view with respect to the Sun, haze may appear brownish or bluish, while mist tends to be bluish grey instead. Whereas haze often is thought of as a phenomenon occurring in dry air, mist formation is a phenomenon in saturated, humid air. However, haze particles may act as condensation nuclei that leads to the subsequent vapor condensation and formation of mist droplets; such forms of haze are known as "wet haze."',
    images: ""
};

let monsoons = {
    icon: "./images/climate/monsoons.png",
    title: "Rainforests",
    description: "Sunny is a daytime weather condition.",
    images: ["./images/monsoons1.png", "./images/monsoons2.png", "./images/monsoons3.png"]
};

let cloudFormation = {
    icon: "./images/climate/cloud_formation.png",
    title: "Cloud formation",
    description: "Snow clouds usually occur in the context of larger weather systems, the most important of which is the low-pressure area, which typically incorporate warm and cold fronts as part of their circulation. Two additional and locally productive sources of snow are lake-effect (also sea-effect) storms and elevation effects, especially in mountains.",
    images: ""
};

let mountainEffects = {
    icon: "",
    title: "Mountain effects",
    description: "Orographic or relief snowfall is created when moist air is forced up the windward side of mountain ranges by a large-scale wind flow. The lifting of moist air up the side of a mountain range results in adiabatic cooling, and ultimately condensation and precipitation. Moisture is gradually removed from the air by this process, leaving drier and warmer air on the descending, or leeward, side. The resulting enhanced snowfall,  along with the decrease in temperature with elevation, combine to increase snow depth and seasonal persistence of snowpack in snow-prone areas.",
    images: ""
};


let allTitles = [night, lightning, partyCloudy, haze, sunny, sunset, wind, genusCirrus, genusCirrocumulus, genusAltocumulus, genusAltostratus, rain, drizzle, polarDeserts, rainforests, monsoons, cloudFormation, mountainEffects];

let climateArea = document.getElementById("climate_area");

allTitles.forEach((value) => {
    
})


function createIcon(value){
    let icon = "";
    if(value.icon != ""){
        icon += `<img src=${value.icon} alt=${value.title}>`;
    }
    return icon; 
}

function createTitle(value){
    let title = "";
    if(value.title != ""){
        title += `<h2>${value.title}</h2>`;
    }
    return title;
}

function createDescription(value){
    let description = "";
    if(value.description != ""){
        description += `<p>${value.description}</p>`;
    }
    return description;
}

function createImages(value){
    let images = "";
    if(value.images != ""){
        value.images.forEach((item, index) => {
            images += `<img src=${item} alt=${value.title + (index+1)}`
        })
    }
    return images;
}


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

