for (var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHtml = this.innerHTML;
    buttonAnimation(buttonInnerHtml);
    switch (buttonInnerHtml) {
      case 'w':
          new Audio("sounds/crash.mp3").play();
        break;
      case 'a':
          new Audio("sounds/kick-bass.mp3").play();
        break;
      case 's':
          new Audio("sounds/snare.mp3").play();
        break;
      case 'd':
          new Audio("sounds/tom-1.mp3").play();
        break;
      case 'j':
          new Audio("sounds/tom-2.mp3").play();
        break;
      case 'k':
          new Audio("sounds/tom-3.mp3").play();
        break;
      case 'l':
          new Audio("sounds/tom-4.mp3").play();
        break;
      default: console.log(buttonInnerHtml);

    }
  })
}

document.addEventListener("keydown", function(event){
  buttonAnimation(event.key);
  var alphab = event.key;

  switch (alphab) {
    case 'w':
        new Audio("sounds/crash.mp3").play();
      break;
    case 'a':
        new Audio("sounds/kick-bass.mp3").play();
      break;
    case 's':
        new Audio("sounds/snare.mp3").play();
      break;
    case 'd':
        new Audio("sounds/tom-1.mp3").play();
      break;
    case 'j':
        new Audio("sounds/tom-2.mp3").play();
      break;
    case 'k':
        new Audio("sounds/tom-3.mp3").play();
      break;
    case 'l':
        new Audio("sounds/tom-4.mp3").play();
      break;
    default: console.log(alphab);
  }
})

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}
