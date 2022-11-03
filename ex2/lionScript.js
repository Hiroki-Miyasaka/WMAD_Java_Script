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

var pictures = ["./pictures/lion1.png", "./pictures/lion2.png", "./pictures/lion3.png", "./pictures/lion4.png"]

 for(let i = 0; i < pictures.length; i++){
     // document.getElementsById("images_area") => div
     // document.write() --> write this code for me in the html code
     // innerHTML
    //  let imageArea = document.getElementsById("images_area");
    //  let imageTag = `<img src="${pictures[i]}">`
    //  imageArea.innerHTML = imageTag; // <div>pictures[i];</div>
    // document.getElementById("images_area").innerHTML = "hello";
    document.getElementById("images_area").innerHTML = `<img src="${pictures[i]}">`;
 }