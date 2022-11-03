const pictures = ["./pictures/lion1.png", "./pictures/lion2.png", "./pictures/lion3.png", "./pictures/lion4.png"]

for(let i = 0; i < pictures.length; i++){
    document.getElementsByClassName("images_area").innerHTML = pictures[i];
}