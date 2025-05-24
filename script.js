const images = [
    "images/arch wallpaper.jpg",
    "images/are-wallpaper.jpg",
    "images/images.steamusercontent.jpg"
]
let i=0;

const current = document.querySelector("#slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

function updateImage()
{
    current.src = images[i];
}
next.addEventListener("click", function(){
    i++;
    if(i >= images.length)
    {
        i = 0;
    }
    updateImage();
});
prev.addEventListener("click",function(){
    i--;
    if(i <0)
    {
        i = images.length -1;
    }
    updateImage();
});