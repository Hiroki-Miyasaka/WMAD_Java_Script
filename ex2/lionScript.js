// var pictures = ["./pictures/lion1.png", "./pictures/lion2.png", "./pictures/lion3.png", "./pictures/lion4.png"]

// for(let i = 0; i < pictures.length; i++){
//     // document.getElementsById("images_area") => div
//     // document.write() --> write this code for me in the html code
//     // innerHTML
//     let imageArea = document.getElementsById("images_area");
//     let imageTag = `<img src="${pictures[i]}">`
//     imageArea.innerHTML = imageTag; // <div>pictures[i];</div>
// }

// let firstName = "Hiroki"
// let fullName = firstName + " Miyasaka"
// let fullName1 = `${firstName} Miyasaka` // string interpolation
// Java -> System.out.println("%s",firstName)


const pictures = ["./pictures/lion1.png", "./pictures/lion2.png", "./pictures/lion3.png", "./pictures/lion4.png"];
let imageArea = document.getElementById("images_area");
let imageTag = "";

for(let i = 0; i < pictures.length; i++){
// //     let imageArea = document.getElementById("images_area");
    imageTag += `<img src=${pictures[i]}>`;

}
console.log(imageArea);
console.log(imageTag);

imageArea.innerHTML = imageTag; 






// const galleryImage = document.getElementsByClassName("gallery_image");
// const Images = [
//    "./pictures/lion1.png",
//    "./pictures/lion2.png",
//    "./pictures/lion3.png",
//    "./pictures/lion4.png",
//  ];

// let image = "";
// for (let i = 0; i < Images.length; i++) {
//   image += `<img src=${Images[i]}>`;
// }

// galleryImage.innerHTML = image;
// console.log(galleryImage);
// console.log(image);