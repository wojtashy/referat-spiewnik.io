let menuIsVisible = false;
function menuDisplay(){
    let menu = document.querySelector(".menu");
    menuIsVisible ? menu.style.left = "-80vw" : menu.style.left = "0"
    menuIsVisible = !menuIsVisible;
    menu.classList.toggle("burger--active");
}
var currentFontSize = 16;
function fontSize(type){
    if(type === "increase"){
        document.querySelector(".song").style.fontSize = (currentFontSize + 1) + "px";
        currentFontSize +=1;
    }
    if(type === "decrease"){
        document.querySelector(".song").style.fontSize = (currentFontSize - 1) + "px";
        currentFontSize -=1;
    }
}