var button = document.querySelectorAll(".drum").length;
for (var i = 0; i < button; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonHTML = this.innerHTML;
        playsound(buttonHTML);
        animateOfButton(buttonHTML);
    });
}

document.addEventListener("keydown" , function(pressed){
    var buttonHTML1 = pressed.key;
    playsound(buttonHTML1);
    animateOfButton(buttonHTML1);
})
function playsound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

            }
}
function animateOfButton(key) {
    
var buttonkey = document.querySelector("."+key);
buttonkey.classList.add("pressed");
setTimeout(function(){
    buttonkey.classList.remove("pressed");
}, 100)
}