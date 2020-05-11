
var drm = document.getElementsByClassName("drum");
var audio;
for(var i =0; i<drm.length;i++){
    //FOR BUTTON PRESS.
    drm[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
    });
}

// FOR KEYBOARD PRESS.
document.addEventListener("keydown", function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
    case "w":
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "k":
    audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "l":
        audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    }
    buttonAnimation(key);
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150);
}