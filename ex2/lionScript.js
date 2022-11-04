const images = ["./pictures/lion1.png", "./pictures/lion2.png", "./pictures/lion3.png", "./pictures/lion4.png"];
let imageArea = document.getElementById("images_area");
let imageTag = "";

for(let i = 0; i < images.length; i++){
    imageTag += `<img src=${images[i]}>`;

}
console.log(imageArea);
console.log(imageTag);

imageArea.innerHTML = imageTag; 

function clickEvent(){
    window.alert("lion");
}